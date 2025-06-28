import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify'

const SearchPosts = () => {

    const [query, setQuery] = useState('')
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [topic, setTopic] = useState('')

    useEffect(() => {
        const fetchPosts = async () => {

            setError(null)

            try {
                const url = query && topic
                    ? `https://jsonplaceholder.typicode.com/posts?${topic}_like=${query}`
                    : 'https://jsonplaceholder.typicode.com/posts'

                const response = await fetch(url)

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

    }, [topic, query])

    const searchBy = () => {
        if (topic) {
            return `Search by ${topic}`
        }
        else {
            return 'Search'
        }
    }

    return (
        <div className='space-y-3'>

            <h1 className='text-2xl font-bold'>Lista de posts</h1>

            {
                isLoading ? <p>Cargando...</p> :

                    error ? <p>{error.message}</p> :

                        <div className='space-y-3'>
                            <div className='flex justify-center gap-3'>
                                <button
                                    className='cursor-pointer border p-1 px-2 rounded-2xl bg-red-500 text-white'
                                    onClick={() => {
                                        setTopic('userId')
                                        setQuery('')
                                        setInput('')
                                    }}
                                >By userId</button>
                                <button
                                    className='cursor-pointer border p-1 px-2 rounded-2xl bg-red-500 text-white'
                                    onClick={() => {
                                        setTopic('title')
                                        setQuery('')
                                        setInput('')
                                    }}
                                >By title</button>
                                <button
                                    className='cursor-pointer border p-1 px-2 rounded-2xl bg-red-500 text-white'
                                    onClick={() => {
                                        setTopic('body')
                                        setQuery('')
                                        setInput('')
                                    }}
                                >By body</button>
                            </div>

                            <input
                                className='border text-center'
                                type='text'
                                placeholder={searchBy()}
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        if (!topic && input) {
                                            toast.info('Selecciona un filtro')
                                        }
                                        else {
                                            setQuery(input)
                                        }
                                    }
                                }}
                            />
                            <ToastContainer
                                position="top-right"
                                autoClose={2000} // 2 segundos
                                hideProgressBar={true}
                                pauseOnHover={false}
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