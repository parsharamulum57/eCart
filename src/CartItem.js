
import React from 'react';
import './CartItem.css'


class CartItem extends React.Component{

    constructor()
    {
        super();
        this.state={
            itemName:"Phone",
            quantity:1,
            price:999,
            img:''
        }
    }

    //Arrow functions byDeafult bind the 'this'
    increaseQuantity=()=>{
        //console.log("hi");
        //this.quantity+=1;
        this.setState({
            quantity: this.state.quantity+1
        },() => {
            console.log("In increaseQuantity ",this.state.quantity);
        });
    }
    decreaseQuantity=()=>{
        if(this.state.quantity>0)
        {
            //this.quantity-=1;
            this.setState((prevState) => {
                return{
                    quantity: prevState.quantity-1
                }
            },() => {
                console.log("In decreaseQuantity ",this.state.quantity);
            });

        }

    }


render(){
    const {itemName,quantity,price}=this.state;
    return (
        <div className='cart-item'>
            <div className='cart-item-left'>
                <img src='https://cdn-icons-png.flaticon.com/128/15/15874.png'alt='item'></img>
            </div>
            <div className='cart-item-right'>
                <div>{itemName}</div>
                <div>{quantity}</div>
                <div>{price}</div>
                <div className='cart-item-actions'>
                <img className='action-item' src='https://cdn-icons-png.flaticon.com/512/992/992683.png'alt='decrease' onClick={this.decreaseQuantity}></img>
                <img className='action-item' src='https://cdn-icons-png.flaticon.com/128/992/992651.png'alt='increase' onClick={this.increaseQuantity}></img>
                <img className='action-item' src='https://cdn-icons-png.flaticon.com/128/2907/2907762.png'alt='delete' ></img>
                </div>
            </div>
        </div>

    );
};

}

export default CartItem;