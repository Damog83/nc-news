import formatDate from "../utils/formatDate";
import startWithUpperCase from "../utils/formatNavLink";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
	const {article_id,
		  title,
		  author,
		  topic,
		  created_at} = article;

	const uppercaseTopic = startWithUpperCase(topic)
	return (
		<div className="article_card">
			<h3>
				<nav>
					<Link
						className="articleListArticleTitle"
						to={`/articles/article/${article_id}`}
					>
						{title}
					</Link>
				</nav>
			</h3>
			<p id="cardAuthor">{author}</p>
			<p className={`topic${topic}`}>{uppercaseTopic}</p>
			<p>{formatDate(created_at)}</p>
		</div>
	);
}
