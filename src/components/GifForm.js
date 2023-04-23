import React, { useState } from "react";
import { connect } from "react-redux";
import { getGifs } from '../actions'

const GifForm = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.getGifs(searchTerm);
    }

    const handleChange = (evt) => {
        setSearchTerm(evt.target.value)
    }

    console.log("state:", searchTerm)
    return (
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange}/>
        <button>Search</button>
    </form>
    )
}

export default connect(null, { getGifs })(GifForm);