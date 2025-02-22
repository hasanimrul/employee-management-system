import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB URI from environment variable
const mongoUri = process.env.MONGODB_URI;
const client = new MongoClient(mongoUri);

// Function to connect to MongoDB
const connectToDatabase = async () => {
    if (!client.isConnected) {
      await client.connect();
    }
    return client.db(); // Return the database
  };
  

// GET: Fetch all employees
export async function GET() {
  const db = await connectToDatabase();
  try {
    const employees = await db.collection('employees').find({}).toArray();
    return NextResponse.json(employees, { status: 200 });
  } catch (error) {
    console.error("Error fetching employees:", error);
    return NextResponse.json({ error: "Error fetching employees" }, { status: 500 });
  }
}

// POST: Add a new employee
export async function POST(req) {
    const db = await connectToDatabase();
    
    // Parse the request body as JSON
    const { name, email, mobile, address, image } = await req.json();  
  
    let imageBase64 = "";
    if (image) {
      // If image is a base64 string, handle it directly
      if (typeof image === "string") {
        imageBase64 = `data:image/png;base64,${image}`;
      }
      // If image is a file object, handle it as file and convert it to base64
      else if (image instanceof Blob) {
        const buffer = await image.arrayBuffer();  // Convert file to ArrayBuffer
        imageBase64 = `data:image/png;base64,${Buffer.from(buffer).toString("base64")}`;
      }
    }
  
    try {
      const newEmployee = {
        name,
        email,
        mobile,
        address,
        image: imageBase64,  // If image exists, store the base64 string
      };
  
      const result = await db.collection('employees').insertOne(newEmployee);
      return NextResponse.json(newEmployee, { status: 201 });
    } catch (error) {
      console.error("Error adding employee:", error);
      return NextResponse.json({ error: "Error adding employee" }, { status: 500 });
    }
  }
  
