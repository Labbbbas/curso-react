import { useState, useEffect } from "react"

const UsersList = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')

                if (!response.ok) {
                    throw new Error('No se pudo obtener la lista de usuarios')
                }

                const data = await response.json()
                setUsers(data)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            }
        }

        fetchUsers()

    }, [])

    return (
        <div className='space-y-3'>
            <h1 className='font-bold text-2xl'>Lista de usuarios</h1>
            {
                isLoading ? <p>Cargando...</p> :
                    error ? <p>{error.message}</p> :
                        <div>
                            <ul className='space-y-5'>
                                {
                                    users.map((user) => (
                                        <li className='font-bold text-md text-red-600' key={user.id}>
                                            {user.name}
                                            <div className='font-medium text-black'>
                                                <p>Username: {user.username}</p>
                                                <p>Email: {user.email}</p>
                                                <p>Ciudad: {user.address.city}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
            }
        </div>
    )
}

export default UsersList