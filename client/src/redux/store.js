import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import likedReducer from './likedReducer';
// // import productReducer from './productSlice';
// const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//         like: likedReducer,
//     },
// });

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)
const persistedReducer2 = persistReducer(persistConfig, likedReducer)

export const store = configureStore({
  reducer: {
    cart:persistedReducer,
    like:persistedReducer2,
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)





export default store;
