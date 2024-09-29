import { useParams } from 'react-router-dom';
import { useProductbyId } from '../hooks/useProductbyId';
import { useCartStore } from '../../Cart/store/cartStore';
import { toast } from 'react-toastify';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { loading, error, product} = useProductbyId(id!)
    const addToCart = useCartStore(state => state.addToCart);
    if (loading) return <div>....loading</div>
    if (error) return `Error! ${error}`;
  

    return (
      <div className="w-4/5 mx-auto pt-20 flex flex-col md:flex-row">
        <div className="md:w-1/4">
          <img src={product.images.edges[0].node.url} alt={product.title} className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4 flex justify-between">
            <p className="mt-1 text-gray-600">
              {product.variants.edges[0].node.price.currencyCode}{" "}
              {product.variants.edges[0].node.price.amount}
            </p>
            <button
              onClick={()=>{addToCart(product);toast.success(`${product.title} added to cart!`);}}
              className="mt-2 bg-black text-white py-1 px-3 rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetail;