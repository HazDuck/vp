//used some anys here due to time

export interface IProduct {
  attributes: any,
  brand: any,
  cultureCode: string, 
  defaultCategory: any, 
  id: string, 
  image: any, 
  isDefaultVariant: boolean, 
  legacyId: string, 
  legacyVariantId: string, 
  price: any,
  productName: string, 
  questionsCount: number, 
  reviewsCount: number, 
  score: number, 
  sku: string, 
  slug: string, 
  stockStatus: any
}

export interface IListingData {
  pagination: {
    from: number,
    size: number, 
    sortType: number,
    total: number
  },
  facets: any,
  products: IProduct[]
}

export interface IFetchData {
  query: string, 
  pageNumber: number,
  size: number,
  additionalPages: number,
  sort: number
}

export interface IState {
  schema: IFetchData
}

export type IActionType = 'UPDATE_SCHEMA'