import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, avatar } = await request.json();
  console.log(`${name}`);
  await connectMongoDB();

  // Check if the user already exists in the collection
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 409 } // Conflict status code
    );
  }

  // Create a new user
  await User.create({ name, email });

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
