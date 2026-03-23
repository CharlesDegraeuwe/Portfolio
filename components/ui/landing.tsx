import Typewriter from "@/components/ui/typewriter";
import AnimateOnMount from "@/components/ui/animate";
import { FiChevronRight } from "react-icons/fi";

export default function Landing() {
    return (<div className={"w-full h-full flex flex-col items-center justify-center gap-10 text-center"}>
        <AnimateOnMount delay={100}>
            <h1 className={"w-full text-[3rem] leading-tight font-bold dark:text-white text-zinc-800"}>
                Hi, I'm
                <br/>
                <span className={"text-[5rem] text-transparent bg-clip-text bg-linear-90 drop-shadow-2xl drop-shadow-blue-400/10 from-blue-500 to-blue-300"}>Charles Degraeuwe</span>
            </h1>
        </AnimateOnMount>

            <div  className={"w-full flex items-center justify-center"}>
                <AnimateOnMount delay={400}>
                    <Typewriter/>
                </AnimateOnMount>
            </div>
            <div className={"w-full flex flex-col items-center justify-center gap-5 text-2xl font-semibold dark:text-white text-zinc-800"}>
                <AnimateOnMount delay={600}>
                    <p>🚀 Designing since a young age</p>
                </AnimateOnMount>
                <AnimateOnMount delay={800}>
                    <p>⚡ Building full-stack web applications</p>
                </AnimateOnMount>
                <AnimateOnMount delay={1000}>
                    <p>📍 Based in Ghent, Belgium</p>
                </AnimateOnMount>
        </div>
        <AnimateOnMount delay={1200}>
            <button className={"w-fit px-5 py-2 rounded-full flex items-center text-center justify-center border border-zinc-300/20"}>Connect with me
            <FiChevronRight />
            </button>
        </AnimateOnMount>
    </div>)
}