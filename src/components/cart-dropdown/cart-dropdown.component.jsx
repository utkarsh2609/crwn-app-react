import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../reducer/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../reducer/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.length ?
                (cartItems.map( cartItem => (<CartItem id={cartItem.id} item={cartItem}/>))) :
                (<span className='empty-message'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));