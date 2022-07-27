import { useState, useEffect, useContext } from "react";
import { fetchArticle} from "../Api";
import { useParams } from "react-router-dom";
import Article from "./Article";
import Comments from "./Comments";
import { UserContext } from "../contexts/User";

export default function ArticlePage() {
	const [article, setArticle] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const { article_id } = useParams();
	// const {user} = useContext(UserContext);

	useEffect(() => {
		fetchArticle(article_id).then((requestedArticle) => {
			setArticle(requestedArticle);
			setIsLoading(false);
		});
	}, [article_id]);

	if (isLoading) return <p>Loading...</p>;
	return (<>
		<Article article = {article} key = {article.article_id}/>
		{}
		<Comments article_id = {article_id} key = {`article${article_id}comments`} />
		</>
	);
}
