import { configureStore } from '@reduxjs/toolkit'
import carrrinhoReducer from './reducers/carrinho'

const store = configureStore({
  reducer:{
    carrinho: carrrinhoReducer
  }
})
