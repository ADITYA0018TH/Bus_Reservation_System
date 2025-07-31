import React, { useRef, useEffect } from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const loginButtonRef = useRef<HTMLButtonElement>(null);
  const registerButtonRef = useRef<HTMLButtonElement>(null);
  const mountRef = useRef<HTMLDivElement>(null); // Background canvas

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, buttonRef: React.RefObject<HTMLButtonElement | null>) => {
    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    }
  };

  useEffect(() => {
    // --- Background Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    // Add Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 10, 10);
    scene.add(light);

    // Cosmic Highway (Road) - Transparent
    const roadGeometry = new THREE.PlaneGeometry(20, 1000, 1, 100); // Wider road
    const roadMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0xffffff) }, // Placeholder color (won't be visible)
        color2: { value: new THREE.Color(0xffffff) }, // Placeholder color (won't be visible)
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
          vec3 color = mix(color1, color2, vUv.y);
          gl_FragColor = vec4(color, 0.0); // Alpha set to 0 for full transparency
        }
      `,
      transparent: true, // Enable transparency
    });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.rotation.x = -Math.PI / 2;
    road.position.y = -1; // Closer to camera
    scene.add(road);

    // Glowing Lane Lines
    const lineGeometry = new THREE.BufferGeometry();
    const lineVertices = new Float32Array([
      -8, 0.01, -500, -8, 0.01, 500, // Left lane
      0, 0.01, -500, 0, 0.01, 500,   // Center lane
      8, 0.01, -500, 8, 0.01, 500,   // Right lane
    ]);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(lineVertices, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffcc, linewidth: 2 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Buses Running on Road
    const busGeometry = new THREE.BoxGeometry(2, 1, 4); // Larger bus for visibility
    const buses: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>[] = [];
    for (let i = 0; i < 50; i++) { // Increase the number of buses
      const busMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(Math.random(), Math.random(), Math.random()) });
      const bus = new THREE.Mesh(busGeometry, busMaterial);
      bus.position.set((Math.random() - 0.5) * 16, 0, -i * 20 - 50); // Spread across road width
      buses.push(bus);
      scene.add(bus);
    }

    // Bikes Running on Road
    const bikeGeometry = new THREE.BoxGeometry(1, 0.5, 2); // Smaller bike for visibility
    const bikes: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>[] = [];
    for (let i = 0; i < 50; i++) { // Increase the number of bikes
      const bikeMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(Math.random(), Math.random(), Math.random()) });
      const bike = new THREE.Mesh(bikeGeometry, bikeMaterial);
      bike.position.set((Math.random() - 0.5) * 16, 0, -i * 20 - 50); // Spread across road width
      bikes.push(bike);
      scene.add(bike);
    }

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const starVertices = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starVertices[i] = (Math.random() - 0.5) * 2000;
      starVertices[i + 1] = (Math.random() - 0.5) * 2000;
      starVertices[i + 2] = (Math.random() - 0.5) * 2000;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Camera Position
    camera.position.z = 30;
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);

    // Animation Loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Move buses on road
      buses.forEach((bus) => {
        bus.position.z += 1; // Faster movement
        if (bus.position.z > 500) bus.position.z = -500; // Loop back

        // Randomly change bus color
        if (Math.random() < 0.01) {
          bus.material.color.set(new THREE.Color(Math.random(), Math.random(), Math.random()));
        }
      });

      // Move bikes on road
      bikes.forEach((bike) => {
        bike.position.z += 1.5; // Faster movement for bikes
        if (bike.position.z > 500) bike.position.z = -500; // Loop back

        // Randomly change bike color
        if (Math.random() < 0.01) {
          bike.material.color.set(new THREE.Color(Math.random(), Math.random(), Math.random()));
        }
      });

      // Rotate stars
      stars.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    // Mouse Interaction
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      camera.rotation.x = mouseY * 0.1;
      camera.rotation.y = mouseX * 0.1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Canvas */}
      <Box ref={mountRef} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />

      {/* Glassmorphism Container */}
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            padding: 4,
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              color: '#fff',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textShadow: '0 0 10px rgba(0, 255, 204, 0.8)',
            }}
          >
            Welcome to Bus Reservation System
          </Typography>
          <Typography
            variant="h5"
            color="#d1d1e6"
            paragraph
            sx={{
              fontWeight: 300,
              letterSpacing: '1px',
              textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
            }}
          >
            Book your journey with comfort and convenience
          </Typography>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              ref={loginButtonRef}
              variant="contained"
              size="large"
              onClick={() => navigate('/login')}
              onMouseMove={(e) => handleMouseMove(e, loginButtonRef)}
              sx={{
                mr: 2,
                background: 'repeating-linear-gradient(45deg, #ff0000, #e600ff, #0000ff, #ff0000)',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '50px',
                padding: '10px 30px',
                boxShadow: '0 0 15px rgba(255, 0, 122, 0.7)',
                backgroundSize: '200% 200%',
                transition: 'background-position 0.5s, transform 0.1s',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: '0 0 25px rgba(255, 0, 122, 1)',
                  backgroundPosition: 'right center',
                  animation: 'gradient-flow 2s infinite',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '200%',
                  height: '200%',
                  background: 'inherit',
                  transition: 'transform 0.5s',
                  transform: 'translate(-50%, -50%) scale(0)',
                  borderRadius: 'inherit',
                },
                '&:hover::before': {
                  transform: 'translate(-50%, -50%) scale(1)',
                },
                '& span': {
                  position: 'relative',
                  display: 'inline-block',
                  transition: 'transform 0.1s',
                },
                '&:hover span': {
                  transform: 'translate(var(--x), var(--y))',
                },
              }}
            >
              <span>Login</span>
            </Button>
            <Button
              ref={registerButtonRef}
              variant="outlined"
              size="large"
              onClick={() => navigate('/register')}
              onMouseMove={(e) => handleMouseMove(e, registerButtonRef)}
              sx={{
                color: '#fff',
                borderColor: '#1e90ff',
                borderRadius: '50px',
                padding: '10px 30px',
                boxShadow: '0 0 10px rgba(30, 144, 255, 0.5)',
                backgroundSize: '200% 200%',
                transition: 'background-position 0.5s, transform 0.1s',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: '0 0 20px rgba(30, 144, 255, 0.8)',
                  borderColor: '#1e90ff',
                  background: 'linear-gradient(45deg, #1e90ff, rgba(30, 144, 255, 0.1))',
                  backgroundPosition: 'right center',
                  animation: 'gradient-flow 2s infinite',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '200%',
                  height: '200%',
                  background: 'inherit',
                  transition: 'transform 0.5s',
                  transform: 'translate(-50%, -50%) scale(0)',
                  borderRadius: 'inherit',
                },
                '&:hover::before': {
                  transform: 'translate(-50%, -50%) scale(1)',
                },
                '& span': {
                  position: 'relative',
                  display: 'inline-block',
                  transition: 'transform 0.1s',
                },
                '&:hover span': {
                  transform: 'translate(var(--x), var(--y))',
                },
              }}
            >
              <span>Register</span>
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;