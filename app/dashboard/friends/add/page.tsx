'use client'

import Image from "next/image";
import Link from "next/link";

export default function AddFriends() {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Search Friends</h1>
                <Link href="/dashboard/friends" className="bg-white text-black px-3 py-2 rounded-xl">Back</Link>
            </div>

            <div className="mt-10 mb-5">
                <input placeholder="Search friends ..." className="bg-black/50 px-3 py-2 rounded-xl w-full" />
            </div>

            <div className="flex my-5 items-center bg-black/75 py-5 px-3 rounded-xl justify-between">
                <div className="flex items-center">
                    <Image src="" alt="icon"/>

                    <div className="ml-2">
                        <h3>Xhelinskii Sandaugh</h3>
                        <p>Female</p>
                    </div>
                </div>

                <button>Add</button>
            </div>
        </>
    )
}