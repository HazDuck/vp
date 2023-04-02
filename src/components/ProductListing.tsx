import React from 'react'
import { IProduct } from '../types'

interface Props {
  productData: IProduct[]
}

const ProductListing: React.FunctionComponent<Props> = ({ productData }) => {
  return (
    <ul className="product-listing-container">
      {productData.map((item: IProduct) => <p>{item.productName}</p>)}
    </ul>
  )
}

export default ProductListing