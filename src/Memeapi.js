import axios from "axios";
import './App.css';


const options = {
  method: 'GET',
  url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
  params: {
    top: 'Top Text',
    bottom: 'Bottom Text',
    meme: 'Condescending-Wonka',
    font_size: '50',
    font: 'Impact'
  },
  headers: {
    'X-RapidAPI-Key': 'f76b9b64d0msh6909b8e802a6ccfp1a3a9bjsnca139ca093ba',
    'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});