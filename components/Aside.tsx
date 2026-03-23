import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";
import {FiGithub} from "react-icons/fi";
import {MdAlternateEmail} from "react-icons/md";

export function Aside() {
    return (<aside className={`w-12 border-x border-zinc-300 min-h-full flex gap-7 py-30 flex-col justify-end items-center`}>
        <Link target="_blank" href={"https://github.com/CharlesDegraeuwe"} className={"w-full bg-zinc-100"}>
            <div className={"min-w-full py-2 border-y  border-zinc-300 flex items-center justify-center"}>
                <FaGithub  size={20}/>
            </div>
        </Link>

        <Link target="_blank" href={"https://www.linkedin.com/in/charles-degraeuwe-6293a1333/"} className={"w-full"}>
            <div className={"min-w-full py-2 border-y  border-zinc-300 flex items-center justify-center"}>
                <FaLinkedinIn  size={20}/>
            </div>
        </Link>

        <Link target="_blank" href={"mailto:charles.degraeuwe@icloud.com"} className={"w-full"}>
            <div className={"min-w-full py-2 border-y  border-zinc-300 flex items-center justify-center"}>
                <MdAlternateEmail size={20}/>
            </div>
        </Link>
    </aside>)
}