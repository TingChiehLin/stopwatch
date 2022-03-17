import {useSelector} from "react-redux";
import TimeDisplay from "../components/TimeDisplay";

const TimerRecordDisplay = () => {

    const timeRecords = useSelector(state => state.timer.timeRecords)

    return (
        <div className={"h-[20rem] mb-12 p-8 bg-gray-100 shadow-md " +
                        "rounded-md flex justify-center flex-col flex-wrap"}
        >
            {
                timeRecords.map((e, index) =>
                    <TimeDisplay
                        key={Math.random().toString()}
                        id={index}
                        hours={e.hours}
                        minutes={e.minutes}
                        seconds={e.seconds}
                    />)
            }
        </div>
    )
}

export default TimerRecordDisplay;
