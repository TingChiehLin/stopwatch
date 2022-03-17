import SevenSegmentDigit from "../components/SevenSegmentDigit"

const SevenSegmentDisplay = ({digits}) => {

    return (
        <div>
            <figure className='min-w-20 w-24 flex justify-center items-center gap-4'>
                {digits.map((digit, index) => (
                    <SevenSegmentDigit key={index} character={digit}/>
                ))}
            </figure>
        </div>
    );
}

export default SevenSegmentDisplay;
