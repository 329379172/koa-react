import homeActions from '../actions/actions.js';


let homeReducer = (state, action) => {
    let type = action.type;
    let payload = action.payload;
    switch(type) {
        case homeActions.GET_HOME_DATA:
            return state;
        case homeActions.GET_HOME_DATA_FAILED:
            return state;
        case homeActions.GET_HOME_DATA_SUCCESS:
            return Object.assign({}, state, {
                home: payload
            });
        default:
            return state;
    }
};


export default homeReducer;