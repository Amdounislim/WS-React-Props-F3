import React from 'react'
import UserCard from './UserCard'

const Users = ({persons}) => {
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            {persons.map((el, i)=>(<UserCard key={i} student={el}/>))}
        </div>
    )
}

export default Users
