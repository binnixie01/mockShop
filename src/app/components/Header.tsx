import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Search from "../../entities/Product/components/Search";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 pt-3 pb-4">
      <Link to='/'><div className="text-3xl">Mock Shop</div></Link>
      <Search />
      <Link to={"/cart"}>
        <motion.div className="hover:text-gray-500" whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <ShoppingCartIcon />
        </motion.div>
      </Link>
    </div>
  );
};

export default Header;
