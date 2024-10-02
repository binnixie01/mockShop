import React from "react";
import { toast } from "react-toastify";
import { useCartStore } from "../../../entities/Cart/store/cartStore";
import CartItemComponent from "../../../entities/Cart/components/CartItem";
import { motion } from 'framer-motion';
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
    <div className="container mx-auto p-4 md:text-base text-xs">
      <h2 className="text-2xl mb-4 bg-black/80 rounded-xl px-2 mt-4 text-white w-40">Your Cart</h2>
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
        <span className="text-lg">Total:{"  CAD "}{total}</span>
        <div className="flex md:flex-row flex-col gap-2">
          <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={handleClearCart} className="bg-red-500 text-white px-3 py-1 rounded">
            Clear Cart
          </motion.button>
          <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="bg-black text-white px-3 py-1 rounded">Checkout</motion.button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
