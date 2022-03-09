import axios from 'axios'

export default function fetchArticles() {
     return axios.get('https://nc-news-example-seminar-3-3.herokuapp.com/api/articles').then((response) => {
        const requestedArticles = response.data.articles;
        return requestedArticles;
    })
}