import React from 'react'

const UserAvatar = ({ src, width, height }) => {
   return (
      <div>
         <img className='pt-4' src={ src } width={ width } height={ height } alt='Avatar'/>
      </div>
   )
}

export default UserAvatar
