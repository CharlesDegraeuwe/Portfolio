import {ArrowRight} from "lucide-react";

interface Project {
    title: string;
    description: string;
    date: string;
    link: string;
}

const WorkSection = ({projects}: {projects: Project[]}) => {

    return (<section className={"flex border-y border-zinc-200 flex-col divide-y divide-zinc-200 w-full"}>
        {projects.map((section, index) => {
            return (<a href={section.link} key={section.title + index}
                       className={"w-full h-fit py-10 group flex flex-row opacity-100 items-center gap-10"}>
                <span>{index + 1}</span>
                <div className={"flex flex-col gap-1 min-w-0 flex-1"}>
                    <span className={"font-georgia text-3xl"}>{section.title}</span>
                    <p className={"font-roboto opacity-50 text-sm"}>{section.description}</p>
                </div>
                <span className={"text-sm opacity-30"}>{section.date}</span>
                <ArrowRight size={15}
                            className={"group-hover:opacity-100 group-hover:translate-x-2 opacity-0 transition-all duration-200 mr-2 -translate-x-2"}/>
            </a>)
        })}
    </section>)
}

WorkSection.displayName = "WorkSection";
export default WorkSection;