import React, { 
  createContext, 
  useContext
} from 'react'
import useProductData from './useProductData';

export interface IFFetchContext {
  children: any,
}

export interface IProductListingContext {
 productData: any
}

export const ProductListingContext = createContext({} as IProductListingContext)

export const ProductListingProvider: React.FC<IFFetchContext> = ({ children }) => {
  const productData = useProductData()

  return (
    <ProductListingContext.Provider value={{productData}}>
      {children}
    </ProductListingContext.Provider>
  )
}

export const useProductListing = () => useContext(ProductListingContext)