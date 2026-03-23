import {FaGithub, FaLinkedinIn, FaSpotify} from "react-icons/fa";
import Link from "next/link";
import {FiGithub} from "react-icons/fi";
import {MdAlternateEmail} from "react-icons/md";
import {AiOutlineSpotify} from "react-icons/ai";

export function Aside() {
    return (<aside className={` left-2 bg-stripes absolute h-screen w-12 border-x border-zinc-300 dark:border-zinc-300/20 min-h-full flex gap-7 py-30 flex-col justify-end items-center text-zinc-800/75 dark:text-white`}>
        <Link target="_blank" href={"https://github.com/CharlesDegraeuwe"} className={"w-full bg-zinc-100 dark:bg-zinc-900"}>
            <div className={"min-w-full py-2 border-y dark:text-white border-zinc-300 dark:border-zinc-300/20 flex items-center justify-center"}>
                <FaGithub  size={20} className={"hover:scale-105 transition-all duration-300"}/>
            </div>
        </Link>

        <Link target="_blank" href={"https://www.linkedin.com/in/charles-degraeuwe-6293a1333/"} className={"w-full bg-zinc-100 dark:bg-zinc-900"}>
            <div className={"min-w-full py-2 border-y dark:text-white border-zinc-300 dark:border-zinc-300/20 flex items-center justify-center"}>
                <FaLinkedinIn  size={20} className={"hover:scale-105 transition-all duration-300"}/>
            </div>
        </Link>

        <Link target="_blank" href={"mailto:charles.degraeuwe@icloud.com"} className={"w-full bg-zinc-100 dark:bg-zinc-900"}>
            <div className={"min-w-full py-2 border-y dark:text-white border-zinc-300 dark:border-zinc-300/20 flex items-center justify-center"}>
                <MdAlternateEmail size={20} className={"hover:scale-105 transition-all duration-300"}/>
            </div>
        </Link>
    </aside>)
}