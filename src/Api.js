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

const fetchArticle = (article_id) => {
    
    return myApi.get(`/articles/${article_id}`).then((response) => {
        const requestedArticle = response.data.article;
        return requestedArticle;
    })
}

const fetchCommentsByArticleId = (article_id) => {

    return myApi.get(`/articles/${article_id}/comments`).then((response) => {
        const requestedArticleComments = response.data.comments;
        return requestedArticleComments;
    })

}

const fetchTopics = () => {

    return myApi.get('/topics').then((response) => {
        const topics = response.data.topics;
        return topics;
    })
}

const patchVotes = (votes, article_id) => {

    return myApi.patch(`/articles/${article_id}`, votes).then((response) => {
        return response.data.article
    })
}

export {fetchArticles, fetchArticle, fetchCommentsByArticleId, patchVotes, fetchTopics}