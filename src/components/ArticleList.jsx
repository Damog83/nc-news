import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {fetchArticles} from "../Api";
import ArticleCard from "./ArticleCard"

export default function ArticlesList() {
    
  const [articlesList, setArticlesList] = useState([]);
  // const [topicDescription, setTopicDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const {topic} = useParams();
    useEffect (()=> {
        fetchArticles(topic).then((requestedArticles) => {
        setArticlesList(requestedArticles);
        setIsLoading(false);

        // fetchTopics().then((result) => {
        //   // console.log(result)
        //   setTopicDescription()
        // })
    })
    },[topic])

    if (isLoading) return <p>Loading...</p>
    return (<ul>
      {articlesList.map((article) => {
        
      return (<>
      {/* <h3></h3> */}
          <ArticleCard article = {article}/>
          </>
          )
        }
      )
    }
  </ul>)
}