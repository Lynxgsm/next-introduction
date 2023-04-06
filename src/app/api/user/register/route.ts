import { NextResponse } from "next/server";
import { hash } from 'bcrypt'
import { prismaClient } from "../../../../../lib/prisma";

export async function POST(request: Request) {
    const { email, password } = await request.json()

    const hashedPassword = await hash(password, 12);
    const user = await prismaClient.user.create({
        data: {
            email,
            password: hashedPassword
        }
    })

    return NextResponse.json({
        message: user
    })
}