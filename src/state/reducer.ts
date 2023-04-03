import { 
  IActionType, 
  IState 
} from "../types";


const reducer = (state: IState, action: {type: IActionType, payload: any}) => {
  switch (action.type) {
    case 'UPDATE_SCHEMA': {
      const schema = {...state.schema}
      const newSchema = Object.assign(schema, action.payload)
      return {
        ...state, 
        schema: newSchema
      }
    }
    case 'FETCH_SUCCESS': {
      return {
        ...state, 
        data: action.payload,
        loading: false
      }
    }
    case 'FETCH_SUCCESS_LOAD_MORE': {
      const newState = {...state}
      newState.data.products = [...newState.data.products, ...action.payload.products]
      return newState
    }
    case 'FETCH_ERROR': {
      return {
        ...state, 
        data: {},
        loading: false,
        error: 'Something went wrong, please contact support'
      }
    }
    default:
      return state;
  }
}

export default reducer