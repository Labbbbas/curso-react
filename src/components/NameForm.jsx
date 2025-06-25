import { useState } from "react"

const NameForm = () => {

    const [name, setName] = useState('')

    const changeName = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <h2>Formulario de nombre</h2>

            <input
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