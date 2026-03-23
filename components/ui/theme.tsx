"use client"
import {FiMonitor, FiMoon, FiSun} from "react-icons/fi";
import {useState} from "react";
import {useDarkMode} from "@/hooks/useDarkMode";
import {useDarkModeContext} from "@/components/providers/DarkModeProvider";
import Image from "next/image";

export default function Theme() {
    const { mode, changeMode, mounted } = useDarkModeContext()

    if (!mounted) return null
    return (
        <div className={"absolute bottom-0 px-7 py-7 w-screen flex justify-end text-zinc-800/75 dark:text-white"}>
            <div className={"min-h-full flex items-center gap-2"}>
                <div className={"min-w-14 px-1 h-10 flex items-center justify-center bg-zinc-200/20 dark:bg-zinc-500/5 backdrop-blur-2xl shadow-xl border border-zinc-300 dark:border-zinc-300/20 rounded-full gap-1 "}>
                    <div onClick={() => {changeMode("system")}}
                         className={`${mode === "system" ? "bg-zinc-200 dark:bg-zinc-500/20" : ""} cursor-pointer active:scale-95 transition-all duration-300 w-8 h-8 rounded-full hover:bg-zinc-300/75 dark:hover:bg-zinc-500/40 flex items-center justify-center`}>
                        <FiMonitor />
                    </div>
                    <div onClick={() => {changeMode("light")}}
                        className={`${mode === "light" ? "bg-zinc-200 dark:bg-zinc-500/20" : ""} cursor-pointer active:scale-95 transition-all duration-300 w-8 h-8 rounded-full hover:bg-zinc-300/75 dark:hover:bg-zinc-500/40 flex items-center justify-center`}>
                        <FiSun />
                    </div>
                    <div onClick={() => {changeMode("dark")}}
                         className={`${mode === "dark" ? "bg-zinc-200 dark:bg-zinc-500/20" : ""} cursor-pointer active:scale-95 transition-all duration-300 w-8 h-8 rounded-full hover:bg-zinc-300/75 dark:hover:bg-zinc-500/40 flex items-center justify-center`}>
                        <FiMoon />
                    </div>
                    <div  className={"w-8 cursor-pointer h-8 p-1 bg-zinc-500/30 rounded-full active:scale-95 transition-all duration-300"}>
                        <Image alt="lang" src={"./icons/english.svg"} width={0} height={0} className={"w-full"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}