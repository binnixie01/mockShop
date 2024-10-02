import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Search from "../../entities/Product/components/Search";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header role="banner" className="flex justify-between items-center md:px-5 md:pt-3 py-2 px-3 bg-slate-400">
      <Link to='/' aria-label="Homepage">
      <div role="heading" className="sm:text-3xl hover:text-gray-700 text-sm md:block hidden">Mock Shop</div>
      <div role="heading" className="sm:text-3xl hover:text-gray-700 md:hidden">MS</div></Link>
      <Search />
      <Link to={"/cart"} aria-label="View shopping cart">
        <motion.div role="button" className="hover:text-gray-500" whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <ShoppingCartIcon />
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
