import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from './ToastProvider';
import SEO from './SEO';

function CartPage() {
  const { cartItems, cartTotal, cartCount, updateQuantity, removeFromCart, clearCart } = useCart();
  const toast = useToast();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(itemId, newQuantity);
  };

  const handleRemove = (item) => {
    removeFromCart(item.id);
    toast.info(`${item.name} removed from cart`);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
      toast.success('Cart cleared');
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <SEO 
          title="Shopping Cart - Little Lemon"
          description="Your Little Lemon shopping cart"
        />
        
        <div className="cart-page empty-cart">
          <div className="cart-inner">
            <div className="empty-cart-icon">🛒</div>
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/menu" className="btn btn-primary">
              Browse Menu
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`Shopping Cart (${cartCount}) - Little Lemon`}
        description="Review your Little Lemon order"
      />
      
      <div className="cart-page">
        <div className="cart-inner">
          <div className="cart-header">
            <h1>Your Order</h1>
            <button onClick={handleClearCart} className="btn-text">
              Clear Cart
            </button>
          </div>

          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)} each</p>
                </div>

                <div className="cart-item-quantity">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="quantity-btn"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="quantity-btn"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  onClick={() => handleRemove(item)}
                  className="cart-item-remove"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Subtotal ({cartCount} items):</span>
              <span className="cart-summary-amount">${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="cart-summary-row">
              <span>Delivery Fee:</span>
              <span className="cart-summary-amount">$5.00</span>
            </div>

            <div className="cart-summary-row cart-total-row">
              <span>Total:</span>
              <span className="cart-total-amount">${(cartTotal + 5).toFixed(2)}</span>
            </div>

            <div className="cart-actions">
              <Link to="/menu" className="btn btn-secondary">
                Continue Shopping
              </Link>
              <Link to="/checkout" className="btn btn-primary">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;