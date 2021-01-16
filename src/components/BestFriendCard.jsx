import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import Button from './Button'

const BestFriendsCard = ({ friend, onDel }) => {
   return (
      <Card className='mb-3 w-25'>
         <CardBody>
            <CardTitle tag='h5'>{`${ friend.firstName } ${ friend.lastName }`}</CardTitle>
         </CardBody>
         <Button onClick={ () => onDel(friend.firstName, friend.lastName) } label='Remove from friends' color='danger'/>
      </Card>
   )
}

export default BestFriendsCard
