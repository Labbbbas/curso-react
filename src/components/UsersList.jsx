import { useState, useEffect } from "react"

const UsersList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsers(data)
            })
            .catch((error) => console.error('Error fetching data: ', error))
    }, [])

    return (
        <div className='space-y-3'>
            <h1 className='font-bold text-2xl'>Lista de usuarios</h1>
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
    )
}

export default UsersList