import Button from './components/Button';
import Timer from "./layout/Timer";
import {useSelector} from "react-redux";
import ColorHandler from "./components/ColorHandler";
import TimerRecordDisplay from "./layout/TimerRecordDisplay";
import NewButton from './components/NewButton';

const App = () => {
    const isTimeOn = useSelector(state => state.timer.isTimeOn)

    const startButtonHandler = () => {
        alert("Start")
    }

    return (
        <div className="w-[64rem] mx-auto">
            <Timer/>
            <div className={"flex justify-center items-center gap-4"}>
                <NewButton text={"TestButton"} onClick={startButtonHandler} className={"py-2 px-6 bg-green-300"}/>
                <Button text={"Start"}/>
                <Button text={"Pause"}/>
                {!isTimeOn && <Button text={"Reset"}/>}
            </div>
            <div className={"my-12 mx-auto"}>
                <div className={"text-2xl text-center"}>Change Color Scheme</div>
                <div className={"mt-12 flex justify-center items-center gap-4"}>
                    <ColorHandler color={"blue"} className={"p-12 bg-blue-300 rounded-full"}/>
                    <ColorHandler color={"red"} className={"p-12 bg-red-300 rounded-full"}/>
                    <ColorHandler color={"green"} className={"p-12 bg-green-300 rounded-full"}/>
                </div>
            </div>
            <TimerRecordDisplay/>
        </div>
    );
}

export default App;
