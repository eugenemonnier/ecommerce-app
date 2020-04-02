export const initialState = {
  selectedCategory: '',
  categories: [
    {
      name: 'Choclates'
    },
    {
      name: 'Baked Goods'
    },
    {
      name: 'Fruit'
    },
    {
      name: 'Cheese'
    },
    {
      name: 'Wine'
    }
  ],
  products: [
    { image: 'assets/cherry-cordials.jpeg', inventory: 99, categoryName: 'Choclates', productName: 'Cherry Cordials', price: '$9.99/box of 12' },
    { image: 'assets/chocolate-covered-strawberries.jpg', inventory: 99, categoryName: 'Choclates', productName: 'Chocolate Covered Strawberries', price: '$3.99/ea' },
    { image: 'assets/chocolate-covered-cherries.jpg', inventory: 99, categoryName: 'Choclates', productName: 'Chocolate Covered Cherries', price: '$4.99/bundle' },
    { image: 'assets/chocolate-truffles.jpg', inventory: 99, categoryName: 'Choclates', productName: 'Chocolate Truffles', price: '$12.99/box of 12' },
    { image: 'assets/milk-chocolate-bar.jpg', inventory: 99, categoryName: 'Choclates', productName: 'Solid Milk Chocolate Bar', price: '$2.99/ea' },
    { image: 'assets/dark-chocolate-bar.jpg', inventory: 99, categoryName: 'Choclates', productName: 'Solid Dark Chocolate Bar', price: '$2.99/ea' },
    { image: 'assets/baklava.jpg', inventory: 99, categoryName: 'Baked Goods', productName: 'Baklava', price: '$11.99/ea' },
    { image: 'assets/lemon-poppy-seed-cake.jpg', inventory: 99, categoryName: 'Baked Goods', productName: 'Lemon Poppy Seed Cake', price: '$20.99' },
    { image: 'assets/cinnamon-rolls.jpg', inventory: 99, categoryName: 'Baked Goods', productName: 'Cinnamon Roll', price: '$10.99' },
    { image: 'assets/fruitcake.jpg', inventory: 99, categoryName: 'Baked Goods', productName: 'Fruitcake', price: 'FREE' },
    { image: 'assets/chocolate-cake.jpg', inventory: 99, categoryName: 'Baked Goods', productName: 'Chocolate Cake', price: '$23.99' },
    { image: 'assets/apple-fritter.jpg', inventory: 99, categoryName: 'Baked Goods', productName: 'Apple Fritter', price: '$11.99' },
    { image: 'assets/coffee-cake.jpg', inventory: 99, categoryName: 'Baked Goods', productName: 'Coffee Cake', price: '$8.99' },
    { image: 'assets/bosc-pears.jpg', inventory: 99, categoryName: 'Fruit', productName: 'Bosc Pears', price: '$3.99/ea' },
    { image: 'assets/grannysmith-apples.jpg', inventory: 99, categoryName: 'Fruit', productName: 'Grannysmith Apples', price: '$2.99/ea' },
    { image: 'assets/watermelon.jpg', inventory: 99, categoryName: 'Fruit', productName: 'Watermelon', price: '$15.99/ea' },
    { image: 'assets/star-fruit.jpg', inventory: 99, categoryName: 'Fruit', productName: 'Star Fruit', price: '$4.99/ea' },
    { image: 'assets/brie.jpeg', inventory: 99, categoryName: 'Cheese', productName: 'Triple Cream Brie', price: '$12.99/ea' },
    { image: 'assets/white-cheddar.jpeg', inventory: 99, categoryName: 'Cheese', productName: 'Sharp White Cheddar', price: '$11.99/ea' },
    { image: 'assets/grano-podano.png', inventory: 99, categoryName: 'Cheese', productName: 'Grano Podano', price: '$17.99/ea' },
    { image: 'assets/manchego.jpeg', inventory: 99, categoryName: 'Cheese', productName: 'Manchego', price: '$14.99/ea' },
    { image: 'assets/asiago.jpeg', inventory: 99, categoryName: 'Cheese', productName: 'Aged Asiago', price: '$16.99/ea' },
    { image: 'assets/pinot-noir.jpeg', inventory: 99, categoryName: 'Wine', productName: 'Pinot Noir', price: '$32.99/ea' },
    { image: 'assets/pinot-grigio.jpg', inventory: 99, categoryName: 'Wine', productName: 'Pinot Grigio', price: '$27.99/ea' },
    { image: 'assets/cabernet-sauvignon.jpg', inventory: 99, categoryName: 'Wine', productName: 'Cabernet Sauvignon', price: '$39.99/ea' },
    { image: 'assets/sauvignon-blanc.jpeg', inventory: 99, categoryName: 'Wine', productName: 'Sauvignon Blanc', price: '$34.99/a' },
    { image: 'assets/dry-riesling.jpg', inventory: 99, categoryName: 'Wine', productName: 'Dry Riesling', price: '$30.99/ea' },
    { image: 'assets/petite-sirah.jpg', inventory: 99, categoryName: 'Wine', productName: 'Petite Sirah', price: '$40.99/ea' }
  ]
}

const categoryPicker = (state = initialState, action) => {
  let products
  switch (action.type) {
    case 'SELECT-CATEGORY':
      if (!action.payload) return initialState
      products = initialState.products.filter(product => product.categoryName === action.payload)
      return { ...state, selectedCategory: action.payload, products: products }
    default:
      return state
  }
}

export default categoryPicker
