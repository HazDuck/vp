import React, { 
  createContext, 
  useContext,
  useReducer, 

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
}

export const ProductListingContext = createContext({} as IProductListingContext)

export const ProductListingProvider: React.FC<IFFetchContext> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)  
  const actions = {
    updateSchema: (schema: any) => dispatch({type: 'UPDATE_SCHEMA', payload: schema}),
    fetchSuccess: (data: any) => dispatch({type: 'FETCH_SUCCESS', payload: data}),
    fetchSuccessLoadMore: (data: any) => dispatch({type: 'FETCH_SUCCESS_LOAD_MORE', payload: data}),
    fetchError: (data: any) => dispatch({type: 'FETCH_ERROR', payload: null}),
    // updateProducts: (products: any) => dispatch({type: 'UPDATE_PRODUCTS', payload: products})
  }

  //data fetcher
  useProductData(state.schema, actions)

  const value = {
    state,
    actions
  }

  return (
    <ProductListingContext.Provider value={value}>
      {children}
    </ProductListingContext.Provider>
  )
}

export const useProductListing = () => useContext(ProductListingContext)