import classNames from "../../util/classNames";

const OPLEIDING = [
    {
        datum: 2006,
        title: "born in Ghent",
        description: "Born & raised in Ghent, Belgium",
        active: false
    },
    {
        datum: "2024 - 2027",
        title: "Bachelor in applied Computer Science",
        description: "HOGENT, \nfocused on software engineering and AI",
        active: true
    },
    {
        datum: "2027 - 2029",
        title: "Bridge years for mathematics & science",
        description: "UGent, \nbridging program to transition into an engineering degree",
        active: false
    },
    {
        datum: "2029 - 2031",
        title: "Master in Engineering: Computer Science",
        description: "UGent, \nspecializing in software engineering and systems design",
        active: false
    },
]
const EductionTimeLine = () => {
    return(
        <div className={"flex ml-10 mb-10 py-5 h-fit flex-col gap-15 border-l border-zinc-300"}>
            {OPLEIDING.map(item => (
                <div className={'flex flex-col px-10 relative gap-3'}>
                    <div className={'justify-center flex flex-col h-fit gap-3'}>
                        <div className={classNames('absolute -left-1.75 rounded-full border bg-white border-zinc-500 w-3 min-w-3 min-h-3 h-3', item.active && "border-amber-600 bg-amber-100")}/>
                        <div className={"text-zinc-500/85"}><span className={"font-medium text-zinc-900"}>{item.datum}</span> - {item.title}</div>
                    </div>
                    {item.description && (<p className={"max-w-100 whitespace-pre-line text-sm text-zinc-400"}>
                        {item.description}
                    </p>)}

                </div>
            ))}

        </div>
    )
}

EductionTimeLine.displayName = "EductionTimeLine";
export default EductionTimeLine;