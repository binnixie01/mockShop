import React from 'react'
import { useProducts } from '../../../entities/Product/hooks/useProduct'
import ProductCard from '../../../entities/Product/components/ProductCard'
import { ProductCardProps } from '../../../entities/Product/model/productTypes'

const ProductList:React.FC = () => {
  const {products,loading,error}=useProducts()
  if(loading) return <div>...loading</div>
  if (error) return `Error! ${error}`;
  return (
    <div className='grid grid-cols-4 gap-4 m-8'>{products.map((product:ProductCardProps)=>{
      return (<ProductCard key={product.node.id} product={product}/>) })}</div>
  )
}

export default ProductList