import React from 'react'
import UserCard from './UserCard'

const UsersList = ({ users, onAdd }) => {
   return (
      <div className='d-flex flex-wrap'>
         {
            users.map((user, key) => <UserCard className='ml-2' key={ key } user={ user } onAdd={ onAdd }/>)
         }
      </div>
   )
}

export default UsersList
