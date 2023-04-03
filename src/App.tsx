import React from 'react'
import Filters from './components/Filters';
import Header from './components/Header'
import LoadingIcon from './components/LoadingIcon';
import ProductListing from './components/ProductListing';
import { useProductListing } from './hooks/useProductListing';

import './styles/app.scss';

const App: React.FunctionComponent = () => {
  const { state } = useProductListing()
  return (
    state.loading ? <LoadingIcon /> :
      !state.error ? 
      (
        <div className='flex'>
          <Filters />
          <div>
            <Header total={state.data.pagination.total}/>
            <ProductListing/>
          </div>
        </div>
      ) : (
        <p>{state.error}</p>
      )
  )
}

export default App