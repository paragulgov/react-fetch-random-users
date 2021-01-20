import { ADD_TO_FRIENDS, DELETE_FROM_FRIENDS } from './actionTypes'

export function addToFriends(firstName, lastName) {
   return {
      type: ADD_TO_FRIENDS,
      firstName,
      lastName
   }
}

export function deleteFromFriends(firstName, lastName) {
   return {
      type: DELETE_FROM_FRIENDS,
      firstName,
      lastName
   }
}
