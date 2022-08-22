const covidReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_COVID_DATA_REQUEST':
            return { loading: true }
        case 'GET_COVID_DATA_SUCCESS':
            return { loading: false, data: action.payload }
        case 'GET_COVID_DATA_FAIL':
            return { loading: false, error: action.payload }
        case 'GET_COVID_DATA_RESET':
            return {}
        default:
            return state;
    }
}

export default covidReducer;