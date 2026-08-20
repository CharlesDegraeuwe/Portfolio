import {ArrowRight} from "lucide-react";

interface Project {
    title: string;
    description: string;
    date: string;
    link: string;
    index: number;
    tags?: string[];
}

const WorkSection = ({projects}: {projects: Project[]}) => {

    const sorted = [...projects].sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

    return (<section className={"flex border-y border-zinc-200 flex-col divide-y divide-zinc-200 w-full"}>
        {sorted.map((section, index) => {
            return (<a href={section.link} key={section.title + index}
                       className={"w-full h-fit py-6 md:py-10 group flex flex-row opacity-100 items-center gap-4 md:gap-10"}>
                <span>{index + 1}</span>
                <div className={"flex flex-col gap-1 min-w-0 flex-1"}>
                    <span className={"font-georgia text-xl md:text-3xl"}>{section.title}</span>
                    <p className={"font-roboto opacity-50 text-xs md:text-sm"}>{section.description}</p>
                </div>
                <span className={"hidden sm:block text-sm opacity-30 whitespace-nowrap"}>{section.date}</span>
                <ArrowRight size={15}
                            className={"shrink-0 group-hover:opacity-100 md:group-hover:translate-x-2 opacity-0 md:opacity-0 transition-all duration-200 mr-2 md:-translate-x-2"}/>
            </a>)
        })}
    </section>)
}

WorkSection.displayName = "WorkSection";
export default WorkSection;