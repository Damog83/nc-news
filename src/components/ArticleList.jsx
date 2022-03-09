import { useState, useEffect } from "react";
import fetchArticles from "../utils/fetchArticles";
import ArticleCard from "./ArticleCard"

export default function ArticlesList() {
    
  const [articlesList, setArticlesList] = useState([]);

    useEffect (()=> {
        fetchArticles().then((requestedArticles) => {
        setArticlesList(requestedArticles)
    },[])
    })

  return <ul>
      {articlesList.map(({title, topic, author, created_at}) => {
      return (
          <ArticleCard class = 'ArticleCard'
          title = {title}
          topic = {topic}
          author = {author}
          created_at = {created_at}
          />
          )
        }
      )
    }
  </ul>
}