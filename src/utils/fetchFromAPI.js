import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '88ea2f1a94msh4d7e3db1db8474cp152413jsncb3d04231a34',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
export const fetchFromAPI = async(url) => {

const {data} = await axios.get(`${BASE_URL}/${url}`,options);

return data;
}