const TimeDisplay = ({id, hours, minutes, seconds}) => {

    return (
        <div className={"flex items-center justify-center gap-1"}>
            <div className={"font-bold"}>Number: {id}</div>
            <div className={"ml-12"}>{hours}h</div>
            <div>{minutes}m</div>
            <div>{seconds}s</div>
        </div>
    )
}

export default TimeDisplay;
