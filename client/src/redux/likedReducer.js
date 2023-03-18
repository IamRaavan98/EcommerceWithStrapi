const { createSlice } = require('@reduxjs/toolkit');


const initialState = {
    products:[]
}


const likedSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
       
      
        addtoLikedProduct(state, action) {
            const item = state.products.find(item => item.id === action.payload.id)
            if(!item){
                state.products.push(action.payload);
            }    

        },
        removeFromLikedProduct(state, action) {
            state.products =  state.products.filter((item) => item.id !== action.payload);
        },
        resetLikedCart(state){
            state.products = [];
        },
    },
});

export const { resetLikedCart, addtoLikedProduct, removeFromLikedProduct } = likedSlice.actions;
export default likedSlice.reducer;
