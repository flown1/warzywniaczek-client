
/** REDUCER **/

const initialState = {

  products: [{
    name: "Schab",
    price: '999',
    imgUrl: 'http://3.bp.blogspot.com/-szPx_TTTS-Y/U4bcr0rPTRI/AAAAAAAAFyU/Y0ucPWe_qek/s1600/Kotlety+Schabowe+5.jpg',
  },{
      id:    0,
      name: 'Carrot',
      price: '123.12',
      imgUrl: "https://media.mercola.com/assets/images/foodfacts/carrot-nutrition-facts.jpg"
  },{
      id:    1,
      name: 'Beetroot',
      price: '64',
      imgUrl: "http://countryfruit.uy/238-thickbox_default/remolacha.jpg"
  }],
  cart:[]
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
    return {
      ...state,
      cart: [
        ...state.cart,
        action.payload
      ],
    }
    default:
      return state
  }
}