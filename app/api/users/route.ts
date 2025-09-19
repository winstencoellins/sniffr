import { auth, clerkClient } from "@clerk/nextjs/server";

export async function GET() {
    const { userId } = await auth()

    if (!userId) {
        return Response.json({ success: false, message: "Unauthenticated user." }, { status: 401 })
    }

    const client = await clerkClient()
    const userList = await client.users.getUserList()

    return Response.json({ success: true, userList }, { status: 200 })
}