import React from "react";
import data from"../src/data.json";
import Products from "./components/Products";
class App extends React.Component{
  constructor(){
    super();
    this.state ={
      products : data.products ,
      size: "",
      sort:""
    }; 
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
         <Products products={this.state.products} />
        </div>
        <div className="sidebar">
          Sidebar
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
