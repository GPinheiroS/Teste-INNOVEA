import axios from 'axios';

const apiKey = '983a158c01cd4073a6068ea8731abd15';

const getNews = async () => {
    return await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
    .then((response) => {return response.data.articles})
    .catch((error) => console.log(error))
}


export {getNews};