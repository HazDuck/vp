import React from 'react'
import { IProduct } from '../types'
import StockMessage from './StockMessage'

interface Props {
  data: IProduct
}

const ProductCard: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <li className="product-card">
      <img loading="lazy" src={ data.image.url } alt={ data.image.attributes.imageAltText } />
      <p className='product-card__title'>{data.productName}</p>
      {/* havent taken into account discounted prices etc due to time constraints */}
      <p className='product-card__price'>£{data.price.priceIncTax}</p> 
      <StockMessage inStock={data.stockStatus.status} />
      {/* would add review stars and ratings here but skipped due to time */}
    </li>
  )
}

export default ProductCard