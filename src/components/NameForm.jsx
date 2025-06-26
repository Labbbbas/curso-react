import { useState } from "react"

const NameForm = () => {

    const [name, setName] = useState('')

    const changeName = (event) => {
        setName(event.target.value)
    }

    return (
        <div className='space-y-1'>
            <h2 className='font-bold text-xl'>Formulario de nombre</h2>

            <input
                className='mt-2 border text-center cursor-pointer'
                type="text"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={changeName}
            />

            <p>Hola, {name || 'visitante'}</p>
        </div>
    )
}

export default NameForm