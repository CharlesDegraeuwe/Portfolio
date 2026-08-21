import classNames from "../../../util/classNames.ts";

const OPLEIDING = [
    {
        startDate: 2006,
        endDate: 2006,
        title: "born in Ghent",
        description: "Born & raised in Ghent, Belgium",
    },
    {
        startDate: 2024,
        endDate: 2027,
        title: "Bachelor in applied Computer Science",
        description: "HOGENT, \nfocused on software engineering and AI",
    },
    {
        startDate: 2027,
        endDate: 2029,
        title: "Bridge years for mathematics & science",
        description: "UGent, \nbridging program to transition into an engineering degree",
    },
    {
        startDate: 2029,
        endDate: 2031,
        title: "Master in Engineering: Computer Science",
        description: "UGent, \nspecializing in software engineering and systems design",
    },
]
const EductionTimeLine = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className={"flex ml-10 mb-10 py-5 h-fit flex-col gap-15 border-l border-zinc-300"}>
            {OPLEIDING.map(item => {
                const hasPassed = item.endDate < currentYear;
                const isActive = item.endDate > currentYear && item.startDate < currentYear;
                return (
                    <div className={'flex flex-col px-10 relative gap-3'}>
                        <div className={'justify-center flex flex-col h-fit gap-3'}>
                            <div
                                className={classNames('absolute -left-1.75 rounded-full border bg-white border-zinc-500 w-3 min-w-3 min-h-3 h-3',
                                    isActive && "border-amber-600 bg-amber-100",
                                )}/>
                            <div className={classNames("text-zinc-500/85",  !hasPassed && !isActive && "opacity-35")}><span
                                className={"font-medium text-zinc-900"}>{item.startDate === item.endDate ? item.startDate : item.startDate + " - " + item.endDate}</span> - {item.title}</div>
                        </div>
                        {item.description && (<p className={classNames("max-w-100 whitespace-pre-line text-sm text-zinc-400", !hasPassed && !isActive && "opacity-35")}>
                            {item.description}
                        </p>)}

                    </div>
                )
            })}

        </div>
    )
}

EductionTimeLine.displayName = "EductionTimeLine";
export default EductionTimeLine;