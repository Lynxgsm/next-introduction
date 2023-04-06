import { NextResponse } from "next/server";
import { prismaClient } from "../../../../lib/prisma";

export async function POST(request: Request) {
    const data = await request.json();
    const newproduct = await prismaClient.product.create({
        data
    })

    return NextResponse.json({
        ...newproduct,
        sender: "server",
        message: "success"
    })
}