const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Add the crypto module
require('dotenv').config(); // Import dotenv to load environment variables
const { v4: uuidv4 } = require('uuid'); // Import uuid to generate unique IDs

const app = express();
const PORT = process.env.PORT || 5001;
let JWT_SECRET = process.env.JWT_SECRET; // Get the JWT secret from environment variables

// Generate a random JWT secret if not provided in the environment
if (!JWT_SECRET) {
  JWT_SECRET = crypto.randomBytes(64).toString('hex'); // Generate a new secret key
  console.log('Generated new JWT_SECRET:', JWT_SECRET); // Output the generated secret to the console
}

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bus-reservation', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const bookingSchema = new mongoose.Schema({
  bookingId: { type: String, unique: true, default: uuidv4 },
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  passengers: { type: Number, required: true, min: 1, max: 5 }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

// Endpoint to get all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Endpoint to create a new booking
app.post('/api/bookings', async (req, res) => {
  try {
    console.log('Received booking request:', req.body); // Log the incoming request body

    const newBooking = new Booking(req.body);
    await newBooking.save();

    console.log('Booking created successfully:', newBooking); // Log the created booking
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error); // Log the error
    res.status(400).json({ error: 'Invalid booking data' });
  }
});

// Endpoint to get booking history for a user
app.get('/api/bookings/history/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const bookings = await Booking.find({ userId });
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching booking history:', error);
    res.status(500).json({ error: 'Failed to fetch booking history' });
  }
});

// Endpoint to register a new user
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Endpoint to login a user
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login user' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
