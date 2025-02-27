"use client";

import Image from "next/image";
import Link from "next/link";
import DescriptionIcon from '@mui/icons-material/Description';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FlatwareIcon from '@mui/icons-material/Flatware';

const activeMenu = 'pos';

const Sidebar = () => {
    return (
        <div className="flex flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4 ">
            <div className="flex flex-col items-center py-4 flex-shrink-0 w-[70px] bg-red-700 rounded-3xl shadow-[0_0_5px_5px#f1f1f1]">
                <span
                    className="flex items-center justify-center h-12 w-12 bg-red-50 text-white rounded-full">
                    <Image src="/HOTPIZZALOGO.webp" alt="HOTPIZZALOGO" width={100} height={100} className="rounded-full bg-cover" />
                </span>
                <ul className="flex flex-col space-y-2 mt-12">
                    <li>
                        <Link href="#"
                            className="flex items-center"
                            title="Dashboard"
                        >
                            <span
                                className={`flex items-center justify-center h-12 w-12 rounded-2xl ${activeMenu === 'pos' ? 'bg-red-600 shadow-lg text-white' : 'hover:bg-red-900 text-white'
                                    }`}
                            >
                                <FlatwareIcon />
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link href="#"
                            className="flex items-center"
                            title="Active orders"
                        >
                            <span className="flex items-center justify-center text-white hover:bg-red-900 h-12 w-12 rounded-2xl">
                                <LocalFireDepartmentIcon />
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link href="#"
                            className="flex items-center"
                            title="Reports"
                        >
                            <span className="flex items-center justify-center text-white hover:bg-red-900 h-12 w-12 rounded-2xl">
                                <DescriptionIcon />
                            </span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="#"
                            className="flex items-center">
                            <span className="flex items-center justify-center text-white hover:bg-red-900 h-12 w-12 rounded-2xl">
                                <svg className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </span>
                        </Link>
                    </li> */}
                </ul>

            </div>
        </div>
    )
}

export default Sidebar