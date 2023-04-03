import { IState } from "../types"

const initialState: IState = {
  loading: true, 
  error: '',
  data: {},
  schema: {
    query: "toilets",
    pageNumber: 0,
    size: 30,
    additionalPages: 0,
    sort: 1
  }
}

export default initialState