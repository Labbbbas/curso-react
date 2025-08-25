import React, { useCallback, useMemo, useState } from "react"

const Child = React.memo(({ counter }) => {
    return (
        <div>
            <p className='text-lg font-medium'>Contador con React.memo: {counter}</p>
        </div>
    )
})

function ExpensiveCalculation({ num }) {
    const result = useMemo(() => {
        console.log('Calculando...');
        return num * 2
    }, [num])
    
    return <p className='text-lg font-medium'>Contador duplicado con useMemo: {result}</p>
}

function CounterWithReactMemo() {
    const [counter, setCounter] = useState(0)

    const increment = useCallback(() => setCounter(prev => prev + 1))

    return(
        <div className='space-y-2'>
            <button 
                onClick={increment}
                className='border py-1 px-2 cursor-pointer rounded-2xl bg-red-600 text-white'
            >Incrementar con useCallback</button>
            <Child counter={counter}/>
            <ExpensiveCalculation num={counter}/>
        </div>
    )
}

export default CounterWithReactMemo