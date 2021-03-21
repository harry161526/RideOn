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
                    
                    localStorage.setItem('AccessToken',user.token);
                    dispatch(loginSuccess(user.user))
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
export const logoutStarted = () => {
    return {
        type : actionTypes.LOGOUT_STARTED,
    }
}

export const logoutSuccess = () => {
    return {
        type : actionTypes.LOGOUT_SUCCESS,
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(logoutStarted())
        setTimeout(() => {
            localStorage.removeItem('AccessToken');
            dispatch(logoutSuccess())
        }, 2000);
        
    }
}

export const checkAuthStatus = () => {
   return dispatch => {
       console.log("entered again....");
       dispatch(loginStarted());
       fetch("https://rocky-river-62504.herokuapp.com/user/checktoken",{method : 'post',headers : {
            'Authorization' : 'Bearer '+localStorage.getItem('AccessToken')
        }})
        .then(response => {
            response.json()
            .then(data => {
                
               dispatch(loginSuccess(data.user))
            })
            .catch(err => {
                console.log(err.message)
            })
        })
   }
}
