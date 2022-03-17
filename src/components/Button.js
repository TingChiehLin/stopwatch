import {useDispatch,useSelector} from "react-redux";
import {timerActions} from "../store/timer-slice";

const Button = ({text}) => {
    const dispatch = useDispatch()
    const isTimeOn = useSelector(state => state.timer.isTimeOn)

    const startTimerHandler = () => {
        dispatch(timerActions.startTimer())
    }

    const pauseHandler = () => {
        dispatch(timerActions.pauseTimer())
    }

    const resetTimerHandler = () => {
        dispatch(timerActions.resetTimer())
    }

    if (text === "Pause") {
        return (
            <button className={"py-3 px-10 bg-red-500 font-bold rounded-full"}
                    onClick={pauseHandler}
            >
                {isTimeOn ? text : "Resume"}
            </button>
        )
    }

    if (text === "Reset") {
        return (
            <button className={"py-3 px-10 bg-blue-300 font-bold rounded-full"}
                    onClick={resetTimerHandler}
            >
                {text}
            </button>
        )
    }

    return (
        <button className={"py-3 px-10 bg-gray-300 font-bold rounded-full"}
                onClick={startTimerHandler}
        >
            {text}
        </button>
    )
}

export default Button;
