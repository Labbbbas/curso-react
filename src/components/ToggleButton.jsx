import { useState } from "react";

const ToggleButton = () => {
    
    const [isActive, setIsActive] = useState(false)
    
    const color = isActive ? 'bg-red-500' : 'bg-red-400'

    return (
        <button className={`${color} w-20 rounded-xl cursor-pointer`} onClick={() => setIsActive(!isActive)}>
            { isActive ? 'Activo' : 'Inactivo' }
        </button>
        
    )
}

export default ToggleButton;