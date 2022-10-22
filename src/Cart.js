
import React from 'react';
import CartItem from './CartItem';
import './Cart.css'



function Cart (props){

    




    const {products,increaseQuantity,decreaseQuantity,deleteProduct}=props;
    
    
    return (
        <div className='cart'>
            {products.map((product) => {
                return <CartItem 
                         product={product} 
                         key={product.id}
                         increaseQuantity={increaseQuantity}
                         decreaseQuantity={decreaseQuantity}
                         deleteProduct={deleteProduct}
                        />
            })}
        </div>

    );
};



export default Cart;