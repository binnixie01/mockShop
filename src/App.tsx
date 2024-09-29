import { Route, Routes } from "react-router-dom";
import ProductDetail from "./entities/Product/components/ProductDetail";
import ProductList from "./features/ProductList/components/ProductList";
import ShoppingCart from "./features/ShoppingCart/components/ShoppingCart";
import Header from "./app/components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />}/>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
      
      </Routes>
    </>
  );
};

export default App;
