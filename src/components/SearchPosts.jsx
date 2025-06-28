import { useEffect, useState } from "react"

const SearchPosts = () => {

    const [query, setQuery] = useState('')
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            setError(null)
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)

                if (!response.ok) {
                    throw new Error('No se pudo obtener la lista de posts')
                }

                const data = await response.json()
                setPosts(data)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000);
            }
        }

        fetchPosts()

    }, [query])

    return (
        <div className='space-y-3'>

            <h1 className='text-2xl font-bold'>Lista de posts</h1>

            {
                isLoading ? <p>Cargando...</p> :

                    error ? <p>{error.message}</p> :

                        <div className='space-y-3'>

                            <input
                                className='border text-center'
                                type='text'
                                placeholder='Busca por título'
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        setQuery(input)
                                    }
                                }}
                            />

                            {
                                posts.length !== 0 ?

                                    <ul className='space-y-3'>
                                        {
                                            posts.map((post) => (
                                                <li key={post.id} className='text-base font-bold'>
                                                    User ID: {post.userId}
                                                    <p className='text-lg  text-red-600'>{post.title}</p>
                                                    <p className='font-normal'>{post.body}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    : <p>No hay coincidencias con <strong>{query}</strong></p>

                            }
                        </div>
            }
        </div>
    )
}

// Le puse el estado input para que sólo hiciera el query cuando escribamos y demos Enter, 
// en lugar de hacerlo al escribir cada letra, ya que eso genera demasiada peticiones

export default SearchPosts