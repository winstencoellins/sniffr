import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
    const { userId } = await auth()

    if (!userId) {
        return Response.json({ success: false, message: "Unauthenticated user." }, { status: 401 })
    }

    const friendList = await prisma.friends.findMany({
        where: {
            userId: userId
        }
    })

    return Response.json({ success: true, friendList }, { status: 200 })
}

export async function POST(req: Request) {
    const { userId } = await auth()

    if (!userId) {
        return Response.json({ success: false, message: "Unauthenticated user." }, { status: 401 })
    }

    const data = await req.body

    console.log(data)

    return Response.json({ success: true, message: "Friend request has been sent." }, { status: 201 })
}