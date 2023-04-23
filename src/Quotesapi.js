import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  headers: {
    'X-RapidAPI-Key': 'f76b9b64d0msh6909b8e802a6ccfp1a3a9bjsnca139ca093ba',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});