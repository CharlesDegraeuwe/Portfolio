import {Mail, GitBranch} from "lucide-react";
import {navigate} from "astro:transitions/client";

const Footer = () => {
    const string = "lzhksn:bgzqkdr.cdfqzdtvd@hbkntc.bnl";
    const generateEmail = () => {
        const shifted = shiftString(string)
        navigate(shifted);
    }
    const year = new Date().getFullYear();
    return (<div className={"min-w-0 h-fit flex opacity-50 gap-13 flex-row items-center justify-between"}>
        <div className={"flex flex-row items-center gap-1"}>
            <button
                onClick={generateEmail}
                type={"button"}
                className={"text-xs cursor-pointer flex flex-row gap-1 items-center px-1.5 py-0.5 rounded-full border border-transparent hover:border-black/50 transition-colors duration-300"}>
                <Mail size={12}/> Email me
            </button>
            <a href={"https://github.com/CharlesDegraeuwe"}
               className={"text-xs cursor-pointer flex flex-row gap-1 items-center px-1.5 py-0.5 rounded-full border border-transparent hover:border-black/50 transition-colors duration-300"}
            >
                <GitBranch size={12}/> <span className={"text-xs"}>GitHub</span>
            </a>
        </div>
        <span
            className={"text-xs items-center flex flex-row"}>© 2026 {year != 2026 && "- " + year} Charles Degraeuwe</span>
    </div>)
}

function shiftString(str: string) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        let code = str.charCodeAt(i);
        if (c >= 'a' && c <= 'z') {
            result += String.fromCharCode(((code - 97 + 1) % 26) + 97);
        } else if (c >= 'A' && c <= 'Z') {
            result += String.fromCharCode(((code - 65 + 1) % 26) + 65);
        } else {
            result += c;
        }
    }
    return result;
}

export default Footer;