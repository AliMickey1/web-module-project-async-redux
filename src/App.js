import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GifForm from './components/GifForm';
import Gif from './components/Gif';
import GifList from './components/GifList';
import data from './data/gifs'



function App(props) {

  const { loading, error } = props;

  return (
    <div className="App">
      <h1>Search for a GIF</h1>
      <GifForm />
      {
        (error !== "") && <h3>{error}</h3>
      }
        {
          loading ? <h3>We are loading</h3> : <GifList />
      
        }

    </div>
  );
}


export default connect(st => ({loading: st.loading, error: st.error}))(App);