
import React from 'react';
import './CartItem.css'


class CartItem extends React.Component {



    //Arrow functions byDeafult bind the 'this'





    render() {
        console.log("Props: ", this.props);
        const { itemName, quantity, price } = this.props.product;
        const {product, increaseQuantity,decreaseQuantity,deleteProduct}=this.props;
        return (
            <div className='cart-item'>
                <div className='cart-item-left'>
                    <img src='https://cdn-icons-png.flaticon.com/128/15/15874.png' alt='item'></img>
                </div>
                <div className='cart-item-right'>
                    <div>{itemName}</div>
                    <div>Qty: {quantity}</div>
                    <div>Rs. {price}</div>
                    <div className='cart-item-actions'>
                        <img className='action-item' src='https://cdn-icons-png.flaticon.com/512/992/992683.png' alt='decrease'
                            onClick={() => {
                                decreaseQuantity(product)
                            }}>
                        </img>
                        <img className='action-item' src='https://cdn-icons-png.flaticon.com/128/992/992651.png' alt='increase'
                            onClick={() => {
                                console.log("clicked")
                                increaseQuantity(product)
                            }}>
                        </img>
                        <img className='action-item' src='https://cdn-icons-png.flaticon.com/128/2907/2907762.png' alt='delete'
                            onClick={() => {
                                deleteProduct(product.id);
                            }}>
                        </img>
                    </div>
                </div>
            </div>

        );
    };

}

export default CartItem;