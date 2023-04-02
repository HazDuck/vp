import React from 'react'
import { IProduct } from '../types'
import ProductCard from './ProductCard'

interface Props {
  productData: IProduct[]
}

const ProductListing: React.FunctionComponent<Props> = ({ productData }) => {
  return (
    <ul className="product-listing">
      {productData.map((item: IProduct) => <ProductCard data={item}/> )}
    </ul>
  )
}

export default ProductListing