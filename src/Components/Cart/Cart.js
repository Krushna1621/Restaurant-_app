import { useContext } from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
const Cart = (props) => {
    const Cartctx=useContext(CartContext);

    const totalAmount=`$${Cartctx.totalAmount.toFixed(2)}`;
    const hasItems=Cartctx.items.length>0;
    
    const cartItemRemovehandler=(id)=>{
         Cartctx.removeItem(id)
    }

    const cartItemAddHandler=(item)=>{
         Cartctx.addItem(item)
    }

    const cartItems = (
      <ul className={classes['cart-items']}>
        {Cartctx.items.map((item) => (
          <CartItem 
          key={item.id} 
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemovehandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
          
          ></CartItem>
        ))}
      </ul>
    );
  
    return (
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems &&<button className={classes.button}>Order</button>}
        </div>
      </Modal>
    );
  };
  
  export default Cart;