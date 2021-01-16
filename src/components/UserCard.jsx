import React from 'react'
import UserAvatar from './UserAvatar'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import Button from './Button'

const UserCard = ({ user }) => {
   return (
      <Card className='mb-3 w-25'>
         <UserAvatar src={ user.picture.large }/>
         <CardBody>
            <CardTitle tag='h5'>{ `${ user.name.first } ${ user.name.last }` }</CardTitle>
            <CardSubtitle tag='h6' className='text-muted'>{ user.email }</CardSubtitle>
            <CardText>{ `${ user.phone } ${ user.nat }` }</CardText>
         </CardBody>
         <Button onClick={ () => { console.log('add') } } label='Add to friends' color='success'/>
      </Card>
   )
}

export default UserCard
