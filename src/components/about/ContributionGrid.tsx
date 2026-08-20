
import classNames from "../../util/classNames";
import {GitPullRequestArrow} from "lucide-react";

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
    return (<div className={"flex flex-col gap-3 opacity-75 mb-5"}>
        <label className={"flex flex-row gap-2 items-center"}>
            <GitPullRequestArrow size={15}/>
            <span><a href="https://github.com/CharlesDegraeuwe" target={"_blank"} className={"hover:underline"}>My GitHub</a> Activity:</span>
            </label>
        <div className={"w-full max-w-fit min-h-fit grid-cols-27 border border-zinc-300 rounded-2xl p-3 gap-2 grid bg-white shadow-lg"}>
            {calendar?.weeks.slice(26, calendar?.weeks.length).map((week, index) => (
                <div key={index} className={"min-w-0 min-h-0 w-full h-full flex-1 flex flex-col gap-2"}>
                    {week.contributionDays.map((day) => (<
                        div
                            key={day.date}
                            title={day.contributionCount.toString() + " contributions on " + new Date(day.date).toLocaleDateString('nl').split("-").join("/")}
                            style={{
                                background: calcColor(day.contributionCount)
                            }}
                        className={classNames('min-w-4 max-w-4 w-4 min-h-4 max-h-4 h-4 rounded-sm')}/>
                    ))}
                </div>
            ))}
        </div>
    </div>)
}

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
