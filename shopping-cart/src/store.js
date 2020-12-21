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
const initialState = {};
export const store = createStore(
  combineReducers({
         products:  productsReducer,     
     }),
   initialState,
    compose(
        applyMiddleware(thunk) ,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
