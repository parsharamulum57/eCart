
import React from 'react';
import CartItem from './CartItem';
import './Cart.css'



class Cart extends React.Component{

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


render(){

    const {products}=this.state;
    
    
    return (
        <div className='cart'>
            {products.map((product) => {
                return <CartItem 
                         product={product} 
                         key={product.id}
                         increaseQuantity={this.increaseQuantity}
                         decreaseQuantity={this.decreaseQuantity}
                         deleteProduct={this.deleteProduct}
                        />
            })}
        </div>

    );
};

}

export default Cart;