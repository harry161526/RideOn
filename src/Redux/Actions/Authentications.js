import * as actionTypes from './ActionTypes';

export const signupStarted = () => {
    return {
        type : actionTypes.SIGNUP_STARTED
    }
}
export const signupSuccess = (user) => {
    return {
        type : actionTypes.SIGNUP_SUCCESS,
        user : user
    }
}
export const signupFailed = (error) => {
    return {
        type : actionTypes.SIGNUP_FAILED,
        error : error
    }
}
export const signup = (data) => {
    return dispatch => {
        fetch('https://rocky-river-62504.herokuapp.com/user/signup',{
        method : "POST",
        body : data, 
        headers : {'content-type' : 'application/json'} 
    })
    .then(response => {
        response.json()
        .then(user => {
            console.log(user)
            dispatch(signupSuccess(user))
        })
        .catch(err => {
            console.log(err)
            dispatch(signupFailed(new Error(err.message)))
        })
    })
    .catch(err => {
        dispatch(signupFailed(new Error(err.message)))
    }) 
    }
    
}
export const loginStarted = () => {
    return {
        type : actionTypes.LOGIN_STARTED
    }
}
export const loginSuccess = (user) => {
    return {
        type : actionTypes.LOGIN_SUCCESS,
        user : user
    }
}
export const loginFailed = (error) => {
    return {
        type : actionTypes.LOGIN_FAILED,
        error : error
    }
}
export const login = (data) => {
    return dispatch => {
        dispatch(loginStarted());
        fetch("https://rocky-river-62504.herokuapp.com/user/login",{
            method : "POST",
            body : JSON.stringify(data),
            headers : {'content-type' : 'application/json'}
        })
        .then(response => {
            
            response.json()
            .then(user => {
                if(user.message != 'Auth successful')
                {
                    dispatch(loginFailed(user.message))
                }
                else
                {
                    localStorage.setItem('Access',user.token);
                    dispatch(loginSuccess(user.user[0]))
                }
                
            })
            .catch(err => {
                
                dispatch(loginFailed(err.message))
            })
        })
        .catch(err => {
            console.log(err.message);
            dispatch(loginFailed(err.message))
        })
    }
}
