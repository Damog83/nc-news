import axios from 'axios'

// Look at notes React Router axios base URL 

const myApi = axios.create({
    baseURL: 'https://nc-news-example-seminar-3-3.herokuapp.com/api',
  });


const fetchArticles = (topic) => {   

    
     return myApi.get('/articles', {params:{topic}}).then((response) => {
        const requestedArticles = response.data.articles;
        return requestedArticles;
    })
}

// const fetchTopics = () => {

//     return myApi.get('/topics').then((response) => {
//         const {data:{topics}} = response;
//         console.log(topics)
//         return topics;
//     })
// }

const fetchArticle = (article_id) => {

    return myApi.get(`/articles/${article_id}`).then((response) => {
        const requestedArticle = response.data.article;
        return requestedArticle;
    })
}



export {fetchArticles, fetchArticle}