import * as actionTypes from './ActionTypes';
import {storage} from '../../Firebase/firebase'

 export const fetchCarsSuccess = (cars) => {
    return {
        type : actionTypes.FETCH_CARS_SUCCESS,
        cars : cars
    }
 }
 export const fetchCarsStarted = () => {
     return {
         type : actionTypes.FETCH_CARS_STARTED
     }
 }
 export const fetchCarsFailed = (error) => {
     return {
         type : actionTypes.FETCH_CARS_FAILED,
         error : error
     }
 }
 export const fetchCars = () => {
     return dispatch => {
        dispatch(fetchCarsStarted());
        fetch('https://rocky-river-62504.herokuapp.com/cars/')
        .then(response => {
            response.json()
            .then(cars => dispatch(fetchCarsSuccess(cars)))
            .catch(err => dispatch(fetchCarsFailed(err)))
        })
        .catch(err => {
            dispatch(fetchCarsFailed(err))
        })
     }
    
 }

 export const postCarStarted = () => {
     return {
         type : actionTypes.POST_CAR_STARTED
     }
 }
 export const postCarSuccess = (car) => {
     return {
         type : actionTypes.POST_CAR_SUCCESS,
         car : car
     }
 }
 export const postCarFailed = (error) => {
     return {
         type : actionTypes.POST_CAR_FAILED,
         error : error
     }
 }
 export const postCar = (data) => {
     return dispatch => {
         dispatch(postCarStarted())
            for(const key in data)
            {
                if(key == 'image1' || key == 'image2' || key == 'image3')
                {
                    key = getUrl(key,data[key])
                }
            }
            fetch('https://rocky-river-62504.herokuapp.com/cars/',{method : 'post',body : data})
            .then(response => {
                response.json()
                .then(car => {
                    console.log(car)
                })
                .catch(err => console.log(err))
            })
            .then(err => console.log(err))    
     }
 }
export const setProgress = (progress,key) => {
    return {
        type : actionTypes.SET_PROGRESS,
        progress : progress,
        key : key
    }
}
export const uploadImageFailed = (error) => {
    return {
        type : actionTypes.UPLOAD_IMAGE_FAILED,
        error : error
    }
}
 export const getUrl = (key,file) => {
     return dispatch => {
        const uploadTask = storage.ref(`/cars/${file.name}`).put(file);
        uploadTask.on(
         storage.TaskEvent.STATE_CHANGED,
         snapshot => {
             const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
             dispatch(setProgress(progress,key))
         },
         (error) => {
            dispatch(uploadImageFailed(error))
         },
         () => {
             uploadTask.snapshot.ref.getDownloadURL()
             .then(url => {
                 return url;
             })
             .catch(err => {
                 console.log(err)
             })
         }
     )
     }
     
 }
 const fetchingBrandsSuccess = (data) => {
     return {
         type : actionTypes.FETCH_BRANDS_SUCCESS,
         brands : data
     }
 }
 export const getBrands = () => {
     return dispatch => {
        fetch("https://rocky-river-62504.herokuapp.com/cars/brands/")
        .then(response => {
            response.json()
            .then(data => {
                console.log(data)
                dispatch(fetchingBrandsSuccess(data))
            })
            .catch(err => {
                console.log(err.message);
            })
        })
        .catch(err => {
            console.log(err.message);
        })
     }
 }