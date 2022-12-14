import { fetchArticle} from "../../services/Api";
import { useParams } from "react-router-dom";
import Article from "./SingleArticle";
import Comments from "./Comments";
import ErrorPage from "../Error/ErrorPage";
import { useCallback } from "react";
import useFetch from "../../hooks/useFetch";


export default function ArticlePage() {

	const { article_id } = useParams();
	
	const fetch = useCallback(() => {
		return fetchArticle(article_id)
	}, [article_id])

	const { data : article , error, isLoading} = useFetch(fetch, 'article')

	if (error) return <ErrorPage error={error}/>
	if (isLoading) return <p>Loading...</p>;
	
	return (<>
		<Article article = {article} key = {article.article_id}/>		
		<Comments article_id = {article_id} key = {`article${article_id}comments`} />
		</>
	);
}
