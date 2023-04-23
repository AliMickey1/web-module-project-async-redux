import React from 'react';
import { connect } from 'react-redux';
import Gif from './Gif';


const GifList = (props) => {
    const { gifs } = props

    return (
    
    <div id="gifList">
        {
        gifs.map(gif => {
            return(
                <Gif gif={gif} />
            )
        })

        }
    </div>    
    );
}


export default connect(st => ({gifs: st.gifs}))(GifList);