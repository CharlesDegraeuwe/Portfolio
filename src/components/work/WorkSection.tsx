import {ArrowRight} from "lucide-react";
import classNames from "../../util/classNames";
import AnimateOnMount from "../layout/header/AnimateOnMount.tsx";

interface Project {
    title: string;
    description: string;
    date: string;
    link: string;
    index: number;
    tags?: string[];
    type: string
}

const WorkSection = ({projects}: { projects: Project[] }) => {

    const sorted = [...projects].sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

    return (
        <AnimateOnMount>
            <section className={"flex border-y border-zinc-200 flex-col divide-y divide-zinc-200 w-full"}>
                {sorted.map((section, index) => {
                    return (
                        <AnimateOnMount delay={(index + 1) * 100}>
                            <a href={section.link} key={section.title + index}
                               className={"w-full h-fit py-6 md:py-10 group flex flex-row opacity-100 items-center gap-4 md:gap-10"}>
                                <span>{index + 1}</span>
                                <div className={"flex flex-col gap-1 min-w-0 flex-1"}>
                                    <div className={"flex flex-row items-center gap-3"}>
                                        <span className={"font-georgia text-xl md:text-3xl"}>{section.title}</span>
                                        <div
                                            className={classNames("px-2.5 capitalize text-[13px] rounded-full py-px shadow-sm font-medium", section.type === "project" ? "bg-amber-200/75 text-amber-700 " : "bg-blue-200 text-blue-700")}>{section.type}</div>
                                    </div>
                                    <p className={"font-roboto opacity-50 text-xs md:text-sm"}>{section.description}</p>
                                </div>
                                <span
                                    className={"hidden sm:block text-sm opacity-30 whitespace-nowrap"}>{section.date}</span>
                                <ArrowRight size={15}
                                            className={"shrink-0 group-hover:opacity-100 md:group-hover:translate-x-2 opacity-0 md:opacity-0 transition-all duration-200 mr-2 md:-translate-x-2"}/>
                            </a>
                        </AnimateOnMount>)
                })}
            </section>
        </AnimateOnMount>)
}

WorkSection.displayName = "WorkSection";
export default WorkSection;