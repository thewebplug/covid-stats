import axios from "axios"

export const getCovidData = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_COVID_DATA_REQUEST' })

        const data = await axios.get('https://covidnigeria.herokuapp.com/api')

        dispatch({
            type: 'GET_COVID_DATA_SUCCESS',
            payload: data.data.data
        })
    } catch (error) {
        dispatch({
            type: 'GET_COVID_DATA_FAIL',
            payload: error
        })
    }
}