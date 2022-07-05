import formatDate from "../utils/formatDate";
import startWithUpperCase from "../utils/formatNavLink";
import ArticleVote from "../components/ArticleVote";

export default function Article(props) {
	const {
		article: { title,
                   author,
                   created_at,
                   topic,
                   body,
                   votes,
                   article_id }
	} = props;

    const uppercaseTopic = startWithUpperCase(topic);
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
