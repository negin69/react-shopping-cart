import React from "react";
// import data from"../src/data.json";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
import {Provider} from "react-redux";
import store from './store';
import { BrowserRouter, Link } from "react-router-dom";
class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state ={
  //     products : data.products ,
  //     cartItems : localStorage.getItem("cartItems") ?  JSON.parse( localStorage.getItem("cartItems")) : [ ]
  //     , size: "",
  //     sort:"",
  //   }; 
  // }

  // alertOrder = (myorder)=> {
  //   alert("Need to save order for" +myorder.name)
  // }
//   removeFromCart = (product) =>{
//     const cartItems= this.state.cartItems.slice();
//    let filteredItem= cartItems.filter(x => x._id !== product._id);
//    this.setState({cartItems : filteredItem});
//    localStorage.setItem("cartItems" , JSON.stringify(filteredItem));
//   }
//   addToCart = (product) =>{
//     const cartItems= this.state.cartItems.slice();
//     let  alreadyInCart = false;

//     cartItems.forEach((item) =>{
//       if(item._id === product._id){
//       item.count++;
//       alreadyInCart = true;
//       }
//     });

//     if(!alreadyInCart){
//       cartItems.push({...product , count : 1})
//     }
//   this.setState({cartItems});
//   localStorage.setItem("cartItems" , JSON.stringify(cartItems));
// }

//   filterProducts =(event )  =>{
// console.log(event.target.value);
// if(event.target.value === ""){
//   this.setState({size : event.target.value , products : data.products})
// }
// else{
//   const allProducts = [...data.products];
//   // const allProducts = data.products;
//  const filteredProducts = allProducts.filter(product => product.availableSizes.indexOf(event.target.value)  >=  0 )
//   this.setState({size : event.target.value , products :  filteredProducts})
// }

//   }

//   sortProducts = (event) => {
//     const sort = event.target.value;
//     this.setState(({sort : sort , products : this.state.products.slice().sort((a,b) => sort === "lowest" ? 
//   a.price > b.price ?
//   1 : -1
//   : sort === "highest" ?
//   a.price < b.price ?
//   1 : -1
//   : a._id < b._id ?
//   1 : -1 
//  )  }) )

//   }
render(){
  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className="App">
      <header>
      <Link to="/">React Shopping Cart</Link>
      </header>
      <main>
      <div className="content">
        <div className="main">
          {/* <Filter count={this.state.products.length} sort={this.state.sort} size={this.state.size} filterProducts={this.filterProducts} sortProducts={this.sortProducts}/>
         <Products products={this.state.products}  addToCart={this.addToCart}/> */}
         <Filter />
         <Products />
        </div>
        <div className="sidebar">
         <Cart />
        </div>
      </div>
      </main>

      <footer>
        <p>all things are reserved</p>
      </footer>
    </div>
    </BrowserRouter>
    </Provider>
  );
}
} 
  

export default App;
