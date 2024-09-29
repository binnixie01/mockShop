import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductID } from "../../Product/model/productTypes";
import { CartItem } from "../model/cartTypes";

type Store = {
  cartItems: CartItem[];
  addToCart: (product: ProductID) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<Store>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (product: ProductID) => {
        const existingItem = get().cartItems.find(
          (item) => item.id === product.id
        );
        if (existingItem) {
          set({
            cartItems: get().cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }); console.log(get().cartItems);
        } else {
          set({
            cartItems: [...get().cartItems, { ...product, quantity: 1 }],
          });
          console.log(get().cartItems);
        }
        
      },
      removeFromCart: (productId: string) => {
        set({
          cartItems: get().cartItems.filter((item) => item.id !== productId),
        });
      },
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity < 1) return;
        set({
          cartItems: get().cartItems.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },
      clearCart: () => {
        set({ cartItems: [] });
      },
    }),
    {
      name: "cart-storage"
    }
  )
);
