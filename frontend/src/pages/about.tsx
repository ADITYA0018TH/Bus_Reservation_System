import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Aurora from '../components/Aurora';

const About: React.FC = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden', // Ensure aurora doesn’t spill out
                background: 'linear-gradient(135deg, #0d0d1f 0%, #1a0033 100%)', // Dark cosmic gradient
            }}
        >
            {/* Enhanced Aurora with futuristic colors */}
            <Aurora
                colorStops={['#00ffcc', '#ff007a', '#1e90ff', '#8a2be2']} // Neon futuristic palette
                blend={0.8}
                amplitude={2}
                speed={0.8}
            />

            {/* Glassmorphism Container */}
            <Container maxWidth="md">
                <Paper
                    elevation={0} // Remove default shadow for glass effect
                    sx={{
                        padding: 4,
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.05)', // Transparent glass effect
                        backdropFilter: 'blur(10px)', // Blur for glassmorphism
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '16px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
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
                            textShadow: '0 0 10px rgba(0, 255, 204, 0.8)', // Neon glow
                        }}
                    >
                        About Us
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
                        Welcome to the Bus Reservation System. Our mission is to provide a seamless and convenient way for you to book your bus journeys. We are committed to offering the best service and ensuring your travel experience is comfortable and hassle-free.
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
};

export default About;