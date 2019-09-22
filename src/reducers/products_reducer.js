import types from '../actions/types'

const DEFAULT_STATE = {
    list: [], 
    details: null
}

export default (state=DEFAULT_STATE,action) => {
    switch(action.type){
        case types.GET_ALL_PRODUCTS:
            return {...state, list: action.products};
        default: 
            return state;
    }
}