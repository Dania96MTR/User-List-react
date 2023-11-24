import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './profile.module.css'


export default function Profile() {
    const [informationUsers, setinfoUsers] = useState([])
    const { id } = useParams()
    const getCurrentUser = async (id) => {
        const response = await fetch(`https://reqres.in/api/users/${id}`)
        const currentUser = await response.json()
        setinfoUsers(currentUser.data || [])
        
    }
    useEffect(() => {
        getCurrentUser(id)
    }, [])
    return (
        <>
            <h1>User Profile</h1>
                <div key={informationUsers.id} className={styles.dataUser}>
                        <img src={informationUsers.avatar} />
                        <div >
                            <h2 className={styles.userName} >{informationUsers.first_name + " " + informationUsers.last_name}</h2>
                            <p className={styles.userEmail}>{informationUsers.email}</p>
                            <Link to={'/'} className={styles.linkPro}>Back to home</Link>
                        </div>
                </div>
                
        </>
    )
}
