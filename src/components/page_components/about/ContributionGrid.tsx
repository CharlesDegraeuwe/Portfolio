import classNames from "../../../util/classNames.ts";
import {GitPullRequestArrow} from "lucide-react";
import TooltipProps from "../../design_system/Tooltip/Tooltip.tsx";
import Tooltip from "../../design_system/Tooltip/Tooltip.tsx";

type ContributionCalendar = {
    totalContributions: number;
    weeks: ContributionWeek[];
};

type ContributionWeek = {
    contributionDays: ContributionDay[];
};

type ContributionDay = {
    date: string;
    contributionCount: number;
};


interface ContributionGridProps {
    calendar: ContributionCalendar;
}

const ContributionGrid: React.FC<ContributionGridProps> = (props) => {
    const {calendar} = props;
    console.log(calendar)
    return (<div className={"relative w-full max-w-2xl flex flex-col gap-3 opacity-75 mb-5"}>
        <div className={"flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"}>
            <label className={"flex flex-row gap-2 items-center"}>
                <GitPullRequestArrow size={15}/>
                <span><a href="https://github.com/CharlesDegraeuwe" target={"_blank"} className={"hover:underline"}>My GitHub</a> Activity:</span>
            </label>
            <span className={"font-medium text-sm text-zinc-400"}>{calendar?.totalContributions} total contributions</span>
        </div>
        <div className={"w-full min-h-fit grid-cols-27 border border-zinc-300 rounded-2xl p-3 gap-1.5 md:gap-2 grid bg-white shadow-lg"}>
            {calendar?.weeks.slice(26, calendar?.weeks.length).map((week, index) => (
                <div key={index} className={"min-w-0 min-h-0 w-full h-full flex-1 flex flex-col gap-1.5 md:gap-2"}>
                    {week.contributionDays.map((day) => (
                        <Tooltip content={day.contributionCount.toString() + " contributions on " + new Date(day.date).toLocaleDateString('nl').split("-").join("/")}><
                        div
                            key={day.date}
                            style={{
                                background: calcColor(day.contributionCount)
                            }}
                        className={classNames('w-full aspect-square cursor-pointer rounded-sm')}/>
                        </Tooltip>
                    ))}
                </div>
            ))}
        </div>
    </div>)
}


//TODO kleurschema beetje aanpasse

function calcColor(count: number) {
    if(count >= 50) {
        return "oklch(47.3% 0.137 46.201)"   // amber-700
    }
    if(count >= 35) {
        return "oklch(55.5% 0.163 48.998)"   // amber-600
    }
    if(count >= 20) {
        return "oklch(66.6% 0.179 58.318)"   // amber-500
    }
    if(count >= 10) {
        return "oklch(76.9% 0.188 70.08)"    // amber-400
    }
    if(count >= 5) {
        return "oklch(82.8% 0.189 84.429)"   // amber-300
    }
    if(count >= 1) {
        return "oklch(87.9% 0.169 91.605)"   // amber-200
    }
    return "oklch(92% 0.004 286.32)"         // zinc-200 — clearly "no activity"
}
ContributionGrid.displayName = "ContributionGrid"
export default ContributionGrid;
