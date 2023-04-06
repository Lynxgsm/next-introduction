import { NextRequest, NextResponse } from "next/server";
import serverAuth from "../../../../../lib/auth";
import { NextApiRequest } from "next";



export async function GET(request: NextApiRequest) {
    try {
        const { currentUser } = await serverAuth(request);
        return NextResponse.json({ currentUser })
    } catch (error) {
        return NextResponse.json({ message: "User is not logged in" }, {
            status: 400
        })

    }
}