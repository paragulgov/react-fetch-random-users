import React from 'react'
import BestFriendCard from './BestFriendCard'

const BestFriendsList = ({ friends, onDel }) => {
   return (
      <>
         <h3>Friends</h3>
         <div className='d-flex flex-wrap'>
            {
               friends.map((friend, key) => <BestFriendCard className='ml-2' key={key} friend={friend} onDel={onDel}/>)
            }
         </div>
      </>
   )
}

export default BestFriendsList
