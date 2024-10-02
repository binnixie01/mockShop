import React from "react";
import { CartItem } from "../model/cartTypes";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import CancelIcon from '@mui/icons-material/Cancel';

interface CartItemProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
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
    <li
      className="flex items-center bg-slate-400 rounded-xl mt-4 p-2 "
      role="listitem"
    >
      <div className="flex items-center w-full">
        <img
          src={item.images.edges[0].node.url}
          alt={item.title}
          className="md:w-16 w-10 object-cover rounded"
          aria-hidden="true"
        />
        <div className="ml-4 flex flex-col w-full">
          <h4 className="text-lg" role="heading">
            {item.title}
          </h4>
          <div className="flex gap-8 items-center justify-between ">
            <div>
              <p className="mt-1 text-gray-600">
                {item.variants.edges[0].node.price.currencyCode}{" "}
                {item.variants.edges[0].node.price.amount}
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={handleDecrease}
                  aria-label={`Decrease quantity of ${item.title}`}
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l"
                >
                  -
                </button>
                <span className="px-4" aria-live="polite" aria-atomic="true">
                  {item.quantity}
                </span>
                <button
                  onClick={handleIncrease}
                  aria-label={`Increase quantity of ${item.title}`}
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center md:flex-row flex-col mt-2 md:gap-4">
              <span >
                {item.variants.edges[0].node.price.currencyCode} {subtotal}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Remove ${item.title} from cart`}
                onClick={() => {
                  onRemove(item.id);
                  toast.info(`${item.title} is removed!)`);
                }}
                className="md:pt-0 pt-2"
              >
                <CancelIcon/>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CartItemComponent;
