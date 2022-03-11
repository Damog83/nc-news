import { useState, useEffect } from "react";
import {fetchArticle} from "../Api";
import {useParams} from "react-router-dom"
import formatDate from "../utils/formatDate";


export default function ArticlePage() {
    
    const [article, setArticle] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();

    useEffect(() => {
        fetchArticle(article_id).then((requestedArticle) => {
            setArticle(requestedArticle);
            setIsLoading(false);
        })
    }, [article_id])

    if (isLoading) return <p>Loading...</p>
    return (
    <div className = 'articlePageArticle'>
      <h2 >{article.title}</h2>
      <h3>{article.author}</h3>
      <p>{formatDate(article.created_at)}</p>
      <h3 className = {`topic${article.topic}`}>{article.topic}</h3>
      <p className = 'articleBody'>{article.body}</p>
    </div>
    )
}