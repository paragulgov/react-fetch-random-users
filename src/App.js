import React from 'react'
import UsersList from './components/UsersList'
import Button from './components/Button'
import Preloader from './components/Preloader'
import { Container } from 'reactstrap'

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

   onBtnClick = () => {
      this.setState({ btnLoading: true })
   }

   componentDidMount() {
      this.fetchUsers()
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.state.users === prevState.users) {
         this.fetchUsers()
      }
   }

   render() {
      if (this.state.mountLoading) return <Preloader/>

      return (
         <Container className='text-center'>

               <Button onClick={ this.onBtnClick } label='Request new users' btnLoading={ this.state.btnLoading }/>

               <UsersList users={ this.state.users }/>

         </Container>
      )
   }

}

export default App
