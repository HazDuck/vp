import React from 'react'
import { IProduct } from '../types'
import StockMessage from './StockMessage'

interface Props {
  data: IProduct
}

const ProductCard: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <li className="product-card">

      <img src={ data.image.url } alt={ data.image.attributes.imageAltText } />
      <p className='product-card__title'>{data.productName}</p>
      <p className='product-card__price'>{data.price.priceIncTax}</p> 
      <StockMessage inStock={data.stockStatus.status} />
    </li>
  )
}

export default ProductCard