import { useParams } from 'react-router-dom';
import { useProductbyId } from '../hooks/useProductbyId';
import { useCartStore } from '../../Cart/store/cartStore';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { CircularProgress } from '@mui/material';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { loading, error, product} = useProductbyId(id!)
    const addToCart = useCartStore(state => state.addToCart);
    if (loading) return <div className="absolute left-1/2 top-1/2"><CircularProgress /></div>;
    if (error) return `Error! ${error}`;
  

    return (
      <div className="w-4/5 mx-auto flex flex-col md:flex-row bg-slate-100 rounded-xl mt-20 p-4 md:text-base text-xs" role="article" // Indicates that this is an article or product detail
      aria-labelledby={`product-title-${product.id}`}>
        <div className="md:w-1/4">
          <img src={product.images.edges[0].node.url} alt={product.title} className="w-full rounded-xl  h-auto object-cover" aria-hidden="true"/>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="mt-2 text-black/70">{product.description}</p>
          <div className="mt-4 flex justify-between">
            <p className="mt-1 text-black">
              {product.variants.edges[0].node.price.currencyCode}{" "}
              {product.variants.edges[0].node.price.amount}
            </p>
            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}}
              onClick={()=>{addToCart(product);toast.success(`${product.title} added to cart!`);}}
              className="mt-2 bg-black text-white py-1 px-3 rounded"
            >
              Add to cart
            </motion.button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetail;