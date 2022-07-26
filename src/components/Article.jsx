import { useEffect } from "react";
import formatDate from "../utils/formatDate";
import startWithUpperCase from "../utils/formatNavLink";
import ArticleVote from "../components/ArticleVote";
import { fetchCommentsByArticleId } from "../Api";
import { useState } from "react";

export default function Article(props) {
	const [comments, setComments] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const {
		article: { title,
                   author,
                   created_at,
                   topic,
                   body,
                   votes,
                   article_id }
	} = props;

	useEffect(() => {
		fetchCommentsByArticleId(article_id).then((requestedComments) => {
			setComments(requestedComments);
			setIsLoading(false);
		})
	}, [article_id])
	console.log(comments)

    const uppercaseTopic = startWithUpperCase(topic);

	if (isLoading) return <p>Loading...</p>;
	return (
		<div className="article">
			<h2>{title}</h2>
			<h3>{author}</h3>
			<p>{formatDate(created_at)}</p>
			<h3 className={`topic${topic}`}>{uppercaseTopic}</h3>
			<p className="articleBody">{body}</p>
			<ArticleVote
				className="ArticleVote"
				votes={votes}
				article_id={article_id}
			/>
		</div>
	);
}
