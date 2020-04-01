// const initialState = {
//   products: [
//     { productName: 'Cherry Cordials', price: '$9.99/box of 12' },
//     { productName: 'Chocolate Covered Strawberries', price: '$3.99/ea' },
//     { productName: 'Chocolate Covered Cherries', price: '$4.99/bundle' },
//     { productName: 'Chocolate Truffles', price: '$12.99/box of 12' },
//     { productName: 'Solid Milk Chocolate Bar', price: '$2.99/ea' },
//     { productName: 'Solid Dark Chocolate Bar', price: '$2.99/ea' },
//     { productName: 'Baklava', price: '$11.99/ea' },
//     { productName: 'Lemon Poppy Seed Cake', price: '$20.99' },
//     { productName: 'Cinnamon Roll', price: '$10.99' },
//     { productName: 'Fruit Cake', price: 'FREE' },
//     { productName: 'Chocolate Cake', price: '$23.99' },
//     { productName: 'Apple Fritter', price: '$11.99' },
//     { productName: 'Coffee Cake', price: '$8.99' },
//     { productName: 'Bosch Pears', price: '$3.99/ea' },
//     { productName: 'Granny Smith Apples', price: '$2.99/ea' },
//     { productName: 'Party Watermelon', price: '$15.99/ea' },
//     { productName: 'Star Fruit', price: '$4.99/ea' },
//     { productName: 'Triple Creamed Brie', price: '$12.99/ea' },
//     { productName: 'Sharp White Cheddar', price: '$11.99/ea' },
//     { productName: 'Grano Podano', price: '$17.99/ea' },
//     { productName: 'Quesos Manchego', price: '$14.99/ea' },
//     { productName: 'Aged Asiago', price: '$16.99/ea' },
//     { productName: 'Pinot Noir', price: '$32.99/ea' },
//     { productName: 'Pino Grigio', price: '$27.99/ea' },
//     { productName: 'Cabernet Sauvignon', price: '$39.99/ea' },
//     { productName: 'Sauvignon Blanc', price: '$34.99/a' },
//     { productName: 'Dry Riesling', price: '$30.99/ea' },
//     { productName: 'Petite Sirah', price: '$40.99/ea' }
//   ]
// }

// const cartHandler = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD-TO-CART':
//       return [...state, action.payload]
//     case 'REMOVE-FROM-CART':
//       return state.filter(product => product !== action.payload)
//     default:
//       return state
//   }
// }

// export default cartHandler
