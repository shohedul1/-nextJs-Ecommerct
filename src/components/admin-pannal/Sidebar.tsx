'use client';

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrTransaction } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";

const menus = [
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        href: "/admin/dashboard",
    },
    {
        title: "Products",
        icon: <RiShoppingCartLine />,
        href: "/admin/products",
    },
    {
        title: "Accouts",
        icon: <MdManageAccounts />,
        href: "#",
    },
    {
        title: "Transactions",
        icon: <GrTransaction />,
        href: "#",
    },
    {
        title: "Analytics",
        icon: <TbReportAnalytics />,
        href: "#",
    },
    {
        title: "Settiong",
        icon: <IoSettings />,
        href: "#",
    }
]
const Sidebar = () => {
    const pathName = usePathname();
    const {data: session} = useSession();
    return (
        <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
            <Link href={"/admin"}>
            <div className="flex items-center gap-4">
                <Image 
                className="rounded-lg"
                src={session?.user?.image || "/knight.png"}
                alt="image"
                width={40}
                height={40}
                priority
                property="true"
                />
                <h2 className="text-lg font-semibold">{session?.user?.name || "Brave Coders English"}</h2>
            </div>
            </Link>
            <ul className="space-y-4 mt-6">
                {menus.map((menu, index) => (
                    <Link href={menu.href} key={index}
                     className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink-500 hover:text-white ${pathName === menu.href ? "bg-pink-500 text-white" : "bg-gray-200"}`}>
                        <div className="text-lg">{menu.icon}</div>
                        <p>{menu.title}</p>
                    </Link>
                ))}

            </ul>
        </div>
    )
}

export default Sidebar