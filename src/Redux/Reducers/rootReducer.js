import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    cars : [],
    loading : false,
    error : null
}

const reducer = (state = initialState,action) => {
    switch(action.type)
    {
        case actionTypes.FETCH_CARS_STARTED :
            return {
                ...state,
                loading : true
            }
        case actionTypes.FETCH_CARS_SUCCESS :
            return {
                ...state,
                cars : action.cars,
                loading : false
            }
        case actionTypes.FETCH_CARS_FAILED :
            return {
                ...state,
                error : action.error,
                loading : false
            }        
        default :
            return state;
    }
}

export default reducer;