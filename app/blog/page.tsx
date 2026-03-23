export default function BlogPage() {
    return (<div className={"w-full min-h-full"}>
        <div className={"w-full h-full border-zinc-300/20 border pb-12"}>
            <div className={"font-bold text-xl p-2 border-r border-zinc-300/20 w-fit"}>Blog:</div>
            <div className={"bg-stripes h-5 overflow-hidden w-full border-t border-zinc-300/20"}/>
            <div className={"w-full border-y border-zinc-300/20 divide-zinc-300/20 h-full grid grid-cols-3 overflow-y-scroll"}>
                {Array.from({ length: 7 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-[15rem] border-r border-b flex items-center justify-baseline border-zinc-300/20"
                    >
                        <div className={"min-w-full min-h-2/4 border-b border-zinc-300/20"}></div>
                        <div className={"w-full h-2/5"}></div>

                    </div>
                ))}
            </div>
        </div>
    </div>)
}
