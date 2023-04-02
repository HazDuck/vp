import React from 'react'
import Header from './components/Header'
import LoadingIcon from './components/LoadingIcon';
import ProductListing from './components/ProductListing';
import { useProductListing } from './hooks/useProductListing';

import './styles/app.scss';

const App: React.FunctionComponent = () => {
  const { productData } = useProductListing()
  return (
    !productData ? <LoadingIcon /> :
    (
      <div>
        <Header total={productData.pagination.total}/>
        <ProductListing productData={productData.products}/>
      </div>
    )
  )
}

export default App