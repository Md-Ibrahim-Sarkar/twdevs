import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { code } = await req.json();

    // Here you would typically save to your database
    // For example with MongoDB:
    // await db.collection('playground-submissions').insertOne({ code, createdAt: new Date() });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving code:', error);
    return NextResponse.json(
      { error: 'Failed to save code' },
      { status: 500 }
    );
  }
} 