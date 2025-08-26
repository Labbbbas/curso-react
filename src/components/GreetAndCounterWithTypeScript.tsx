import { useState } from "react"

// Podemos tipar el argumento y lo que devuelve la función :o
function greet(name: string): string {
    return `Hola ${name}`
}

const GreetAndCounterWithTypeScript = () => {
    // El estado sólo puede ser un número
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev + 1)

    return (
        <div className='space-y-2'>
            <p className='text-xl font-semibold'>Saludo/Contador con TypeScript</p>
            <p className='text-lg font-medium'>{greet('Teresa')}</p>
            <button className='border cursor-pointer text-white bg-red-600 px-2 py-1 rounded-2xl' onClick={increment}>Incrementar: {count}</button>
        </div>
    )
}

export default GreetAndCounterWithTypeScript