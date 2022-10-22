import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {

  constructor()
    {
        super();
        this.state={
            products: [
                {
                    itemName:"Phone",
                    quantity:1,
                    price:999,
                    img:'',
                    id:1
                },
                {
                    itemName:"Watch",
                    quantity:10,
                    price:99,
                    img:'',
                    id:2
                },
                {
                    itemName:"Mouse",
                    quantity:2,
                    price:399,
                    img:'',
                    id:3
                }
            ]
            
        }
    }

    increaseQuantity=(product)=>{
        console.log("hi");
        //this.quantity+=1;
       /* this.setState({
            quantity: this.quantity+1
        },() => {
            console.log("In increaseQuantity ",this.state.quantity);
        });*/

        const {products}=this.state;
        let ind=products.indexOf(product);
        products[ind].quantity+=1;
        this.setState({
            products: products
        })
    }

    decreaseQuantity=(product)=>{
        console.log("in Decrease quantity ",product);

        const {products}=this.state;
        let ind=products.indexOf(product);
        if(products[ind].quantity > 0)
        {
             products[ind].quantity-=1;
                this.setState({
                products: products
             })
        }
    }
    deleteProduct=(id)=>{
        console.log("in Delete product ",id);
        const {products}=this.state;
        let newProductArray=products.filter((product) => product.id!==id);
        this.setState({
            products: newProductArray
        })
    }

    cartCount=() => {
      let count=0;
      for(let product of this.state.products)
      {
        count+=product.quantity;
      }
      return count;
    }

    getTotalBill= () => {
      let total=0;
      for(let product of this.state.products)
      {
        total+=(product.quantity*product.price);
      }
      return total;
    }


  render() {
    return (
      <div className="App">
        <Navbar 
          count={this.cartCount()}
        />
        <Cart 
           products={this.state.products} 
           increaseQuantity={this.increaseQuantity}
           decreaseQuantity={this.decreaseQuantity}
           deleteProduct={this.deleteProduct}
        />

        <div style={{fontSize: 30, padding: 20}} >
          Total Price: {this.getTotalBill()}
        </div>
      </div>
    );
  }
}

export default App;
