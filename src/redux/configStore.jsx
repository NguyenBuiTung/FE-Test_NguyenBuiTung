import {configureStore} from '@reduxjs/toolkit';
import productReducer from './productReducer/productReducer';
import userReducer from './productReducer/userReducer';


export const store = configureStore({
    reducer:{
        productReducer,
        userReducer:userReducer
    }
})