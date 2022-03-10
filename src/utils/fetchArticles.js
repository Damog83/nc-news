import axios from 'axios'

//Look at notes React Router axios base URL 

export default function fetchArticles(topic) {
    
    let databaseQuery = `https://nc-news-example-seminar-3-3.herokuapp.com/api/articles?topic=${topic}`

    if(!topic) {
       databaseQuery = `https://nc-news-example-seminar-3-3.herokuapp.com/api/articles`
    }
    
     return axios.get(`${databaseQuery}`).then((response) => {
        const requestedArticles = response.data.articles;
        return requestedArticles;
    })
}