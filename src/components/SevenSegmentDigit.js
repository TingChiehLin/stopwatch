import {useSelector} from "react-redux";

function charToSSD(character) {
    const segmentArrays = {
        // Numbers
        '0': [true, true, true, false, true, true, true],
        '1': [false, false, false, false, false, true, true],
        '2': [false, true, true, true, true, true, false],
        '3': [false, false, true, true, true, true, true],
        '4': [true, false, false, true, false, true, true],
        '5': [true, false, true, true, true, false, true],
        '6': [true, true, true, true, true, false, true],
        '7': [false, false, true, false, false, true, true],
        '8': [true, true, true, true, true, true, true],
        '9': [true, false, true, true, true, true, true],
        // Letters
        a: [true, true, true, true, false, true, true],
        b: [true, true, false, true, true, false, true],
        c: [true, true, true, false, true, false, false],
        d: [false, true, false, true, true, true, true],
        e: [true, true, true, true, true, false, false],
        f: [true, true, true, true, false, false, false],
        g: [true, true, true, false, true, false, true],
        h: [true, true, false, true, false, true, true],
        i: [false, false, false, false, false, true, true],
        j: [false, true, false, false, true, true, true]
    };
    if (typeof character === 'number') character = character.toString();
    if (segmentArrays[character] === undefined || segmentArrays[character] === null) {
        return new Error('The character passed is not supported. Only pass the letters "a" through "j" or the numbers "0" through "9".')
    }
    return segmentArrays[`${character}`];
};

const SevenSegmentDigit = ({character}) => {

    const color = useSelector(state => state.color.value)
    const svg = {
        fill: `${color}`
    }

    const displayStates = charToSSD(character);
    const segments = [
        displayStates[0] ?
            <polygon
                className={"text-red-500 text-2xl"}
                id='v_top-left'
                key='v_top-left'
                points='3,4.6 0,9.6 0,39.4 3,44.4 6.1,39.4 6.1,9.6'
            /> : null,
        displayStates[1] ?
            <polygon
                id='v_bottom-left'
                key='v_bottom-left'
                points='3,48.1 0,53.1 0,82.8 3,87.8 6.1,82.8 6.1,53.1'
            /> : null,
        displayStates[2] ?
            <polygon
                id='h_top'
                key='h_top'
                points='4.8,3 9.8,6.1 39.5,6.1 44.5,3 39.5,0 9.8,0'
            /> : null,
        displayStates[3] ?
            <polygon
                id='h_middle'
                key='h_middle'
                points='4.8,46.2 9.8,49.3 39.5,49.3 44.5,46.2 39.5,43.2 9.8,43.2'
            /> : null,
        displayStates[4] ?
            <polygon
                id='h_bottom'
                key='h_bottom'
                points='4.8,89.7 9.8,92.7 39.5,92.7 44.5,89.7 39.5,86.6 9.8,86.6'
            /> : null,
        displayStates[5] ?
            <polygon
                id='v_top-right'
                key='v_top-right'
                points='46.3,4.6 49.3,9.6 49.3,39.4 46.3,44.4 43.2,39.4 43.2,9.6'
            /> : null,
        displayStates[6] ?
            <polygon
                id='v_bottom-right'
                key='v_bottom-right'
                points='46.3,48.1 49.3,53.1 49.3,82.8 46.3,87.8 43.2,82.8 43.2,53.1'
            /> : null
    ];
    return (
        <svg style={svg} className={``} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 49.3 92.7'
             preserveAspectRatio='xMidYMid meet'>
            {segments}
        </svg>
    );
}

export default SevenSegmentDigit;
