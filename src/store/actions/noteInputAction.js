const noteInputAction = (input) => {
    return (dispatch) => {
        dispatch({
            type: 'inputValue',
            payload: input
        })
    }
}

export default noteInputAction
