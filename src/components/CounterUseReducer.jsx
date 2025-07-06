import { useReducer } from "react";

const CounterUseReducer = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div className='space-y-1.5'>
            <p className='text-lg font-semibold'>Contador: {state.count}</p>
            <div className='flex gap-2'>
                <button
                    onClick={() => dispatch({ type: 'increment' })}
                    className='rounded-2xl border p-1 cursor-pointer bg-red-600 text-white'
                >
                    Incrementar
                </button>
                <button
                    onClick={() => dispatch({ type: 'decrement' })}
                    className='rounded-2xl border p-1 cursor-pointer bg-red-600 text-white'
                >
                    Decrementar
                </button>
            </div>
        </div>
    )
}

export default CounterUseReducer;