const Card = ({ title, description }) => {
    return (
        <section>
            <h2 className='font-bold text-xl'>{title}</h2>
            <p>{description}</p>
        </section>
    )
}

export default Card