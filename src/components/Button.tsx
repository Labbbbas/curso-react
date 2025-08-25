type ButtonProps = {
    onclick: () => void
    label: string | number
}

const Button = ({ onclick, label }: ButtonProps) => {
    return (
        <div>

            <p className='text-lg font-semibold pb-2'>Botón con TypeScript:</p>

            <button
                onClick={onclick}
                className='rounded-2xl border cursor-pointer bg-red-600 text-white px-2 py-1'
            >{label}</button>

        </div>

    )
}

export default Button