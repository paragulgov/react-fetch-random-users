import React from 'react'
import UserAvatar from './UserAvatar';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import Button from './Button';

const UserCard = () => {
   return (
      <Card className='mb-3 w-25'>
         <UserAvatar/>
         <CardBody>
            <CardTitle tag='h5'>name</CardTitle>
            <CardSubtitle tag='h6' className='text-muted'>email</CardSubtitle>
            <CardText>123</CardText>
         </CardBody>
         <Button onClick={ () => { console.log('delete') } } label='Remove from friends' color='danger'/>
      </Card>
   )
}

export default UserCard
