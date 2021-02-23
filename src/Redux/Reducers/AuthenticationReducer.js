import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    user : {},
    loginLoading : false,
    isLogged : false,
    loginError : null
}
const reducer = (state=initialState,action) => {
    switch(action.type)
    {
        case actionTypes.LOGIN_STARTED :
            return {
                ...state,
                loginLoading : true
            }
        case actionTypes.LOGIN_SUCCESS :
            return {
                ...state,
                user : action.user,
                isLogged : true,
                loginLoading : false
            }
        case actionTypes.LOGIN_FAILED :
            return {
                ...state,
                loginLoading : false,
                loginError : action.error
            }
                        
        default :
            return state;
    }
}
export default reducer;