import React from 'react'
import UserCard from './UserCard'

const UsersList = ({ users }) => {
   return (
      <div className='d-flex flex-wrap'>
         {
            users.map((user, key) => <UserCard className='ml-2' key={ key } user={ user }/>)
         }
      </div>
   )
}

export default UsersList
