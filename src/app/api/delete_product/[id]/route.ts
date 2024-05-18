import { connectMongoDB } from "@/lib/MongoConnnect";
import Product from "@/lib/models/Prodcut";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
    try {
        const id = URLParams.params.id;
        await connectMongoDB();

        await Product.findByIdAndDelete(id);

        return NextResponse.json({
            message: "Product Deleted Successfully"
        });
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Something wrong",
            status: 4000
        });
    }

}