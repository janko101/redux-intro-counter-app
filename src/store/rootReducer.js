const initialState = {
  counter: 0
}

const rootReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }

  if (action.type === 'ADD_VALUE') {
    return {
      counter: state.counter + action.value
    }
  }
  return state
}

export default rootReducer