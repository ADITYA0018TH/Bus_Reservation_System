import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Booking from '@/models/Booking';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> } // Params are now Promises in Next.js 15
) {
  try {
    await dbConnect();
    const { userId } = await params; // Await the params

    const bookings = await Booking.find({ userId });
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching booking history:', error);
    return NextResponse.json({ error: 'Failed to fetch booking history' }, { status: 500 });
  }
}
