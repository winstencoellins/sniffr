'use client'

import { IconHome, IconCreditCardPay, IconFriends } from "@tabler/icons-react"

import Link from "next/link"

export default function Navigation() {
    const tabs = [
        {
            icon: <IconHome />,
            tabName: "Home",
            href: "/dashboard"
        },
        {
            icon: <IconCreditCardPay />,
            tabName: "Transactions",
            href: "/dashboard/transactions"
        },
        {
            icon: <IconFriends />,
            tabName: "Friends",
            href: "/dashboard/friends"
        },
    ]

    return (
        <div className="fixed overflow-hidden bottom-5 z-10 bg-black/100 w-11/12 mx-auto py-5 rounded-xl">
            <div className="flex items-center justify-around w-full">
                {
                    tabs.map((tab, index) => (
                        <div key={index}>
                            <Link href={tab.href} className="flex flex-col items-center">
                                <span>{tab.icon}</span>
                                <p className="mt-1 text-xs">{tab.tabName}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}