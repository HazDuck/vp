import React from 'react'
import { useProductListing } from '../hooks/useProductListing'
import { IProduct } from '../types'
import Button from './Button'
import ProductCard from './ProductCard'


const ProductListing: React.FunctionComponent = () => {
  const { actions: { updateSchema } } = useProductListing()
  const { state } = useProductListing()

  return (
    <>
      <ul className="product-listing">
        {state.data.products.map((item: IProduct) => <ProductCard key={item.id} data={item}/>)}
      </ul>
      <div className="product-listing__button-container">
        {state.schema.pageNumber > 1 ?
          <Button buttonClass={'button'} handleClick={() => {
            updateSchema({pageNumber: state.schema.pageNumber - 1})
            }}>Previous</Button>
          : null
        }

        <Button buttonClass={'button spacer'} handleClick={() => {
          updateSchema({pageNumber: state.schema.pageNumber + 1})
          }}>Next</Button>
      </div>
    </>
  )
}

export default ProductListing