import {configureStore} from '@reduxjs/toolkit';

import userReducer from './productReducer/userReducer';


export const store = configureStore({
    reducer:{
       
        userReducer:userReducer
    }
})