
function Indicator({color}) {
    let fillColor = "fill-gray-500";
    let shadowColor = "drop-shadow-gray-700";

    switch(color) {
        case "green":
            fillColor = "fill-green-600";
            shadowColor = "drop-shadow-green-800";
            break;
        case "yellow":
            fillColor = "fill-yellow-500";
            shadowColor = "drop-shadow-yellow-700"
            break;
        case "red":
            fillColor = "fill-red-500";
            shadowColor = "drop-shadow-red-700"
            break;
        default:
            console.error(`Unsupported color choice`);
    }
    return (
        <svg viewBox={"0 0 25 25"} xmlns="http://www.w3.org/2000/svg" width={"0.75em"} height={"0.75em"}
             className={`drop-shadow-sm ${shadowColor}`}
        >
            <circle r={"30%"} cx={"50%"} cy={"50%"} className={fillColor}></circle>
        </svg>
    )
}

export default Indicator