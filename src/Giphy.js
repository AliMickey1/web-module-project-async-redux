// API Key

// TPj9QqZbPpi8Kdkm5g47jW1DruPZQ5sj

// https://api.giphy.com/v1/gifs/search?api_key=TPj9QqZbPpi8Kdkm5g47jW1DruPZQ5sj&q=NBA&limit=25&offset=0&rating=g&lang=en

// const [gifs, setGifs] = useState([]);
// const [term, updateTerm] = useState('');


// async function fetchGifs() {
//     try {
//       const API_KEY = <API_KEY>;
//       const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
//       const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}`);
//       const res = await resJson.json();
//       setGifs(res.data);
//     } catch (error) {
//       console.warn(error);
//     }
//   }