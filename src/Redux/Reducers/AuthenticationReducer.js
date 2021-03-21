import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    user : {},
    loginLoading : false,
    isLogged : false,
    isAdmin : false,
    loginError : null,
    logoutLoading : false
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
                loginLoading : false,
                isAdmin : action.user.isAdmin
            }
        case actionTypes.LOGIN_FAILED :
            return {
                ...state,
                loginLoading : false,
                loginError : action.error
            }
        case actionTypes.LOGOUT_STARTED :
            return {
                ...state,
                logoutLoading : true,
            }
        case actionTypes.LOGOUT_SUCCESS :
            return {
                ...state,
                user : {},
                isLogged : false,
                isAdmin : false,
                logoutLoading : false,
            }                    
        default :
            return state;
    }
}
export default reducer;