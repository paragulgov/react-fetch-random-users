import React from 'react'
import UsersList from './components/UsersList'
import Button from './components/Button'
import Preloader from './components/Preloader'
import { Container } from 'reactstrap'
import BestFriendsList from './components/BestFriendsList'
import { connect } from 'react-redux'

class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = { mountLoading: true, btnLoading: false, users: [] }
   }

   fetchUsers() {
      const url = `https://randomuser.me/api/?results=12`

      fetch(url)
         .then(response => response.json())
         .then(result => {
            this.setState({ users: result.results, mountLoading: false, btnLoading: false })
         })
         .catch(e => console.log(e))
   }

   fetchNewUsers = () => {
      this.setState({ btnLoading: true })
      this.fetchUsers()
   }

   componentDidMount() {
      this.fetchUsers()
   }

   render() {
      console.log('render')
      if (this.state.mountLoading) return <Preloader/>

      return (
         <Container className='text-center'>
            <Button onClick={ this.fetchNewUsers } label='Request new users' btnLoading={ this.state.btnLoading } color='primary'/>

            <UsersList users={ this.state.users } onAdd={this.props.onAdd}/>

            <BestFriendsList friends={this.props.friends} onDel={this.props.onDel}/>

         </Container>
      )
   }

}

function mapStateToProps(state) {
   return {
      friends: state.friends
   }
}

function mapDispatchToProps(dispatch) {
   return {
      onAdd: (firstName, lastName) => dispatch({ type: 'ADD_TO_FRIENDS', firstName, lastName }),
      onDel: (firstName, lastName) => dispatch({ type: 'DELETE_FROM_FRIENDS', firstName, lastName })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
