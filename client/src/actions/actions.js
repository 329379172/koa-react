const GET_HOME_DATA = 'GET_HOME_DATA';
const GET_HOME_DATA_SUCCESS = 'GET_HOME_DATA_SUCCESS';
const GET_HOME_DATA_FAILED = 'GET_HOME_DATA_FAILED';
import 'whatwg-fetch'


const getHomeData = () => {
    return fetch('/api/home');
}

const getHomeDataAction = function() {
    return (dispatch) => {
        dispatch({
            type: GET_HOME_DATA
        });
        getHomeData()
         .then((response) => {
             return response.json();
       })
        .then((json) => {
            dispatch({
                type: GET_HOME_DATA_SUCCESS,
                payload: json
            })
       })
        .catch(error => {
            dispatch({
                type: GET_HOME_DATA_FAILED,
                payload: error
            })
        }); 
    }
}

export default {
    GET_HOME_DATA,
    GET_HOME_DATA_FAILED,
    GET_HOME_DATA_SUCCESS,
    getHomeDataAction
}; 