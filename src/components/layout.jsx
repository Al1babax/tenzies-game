import Dice from './dice';

export default function Layout(props) {

    const { changeColor, dices } = props

    let dicesArray = dices.map(dice => {
        let objectId = Object.keys(dice)[0];
        return <Dice key={objectId} id={objectId} number={dice[objectId].value} isGreen={dice[objectId].isGreen} changeColor={changeColor} />
    })


    return (
        <div className="layout w-[400px] h-[400px] bg-slate-200 absolute top-[15%] left-[35%] rounded-xl px-14">
            <div className="top w-full h-[30%] mt-10 text-center ">
                <h1 className=" text-4xl font-semibold">Tenzies</h1>
                <p className="pt-3 font-thin leading-4">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div className="dice-container  mt-5 w-full h-[30%] pt-7">
                <div className="inner-container w-full h-[80%]  grid grid-rows-2 grid-cols-5 gap-y-11 items-center gap-x-[12px]">
                    {dicesArray}
                </div>

            </div>
            <div className="bottom w-full h-[20%] flex items-center mt-5">
                <button className=" bg-blue-600 text-white text-xl font-semibold rounded w-24 mx-auto h-10" onClick={() => { props.rollDices() }}>Roll</button>
                <button className=" bg-red-600 text-white text-xl font-semibold rounded w-24 mx-auto h-10" onClick={() => { props.reset() }}>Reset</button>
            </div>
        </div>
    )
}