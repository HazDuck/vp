import React from 'react'
import Header from './components/Header'
import LoadingIcon from './components/LoadingIcon';
import useProductData from './hooks/useProductData';
import './styles/app.scss';
import { IListingData } from './types';

const App: React.FunctionComponent = () => {
  const data: IListingData | null = useProductData()
  
  return (
    !data ? <LoadingIcon /> :
    (
      <div>
        <Header total={(data as IListingData).pagination.total}/>
      </div>
    )
  )
}

export default App