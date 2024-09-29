import React from "react";
import { toast } from "react-toastify";
import { useCartStore } from "../../../entities/Cart/store/cartStore";
import CartItemComponent from "../../../entities/Cart/components/CartItem";
const ShoppingCart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useCartStore();

  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      parseFloat(item.variants.edges[0]?.node.price.amount) * item.quantity,
    0
  );

  const handleClearCart = () => {
    clearCart();
    toast.info("Cart cleared.");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <p className="mt-2">Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItemComponent
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-xl font-semibold">Total:{"  CAD "}{total}</span>
        <div>
          <button onClick={handleClearCart} className="bg-red-500 text-white mr-4 px-3 py-1 rounded">
            Clear Cart
          </button>
          <button className="bg-green-500 text-white px-3 py-1 rounded">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
