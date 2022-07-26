const noteInputReducer = (state="default value", action) => {
    if(action.type == 'inputValue') {
        const newState = action.payload
        return newState
    }
    else
        return state
}


export default noteInputReducer