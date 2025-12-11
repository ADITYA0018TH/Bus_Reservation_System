import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const bookingSchema = new mongoose.Schema({
  bookingId: { type: String, unique: true, default: uuidv4 },
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  passengers: { type: Number, required: true, min: 1, max: 5 },
  userId: { type: String, required: false } // Keeping optional for now to support guest bookings or migration
}, {
  timestamps: true
});

// Prevent overwrite on hot reload
const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;
