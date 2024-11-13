import connect from '@/lib/mongodb';
import Newr from '@/utils/LinkSchema';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Check if the request body can be parsed to JSON
    const body = await request.json();
    console.log("Request body:", body);  // Ensure the body is an object and `links` is an array of objects.

    // Attempt to connect to the database
    await connect();
    console.log("Connected to MongoDB");

    // Check if handle already exists
    const existingHandle = await Newr.findOne({ handle: body.handle });
    console.log("Existing handle:", existingHandle);

    if (existingHandle) {
      // If handle exists, return a failure response
      return NextResponse.json(
        { success: false, message: 'Handle already exists' },
        { status: 400 }
      );
    } else {
      // If handle does not exist, create the new document
      const newBlog = await Newr.create(body);
      console.log("New blog created:", newBlog);

      return NextResponse.json(
        { success: true, message: 'Link created successfully', data: newBlog },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { success: false, message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}
