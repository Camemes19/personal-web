import Indicator from "./Indicator.jsx";


function BacklogWidget({complete, inProgress, unfinished}) {
    const totalKits = complete+inProgress+unfinished;
    const completePercent = complete/totalKits;
    const inProgressPercent = inProgress/totalKits;
    const unfinishedPercent = unfinished/totalKits;

    return (
        <div className={"mx-auto max-w-2/5 border-2 rounded-lg border-indigo-900 shadow-lg shadow-gray-950/30 p-2"}>
            <h4 className={"text-left m-2"}>Backlog Tracker</h4>
            <div className={"m-3 h-4 max-w-9/10 bg-gray-500 flex -skew-x-24 rounded-br-md rounded-tl-md"}>
                <div style={{width: `calc(100%*${unfinishedPercent}`}} className={"bg-green-600 flex rounded-tl-md" +
                    " drop-shadow-md" +
                    " drop-shadow-green-800"}></div>
                <div style={{width: `calc(100%*${inProgressPercent}`}} className={"bg-yellow-500 flex drop-shadow-md" +
                    " drop-shadow-yellow-700"}></div>
                <div style={{width: `calc(100%*${completePercent}`}} className={"bg-red-600 flex rounded-br-md" +
                    " drop-shadow-md" +
                    " drop-shadow-red-800"}></div>
            </div>
            <div className={"flex justify-center"}>
                <div className={"flex items-center m-1"}>
                    <Indicator color={"green"}/>
                    <small className={"m-1"}>Completed</small>
                </div>
                <div className={"flex items-center m-1"}>
                    <Indicator color={"yellow"}/>
                    <small className={"m-1"}>In Progress</small>
                </div>
                <div className={"flex items-center m-1"}>
                    <Indicator color={"red"}/>
                    <small className={"m-1"}>Incomplete</small>
                </div>
            </div>
        </div>
    )
}

export default BacklogWidget;