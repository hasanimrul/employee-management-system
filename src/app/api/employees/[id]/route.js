import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";


const mongoUri = process.env.MONGODB_URI;
const client = new MongoClient(mongoUri);

// Function to connect to MongoDB
const connectToDatabase = async () => {
    if (!client.isConnected) {
      await client.connect();
    }
    return client.db(); 
  };

// PUT: Update a specific employee
export async function PUT(req, { params }) {
  const db = await connectToDatabase();
  const { id } = params;
  const { name, email, mobile, address, image } = await req.json();

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  try {
    const updatedEmployee = {
      name,
      email,
      mobile,
      address,
      image: image ? `data:image/png;base64,${image}` : "",
    };

    const result = await db.collection("employees").updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedEmployee }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "Employee not found or no changes made" }, { status: 404 });
    }

    return NextResponse.json({ message: "Employee updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating employee:", error);
    return NextResponse.json({ error: "Error updating employee" }, { status: 500 });
  }
}

// DELETE: Remove a specific employee
export async function DELETE(req, { params }) {
  const db = await connectToDatabase();
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  try {
    const result = await db.collection("employees").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Employee not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Employee deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return NextResponse.json({ error: "Error deleting employee" }, { status: 500 });
  }
}
