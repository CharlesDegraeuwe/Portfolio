"use client"
import Link from "next/link";
import {useEffect, useState} from "react";
import {useParams, usePathname, useSearchParams} from "next/navigation";
import {IoSearch} from "react-icons/io5";

export default function Header() {
    const [isActive, setIsActive] = useState<Boolean>(false);
    const pathname = usePathname();
    const [hash, setHash] = useState('');



    return (<div className={"absolute w-full flex max-h-14 min-w-screen py-2 justify-center h-20"}>
        <div className="flex items-center justify-center border-y border-zinc-300 min-w-screen overflow-hidden">
            <div className={`z-20 max-w-4/6 flex-1 bg-zinc-100 items-center justify-between flex p-0 h-full`}>
                <Link href={"/#home"} onClick={() => setHash("#home")} className={"min-h-full flex items-center border-x border-zinc-300"}>
                    <h1 className={"font-sfpro text-blue-500 font-semibold"}>{"<CD/>"}</h1>
                </Link>

                <div className={"w-fit flex h-full gap-7"}>
                    <div className={`min-h-full flex items-center border-x border-zinc-300`}>
                        <nav className={"w-fit px-3 py-2  bg-zinc-200/20 backdrop-blur-2xl shadow-xl border border-zinc-300 items-center justify-center rounded-full list-none flex flex-row gap-1"}>
                            <li>
                                <Link href={"/#about-me"} onClick={() => setHash("#about-me")}
                                      className={`${hash === "#about-me" ? "font-semibold" : "font-normal"} flex min-w-20 justify-center`}>
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link href={"/#portfolio"} onClick={() => setHash("#portfolio")}
                                      className={`${hash === "#portfolio" ? "font-semibold" : "font-normal"} flex min-w-20 justify-center`}>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href={"/#contact"} onClick={() => setHash("#contact")}
                                      className={`${hash === "#contact" ? "font-semibold" : "font-normal"} flex min-w-17 justify-center`}>
                                    Contact
                                </Link>
                            </li>
                        </nav>
                    </div>
                    <div className={"min-h-full flex items-center border-x border-zinc-300"}>
                        <div className={"min-w-14 px-3 h-10 flex items-center justify-center bg-zinc-200/20 backdrop-blur-2xl shadow-xl border border-zinc-300 rounded-full gap-1 text-zinc-800/75"}>
                            <IoSearch />
                            <span>
                                ⌘k
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}