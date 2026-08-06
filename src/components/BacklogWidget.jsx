import Indicator from "./Indicator.jsx";


function BacklogWidget() {
    return (
        <div className={"mx-auto max-w-2/5 border-2 rounded-lg border-indigo-900 shadow-lg shadow-gray-950/30 p-2"}>
            <h4 className={"text-left m-2"}>Backlog Tracker</h4>
            <div className={"m-3 h-4 max-w-9/10 bg-gray-500 flex -skew-x-24 rounded-br-md rounded-tl-md"}>
                <div style={{width: "50%"}} className={"bg-red-500 flex rounded-tl-md drop-shadow-md" +
                    " drop-shadow-red-700"}></div>
                <div style={{width: "5%"}} className={"bg-yellow-500 flex drop-shadow-md" +
                    " drop-shadow-yellow-700"}></div>
                <div style={{width: "45%"}} className={"bg-green-600 flex rounded-br-md drop-shadow-md" +
                    " drop-shadow-green-800"}></div>
            </div>
            <div>
                <Indicator color={"red"}/>
                <small className={"m-1"}>Completed</small>
                <Indicator color={"yellow"}/>
                <small className={"m-1"}>In Progress</small>
                <Indicator color={"green"}/>
                <small className={"m-1"}>Incomplete</small>
            </div>
        </div>
    )
}

export default BacklogWidget;