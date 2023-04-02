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

    default:
      return state;
  }
}

export default reducer