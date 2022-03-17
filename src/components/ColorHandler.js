import {useDispatch} from "react-redux";
import {colorActions} from "../store/color-slice";

const ColorHandler = ({color, className}) => {

    const dispatch = useDispatch()
    const changeColorHandler = () => {
        dispatch(colorActions.changeColor(color))
    }

    return (
        <button className={className}
                onClick={changeColorHandler}
        >
        </button>
    )
}

export default ColorHandler;
