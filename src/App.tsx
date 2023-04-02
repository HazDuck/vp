import React from 'react'
import Header from './components/Header'
import LoadingIcon from './components/LoadingIcon';
import ProductListing from './components/ProductListing';
import useProductData from './hooks/useProductData';
import './styles/app.scss';

const App: React.FunctionComponent = () => {
  const data = useProductData()
  
  return (
    !data ? <LoadingIcon /> :
    (
      <div>
        <Header total={data.pagination.total}/>
        <ProductListing productData={data.products}/>
      </div>
    )
  )
}

export default App