import React from 'react'
import BestFriendCard from './BestFriendCard'

const BestFriendsList = ({ users }) => {
   return (
      <>
         <h3>Friends</h3>
         <div className='d-flex flex-wrap'>
            <BestFriendCard className='ml-2'/>
            <BestFriendCard className='ml-2'/>
            <BestFriendCard className='ml-2'/>
            <BestFriendCard className='ml-2'/>
            <BestFriendCard className='ml-2'/>
         </div>
      </>
   )
}

export default BestFriendsList
