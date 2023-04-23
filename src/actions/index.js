import axios from "axios";

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"



export const getGifs = (searchTerm) => {
    return( dispatch => {
        // dispatch({type: FETCH_START})
        dispatch(props.fetchStart());
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=TPj9QqZbPpi8Kdkm5g47jW1DruPZQ5sj&q=${searchTerm}`)
            .then(res=>{
                // dispatch({type: FETCH_SUCCESS, payload: res.data.data})
                dispatch(fetchSuccess(res.data.data))
            })
            .catch(err => {
                setError(err, dispatch)
                })
    });
}

    export const fetchStart = () => {
        return({type: FETCH_START});
    }

    export const fetchSuccess = () => {
        return ({type: FETCH_SUCCESS, payload: gifs})
    }


