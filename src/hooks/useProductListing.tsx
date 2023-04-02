import React, { 
  createContext, 
  useContext,
  useReducer
} from 'react'
import initialState from '../state/initialState';
import reducer from '../state/reducer';
import { IState } from '../types';
import useProductData from './useProductData';

export interface IFFetchContext {
  children: any,
}

export interface IProductListingContext {
  state: IState,
  actions: any,
  productData: any
}

export const ProductListingContext = createContext({} as IProductListingContext)

export const ProductListingProvider: React.FC<IFFetchContext> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const productData = useProductData(state.schema)
  // const productData = useProductData(state.schema, dispatch, value.actions)
  const value = {
    state,
    productData,
    actions: {
      updateSchema: (schema: any) => dispatch({type: 'UPDATE_SCHEMA', payload: schema}),
      // updateProdutcs: (products: any) => dispatch({type: 'UPDATE_PRODUCTS', payload: products})
    }
  }
  
  return (
    <ProductListingContext.Provider value={value}>
      {children}
    </ProductListingContext.Provider>
  )
}

export const useProductListing = () => useContext(ProductListingContext)