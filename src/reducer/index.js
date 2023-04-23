import { FETCH_START, FETCH_SUCCESS } from '../actions';
import data  from '../data/gifs'

const intialState = {
    gifs: data,
    loading: false,
    error: ""
}

const reducer = (state = intialState,action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                gifs: action.payload,
                error: ""
            }
        default:
            return(state);
    }
}

export default reducer;