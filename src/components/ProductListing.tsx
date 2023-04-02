import React, { useState } from 'react'
import { useProductListing } from '../hooks/useProductListing'
import { IProduct } from '../types'
import ProductCard from './ProductCard'

interface Props {
  productData: IProduct[]
}

const ProductListing: React.FunctionComponent<Props> = ({ productData }) => {
  const { actions: { updateSchema } } = useProductListing()
  const [pageNumber, setPageNumber] = useState(1)
  return (
    <>
      <ul className="product-listing">
        {productData.map((item: IProduct) => <ProductCard key={item.id} data={item}/>)}
      </ul>
      <button onClick={() => {
        updateSchema({pageNumber: pageNumber})
        setPageNumber(pageNumber + 1)
        }}>Load more</button>
    </>
  )
}

export default ProductListing