import { useState, useEffect } from "react";
import fetchArticles from "../utils/fetchArticles";
import ArticleCard from "./ArticleCard"
import { useParams } from "react-router-dom";

export default function ArticlesList() {
    
  const [articlesList, setArticlesList] = useState([]);
  const {topic} = useParams();

 console.log(topic)
    useEffect (()=> {



        fetchArticles(topic).then((requestedArticles) => {
        setArticlesList(requestedArticles)
    })
    },[topic])

  return (<ul>
      {articlesList.map((article) => {
        
      return (
          <ArticleCard article = {article} key = {article.article_id}/>
          )
        }
      )
    }
  </ul>)
}