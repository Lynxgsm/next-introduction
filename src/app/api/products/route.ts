import { NextResponse } from "next/server";
import { prismaClient } from "../../../../lib/prisma";
import { z } from "zod";
import { Prisma } from "@prisma/client";

const productScheme = z.object({
    name: z.string(),
    image: z.string().optional(),
    price: z.number()
})

export async function POST(request: Request) {
    const data = await request.json()
    const body = productScheme.safeParse(data);

    // if (body.success) {
    try {
        const newproduct = await prismaClient.products.create({
            data
        })

        return NextResponse.json({
            message: newproduct
        }, {
            status: 201
        })

    } catch (error) {
        if (error instanceof Prisma.PrismaClientUnknownRequestError) {
            return NextResponse.json({
                message: JSON.stringify(error.message)
            }, {
                status: 500
            })
        }

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json({
                message: JSON.stringify(error.message)
            }, {
                status: 500
            })
        }
    }
    // }

    // return NextResponse.json({
    //     message: body.error.issues
    // }, {
    //     status: 500
    // })
}