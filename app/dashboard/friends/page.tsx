'use client'

import Image from "next/image";
import Link from "next/link";

export default function Friends() {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Friends List</h1>
                <Link href="/dashboard/friends/add" className="bg-white text-black px-3 py-2 rounded-xl">Add Friend</Link>
            </div>

            <div className="flex my-5 items-center justify-between bg-black/75 py-5 px-3 rounded-xl">
                <div className="flex items-center">
                    <Image src="" alt="icon"/>

                    <div className="ml-2">
                        <h3>Xhelinskii Sandaugh</h3>
                        <p className="text-xs mt-2">Female</p>
                    </div>
                </div>

                <button className="bg-red-500 text-white px-3 py-2 rounded-xl">Remove</button>
            </div>
        </>
    )
}