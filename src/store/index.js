import { createStore } from 'vuex'

export default createStore({
  state: {
    productDetails: [
      {
        id: 1,
        name: 'Trending smart watches 2024',
        img: require('../assets/star.png')
      },
      {
        id: 2,
        name: 'Portable vacuum cleaner',
        img: require('../assets/bulb.png')
      },
      {
        id: 3,
        name: 'Kurti sets under 600',
        img: require('../assets/shirt.png')
      }
    ]
  },
  getters: {
    getAllProducts(state) {
      return state.productDetails;
    }
  },
  mutations: {
  },
  actions: {  
  },
  modules: {
  }
})
