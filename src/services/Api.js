import axios from 'axios'

const myApi = axios.create({
    baseURL: 'https://be-nc-news-3bj4.onrender.com/api',
  });

const fetchArticles = (topic, sort, order) => { 
     return myApi.get('/articles', {params:{topic, sort, order}}).then((response) => {
        return response;
    })
}

const fetchArticle = (article_id) => {
    return myApi.get(`/articles/${article_id}`).then((response) => {
        return response;
    })
}

const fetchCommentsByArticleId = (article_id) => {
    return myApi.get(`/articles/${article_id}/comments`).then((response) => {
        return response;
    })

}

const fetchTopics = () => {
    return myApi.get('/topics').then((response) => {
        return response;
    })
}

const fetchUsers = () => {
    return myApi.get('/users').then((response) => {
        return response;
    })
}

const patchVotes = (votes, article_id) => {

    return myApi.patch(`/articles/${article_id}`, votes).then((response) => {
        return response;
    })
}

const postComment = (article_id, comment) => {

    return myApi.post(`/articles/${article_id}/comments`, comment).then((response) => {
        return response;
    })
}

const deleteComment = (comment_id) => {

    return myApi.delete(`/comments/${comment_id}`)
}

export {fetchArticles, fetchArticle, fetchCommentsByArticleId, patchVotes, fetchTopics, fetchUsers, postComment, deleteComment}