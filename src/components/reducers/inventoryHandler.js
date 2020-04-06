const inventoryHandler = (state = [], action) => {
  switch (action.type) {
    case 'DECREASE-INVENTORY':
      console.log(state);
      [...state].forEach(product =>
        product === action.payload
          ? product.inventory--
          : null
      )
      return state
    case 'INCREASE-INVENTORY':
      console.log(state);
      [...state].forEach(product =>
        product === action.payload
          ? product.inventory++
          : null
      )
      return state
    default:
      return state
  }
}

export default inventoryHandler
