const { createSlice } = require('@reduxjs/toolkit');


const initialState = {
    products:[]
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart(state, action) {
         
            const item = state.products.find(item => item.id === action.payload.id)

            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.products.push(action.payload);
            }

        },
        removeFromCart(state, action) {
            state.products =  state.products.filter((item) => item.id !== action.payload);
        },
        resetCart(state){
            state.products = [];
        },
    },
});

export const { addtoCart, removeFromCart,resetCart, addtoLikedProduct,removeFromLikedProduct } = cartSlice.actions;
export default cartSlice.reducer;
