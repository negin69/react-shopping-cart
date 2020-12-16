import React from "react";
import data from"../src/data.json";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
class App extends React.Component{
  constructor(){
    super();
    this.state ={
      products : data.products ,
      size: "",
      sort:"",
      cartItems : localStorage.getItem("cartItems") ?  JSON.parse( localStorage.getItem("cartItems")) : [ ]
    }; 
  }

  createOrder = (order)=> {
    alert("Need to save order for" + order.name)
  }
  removeFromCart = (product) =>{
    const cartItems= this.state.cartItems.slice();
   let filteredItem= cartItems.filter(x => x._id !== product._id);
   this.setState({cartItems : filteredItem});
   localStorage.setItem("cartItems" , JSON.stringify(filteredItem));
  }
  addToCart = (product) =>{
    // const cartItems = [...this.state.cartItems]
    const cartItems= this.state.cartItems.slice();
    let  alreadyInCart = false;

    cartItems.forEach((item) =>{
      if(item._id === product._id){
      item.count++;
      alreadyInCart = true;
      }
    });

    if(!alreadyInCart){
      cartItems.push({...product , count : 1})
    }
  this.setState({cartItems});
  localStorage.setItem("cartItems" , JSON.stringify(cartItems));
}

  filterProducts =(event )  =>{
console.log(event.target.value);
if(event.target.value === ""){
  this.setState({size : event.target.value , products : data.products})
}
else{
  const allProducts = [...data.products];
  // const allProducts = data.products;
 const filteredProducts = allProducts.filter(product => product.availableSizes.indexOf(event.target.value)  >=  0 )
  this.setState({size : event.target.value , products :  filteredProducts})
}

  }

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState(({sort : sort , products : this.state.products.slice().sort((a,b) => sort === "lowest" ? 
  a.price > b.price ?
  1 : -1
  : sort === "highest" ?
  a.price < b.price ?
  1 : -1
  : a._id < b._id ?
  1 : -1 
 )  }) )

  }
render(){
  return (
    <div className="App">
      <header>
       <a href="/">React Shopping Cart</a>
      </header>
      <main>
      <div className="content">
        <div className="main">
          <Filter count={this.state.products.length} sort={this.state.sort} size={this.state.size} filterProducts={this.filterProducts} sortProducts={this.sortProducts}/>
         <Products products={this.state.products}  addToCart={this.addToCart}/>
        </div>
        <div className="sidebar">
         <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder ={this.createOrder } />
        </div>
      </div>
      </main>

      <footer>
        <p>all things are reserved</p>
      </footer>
    </div>
  );
}
} 
  

export default App;
