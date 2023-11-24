import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.css'

export default function Home() {
    const [users, setUsers] = useState([])
    const ginirateUsers = async () => {
        const response = await fetch(`https://reqres.in/api/users?page=`)
        const dataUsers = await response.json()
        setUsers(dataUsers.data || [])
    }
    useEffect(() => {
        ginirateUsers()
    }, [])

    if (users.length === 0) {
        return <p>No Users</p>
    }
    return (
        <>
            <h1>Users List</h1>
            <div className={styles.container}>
                {users.map(user => (
                    <div key={user.id} className={styles.userCard}>
                            <img src={user.avatar} />
                            <div className={styles.dataUser}>
                                <h2>{user.first_name + " " + user.last_name}</h2>
                                <p>{user.email}</p>
                                <Link to={`/profile/${user.id}`} className={styles.Link}>Read more</Link>
                            </div>
                    </div>



                ))}
            </div>
        </>
    )
}
