const initialState = {
   friends: []
}

export default function rootReducer(state = initialState, action) {
   switch (action.type) {
      case 'ADD_TO_FRIENDS':
         if (!state.friends.some(friend => friend.firstName === action.firstName)) {
            const newFriend = { firstName: action.firstName, lastName: action.lastName }
            return {
               ...state,
               friends: [...state.friends, newFriend]
            }
         } else {
            return state
         }
      case 'DELETE_FROM_FRIENDS':
         return {
            ...state,
            friends: [...state.friends.filter(friend => friend.firstName !== action.firstName)]
         }
      default:
         return state
   }
}
