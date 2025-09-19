'use client'

import Link from "next/link"
import { IconReportMoney, IconUserPlus } from "@tabler/icons-react"

export default function Dashboard() {
    const actionMenu = [
        {
            icon: <IconReportMoney color="black" size={30}/>,
            action: "Request Money",
            href: "/dashboard/transactions/add",
        },
        {
            icon: <IconUserPlus color="black" size={30}/>,
            action: "Add Friend",
            href: "/dashboard/friends/add",
        },
    ]



    return (
        <>
            <div>
                <p>Your total unpaid bill</p>
                <h1 className="text-4xl mt-1">Rp. 15,000</h1>
            </div>

            <div className="grid grid-cols-2 gap-x-2 my-10">
                {
                    actionMenu.map((action, index) => (
                        <div key={index} className="bg-black/75 py-8 px-5 rounded-3xl">
                            <Link href={action.href}>
                                <div className="bg-white rounded-full w-fit px-3 py-3">
                                    {action.icon}
                                </div>

                                <p className="mt-10">{action.action}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>

            <div className="my-10">
                <h3>Your pending transactions</h3>
                <div className="mt-5">
                    <div className="bg-black/75 py-5 px-3 flex justify-between rounded-xl">
                        {/* Image */}
                        <div>
                            <h3>Bill description</h3>
                            <p className="text-xs mt-1">04 Aug, 2025</p>
                        </div>

                        <div className="text-right">
                            <p>Rp. 100,000</p>
                            <p className="text-xs mt-1">Sender name</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}