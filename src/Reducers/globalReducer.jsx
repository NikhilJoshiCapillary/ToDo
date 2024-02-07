import { CREATE_TASK, REMOVE_TASK, EDIT_TASK } from "../Actions/constant";

export const initial_state = {
  array: [],
};

function globalReducer(currentState = initial_state, action) {

  switch (action.type) {
    case CREATE_TASK:
      return {
        
        array: [...currentState.array, action.payload],
      };
      case REMOVE_TASK:
        return {
            array: currentState.array.filter((elem, index) => index !== action.payload)
        };

      // case EDIT_TASK:
      //   current
      //   return{
      //     array : currentState.array.at(index)=payload.updated_task
      //   }

      case EDIT_TASK:
  return {
    array: currentState.array.map((task, index) =>
      index === action.payload.index ? action.payload.updated_task : task
    )
  };

  
    default:
      return currentState;
  }
}

export default globalReducer;
