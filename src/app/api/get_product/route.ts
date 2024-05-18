import { connectMongoDB } from "@/lib/MongoConnnect";
import Product from "@/lib/models/Prodcut";
import { NextResponse } from "next/server";

export async function GET() {
    try {

        await connectMongoDB();

        const data = await Product.find();

        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json(
            {
                error,
                msg: "Something went wrong"
            },
            { status: 400 }
        );
    }

}