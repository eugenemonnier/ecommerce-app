export const cart = []

const cartHandler = (state = cart, action) => {
  switch (action.type) {
    case 'ADD-TO-CART':
      return [...state, action.payload]
    case 'DELETE-FROM-CART':
      return state.filter(product => product !== action.payload)
    default:
      return state
  }
}

export default cartHandler
