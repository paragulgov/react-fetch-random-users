import React from 'react'
import { Button as Btn, Spinner } from 'reactstrap'

const Button = ({ onClick, label, btnLoading, color }) => {

   return (
      <div className='m-3'>
         { !btnLoading
            ? <Btn color={color} onClick={ onClick }>{ label }</Btn>
            : <Spinner size='sm' color='primary'/>
         }
      </div>
   )
}

export default Button
