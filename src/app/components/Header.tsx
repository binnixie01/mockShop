import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between px-5 mt-4">
  <div className="text-5xl">Mock Shop</div>

  <Link to={"/cart"}>
  <div><ShoppingCartIcon /></div>
    
  </Link>
</div>
  )
}

export default Header