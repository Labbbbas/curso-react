import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
    const {
        count,
        reset,
        decrement,
        increment } = useCounter(10)

    return (
        <div className='space-x-3 space-y-2'>

            <p className='text-lg font-bold'>Contador con Custom Hook: {count}</p>

            <button
                className='border rounded-2xl px-2 py-1 cursor-pointer bg-red-600 text-white'
                onClick={decrement}
            >Decrementar</button>

            <button
                className='border rounded-2xl px-2 py-1 cursor-pointer bg-red-600 text-white'
                onClick={increment}
            >Incrementar</button>

            <div>
                <button
                    className='border rounded-2xl px-2 py-1 cursor-pointer bg-black text-white'
                    onClick={reset}
                >Reset</button>
            </div>
            
        </div>
    )
}

export default CounterWithCustomHook