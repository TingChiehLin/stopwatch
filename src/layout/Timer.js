import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SevenSegmentDisplay from "./SevenSegmentDisplay";
import {timerActions} from "../store/timer-slice";

const Timer = () => {

    const dispatch = useDispatch()
    const isTimeOn = useSelector(state => state.timer.isTimeOn)
    const isReset = useSelector(state => state.timer.isReset)
    const [time, setTime] = useState(0);

    let hours = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    let minutes = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    let seconds = ("0" + ((time / 10) % 100)).slice(-2)

    useEffect(() => {
        let interval = null;

        if (isTimeOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!isTimeOn) {
            clearInterval(interval);
        }
        if (isReset) {
            setTime(0)
        }
        return () => clearInterval(interval);
    }, [isTimeOn, isReset]);

    const lapTimerHandler = () => {
        const newRecord = {
            hours,
            minutes,
            seconds
        }
        dispatch(timerActions.lapTimerHandler(newRecord))
    }

    return (
        <>
            <div className={"my-12"}>
                <div className={"flex justify-center items-center gap-4 text-6xl"}>
                    <SevenSegmentDisplay digits={[hours.charAt(0), hours.charAt(1)]}/>
                    :
                    <SevenSegmentDisplay digits={[minutes.charAt(0), minutes.charAt(1)]}/>
                    :
                    <SevenSegmentDisplay digits={[seconds.charAt(0), seconds.charAt(1)]}/>
                </div>
                <button className={"block mx-auto mt-12 py-4 px-10 text-base bg-cyan-300 font-bold rounded-full"}
                        onClick={lapTimerHandler}
                >
                    Lap
                </button>
            </div>
        </>
    )
}

export default Timer;


