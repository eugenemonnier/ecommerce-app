// These functions are called 'action creators' since they just create an object that represents an action
export function select (name) {
  return {
    type: 'SELECT-CATEGORY',
    payload: name
  }
}

export function addToCart (product) {
  return {
    type: 'ADD-TO-CART',
    payload: product
  }
}

export function deleteFromCart (product) {
  return {
    type: 'DELETE-FROM-CART',
    payload: product
  }
}

export function reset () {
  return {
    type: 'RESET'
  }
}
