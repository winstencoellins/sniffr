'use client'

import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Header() {
    const { user } = useUser()

    return (
        <>
            <div className="flex items-center mb-10">
                <div>
                    <UserButton />
                </div>

                <div className="ml-2">
                    <p className="text-xs">Good day,</p>
                    <h4>{user?.firstName} {user?.lastName}</h4>
                </div>
            </div>
        </>
    )
}