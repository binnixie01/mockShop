import { ProductID } from "../../Product/model/productTypes";

export interface CartItem extends ProductID {
    quantity: number;
  }