import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;
const clientPromise = new MongoClient(uri!).connect();

export async function POST(req: Request) {
    try {
        const body = await req.json(); // Parse the JSON body
        const { email, accommodations } = body;

        if (!email) {
            return NextResponse.json(
                { error: "Email is required." },
                { status: 400 }
            );
        }

        // Connect to MongoDB and insert the data
        const client = await clientPromise;
        const db = client.db("fraserhacks");
        const collection = db.collection("attendance");

        const result = await collection.insertOne({
            email,
            accommodations,
            submittedAt: new Date(),
        });

        return NextResponse.json({ success: true, id: result.insertedId });
    } catch (error) {
        console.error("Error handling POST request:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
