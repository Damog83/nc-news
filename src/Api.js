import axios from 'axios'

// Look at notes React Router axios base URL 

const myApi = axios.create({
    baseURL: 'https://appbencnews.herokuapp.com/api',
  });

const fetchArticles = (topic) => {   

    
     return myApi.get('/articles', {params:{topic}}).then((response) => {
        const requestedArticles = response.data.articles;
        return requestedArticles;
    })
}

const fetchTopics = () => {

    return myApi.get('/topics').then((response) => {
        const topics = response.data.topics;
        return topics;
    })
}

const fetchArticle = (article_id) => {

    return myApi.get(`/articles/${article_id}`).then((response) => {
        const requestedArticle = response.data.article;
        return requestedArticle;
    })
}

const patchVotes = (votes, article_id) => {

    return myApi.patch(`/articles/${article_id}`, votes).then((response) => {
        return response
    })
}



export {fetchArticles, fetchArticle, patchVotes, fetchTopics}