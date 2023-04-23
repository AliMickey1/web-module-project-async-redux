

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "f76b9b64d0msh6909b8e802a6ccfp1a3a9bjsnca139ca093ba");
myHeaders.append("x-rapidapi-host", "api-nba-v1.p.rapidapi.com");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api-nba-v1.p.rapidapi.com/{endpoint}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

const data = 

{
    "get": "leagues/",
    "parameters": [],
    "errors": [],
    "results": 6,
    "response": [
      "africa",
      "orlando",
      "sacramento",
      "standard",
      "utah",
      "vegas"
    ]
  }

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://api-nba-v1.p.rapidapi.com/seasons',
//   headers: {
//     'X-RapidAPI-Key': 'f76b9b64d0msh6909b8e802a6ccfp1a3a9bjsnca139ca093ba',
//     'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });