import React from 'react'
import { CartItem } from '../model/cartTypes';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

interface CartItemProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
    const price = parseFloat(item.variants.edges[0]?.node.price.amount);
    const subtotal = price * item.quantity;
  
    const handleDecrease = () => {
      if (item.quantity > 1) {
        onUpdateQuantity(item.id, item.quantity - 1);
      }
    };
  
    const handleIncrease = () => {
      onUpdateQuantity(item.id, item.quantity + 1);
    };
  
    return (
      <li className="flex items-center justify-between bg-slate-400 rounded-xl mt-4 p-2">
      <div className="flex items-center">
        <img
          src={item.images.edges[0].node.url}
          alt={item.title}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h4 className="text-lg">{item.title}</h4>
          <p className="mt-1 text-gray-600">
              {item.variants.edges[0].node.price.currencyCode}{" "}
              {item.variants.edges[0].node.price.amount}
            </p>
          <div className="flex items-center mt-2">
            <button onClick={handleDecrease} className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l">
              -
            </button>
            <span className="px-4">{item.quantity}</span>
            <button onClick={handleIncrease} className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-4">{item.variants.edges[0].node.price.currencyCode}{" "} {subtotal}</span>
        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={() => {onRemove(item.id); toast.info(`${item.title} is removed!)`)}} className="bg-red-500 text-white px-3 py-1 rounded">
          Remove
        </motion.button>
      </div>
    </li>
    );
  };
export default CartItemComponent