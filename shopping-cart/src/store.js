//First solution

// import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import { productReducers } from "./reducers/productReducers";

// const initialState = {};
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   combineReducers({
//     products: productReducers,
   
//   }),
//   initialState,
//   composeEnhancer(applyMiddleware(thunk))
// );
// export default store;


//Second solution
import { createStore, applyMiddleware, compose , combineReducers} from "redux";
import thunk from "redux-thunk";
import {  productsReducer} from "./reducers/productReducers";
import { cartReducer} from './reducers/cartReducers';
import { orderReducer } from './reducers/orderReducer';
const initialState = {};
export const store = createStore(
  combineReducers({
         products:  productsReducer, cart : cartReducer  , order : orderReducer
     }),
   initialState,
    compose(
        applyMiddleware(thunk) ,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
