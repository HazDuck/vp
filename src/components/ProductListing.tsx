import React, { useState } from 'react'
import { useProductListing } from '../hooks/useProductListing'
import { IProduct } from '../types'
import ProductCard from './ProductCard'


const ProductListing: React.FunctionComponent = () => {
  const { actions: { updateSchema } } = useProductListing()
  const [pageNumber, setPageNumber] = useState(1)
  const { state } = useProductListing()
  return (
    <>
      <ul className="product-listing">
        {state.data.products.map((item: IProduct) => <ProductCard key={item.id} data={item}/>)}
      </ul>
      <button onClick={() => {
        updateSchema({pageNumber: pageNumber})
        setPageNumber(pageNumber + 1)
        }}>Load more</button>
    </>
  )
}

export default ProductListing