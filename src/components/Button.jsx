import React from 'react'
import { Button as Btn, Spinner } from 'reactstrap'

const Button = ({ onClick, label, btnLoading }) => {

   return (
      <div className='m-3'>
         { !btnLoading
            ? <Btn color='primary' onClick={ onClick }>{ label }</Btn>
            : <Spinner size='sm' color='primary'/>
         }
      </div>
   )
}

export default Button
