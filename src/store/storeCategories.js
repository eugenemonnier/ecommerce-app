const initialState = {
  categories: [
    {
      name: 'Chocolates',
      items: {
        'Cherry Cordials': '$9.99/box of 12',
        'Chocolate Covered Strawberries': '$3.99/ea',
        'Chocolate Covered Cherries': '$4.99/bundle',
        'Chocolate Truffles': '$12.99/box of 12',
        'Solid Milk Chocolate Bar': '$2.99/ea',
        'Solid Dark Chocolate Bar': '$2.99/ea'
      }
    },
    {
      name: 'Baked Goods',
      items: {
        Baklava: '$11.99/ea',
        'Lemon Poppy Seed Cake': '$20.99',
        'Cinnamon Roll': '$10.99',
        'Fruit Cake': 'FREE',
        'Chocolate Cake': '$23.99',
        'Apple Fritter': '$11.99',
        'Coffee Cake': '$8.99'
      }
    },
    {
      name: 'Fruit',
      items: {
        'Bosch Pears': '$3.99/ea',
        'Granny Smith Apples': '$2.99/ea',
        'Party Watermelon': '$15.99',
        'Star Fruit': '$4.99/ea'
      }
    },
    {
      name: 'Cheese',
      items: {
        'Triple Creamed Brie': '$12.99/ea',
        'Sharp White Cheddar': '$11.99/ea',
        'Grano Podano': '$17.99/ea',
        'Quesos Manchego': '$14.99/ea',
        'Aged Asiago': '$16.99/ea'
      }
    },
    {
      name: 'Wine',
      items: {
        'Pinot Noir': '$32.99/ea',
        'Pino Grigio': '$27.99/ea',
        'Cabernet Sauvignon': '$39.99/ea',
        'Sauvignon Blanc': '$34.99/ea',
        'Dry Riesling': '$30.99/ea',
        'Petite Sirah': '$40.99/ea'
      }
    }
  ]
}

const categoryPicker = (state = initialState, action) => {
  let selection
  switch (action.type) {
    case 'SELECT':
      state.categories.map(category => {
        if (category.name === action.payload) selection = category.items
      })
      return (
        selection.map((value, key) => (
          <tr>
            <td />
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))
      )
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default categoryPicker

// These functions are called 'action creators' since they just create an object that represents an action
export function select (name) {
  return {
    type: 'SELECT',
    payload: name
  }
}

export function reset () {
  return {
    type: 'RESET'
  }
}
