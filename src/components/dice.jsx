

export default function Dice(props) {
    const { changeColor, number, isGreen, id } = props
    let diceColor = isGreen ? 'bg-green-400' : 'bg-white';

    return (
        <button className={`w-12 h-12 ${diceColor} shadow-md rounded`} onClick={() => { changeColor(id) }}>{number}</button>
    )
}