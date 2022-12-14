import formatDate from "../../utils/formatDate";
import formatText from "../../utils/formatText";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
	
	const {article_id,
		  title,
		  author,
		  topic,
		  created_at,
		  comment_count,
		  votes} = article;
	
	return (
		<div className="article-card">
			<div className={`article-card-title-${topic}`}>
			<h3>
			<nav>
					<Link
						className="article-title"
						to={`/articles/article/${article_id}`}
					>
						{title}
			        </Link>
			</nav>
			</h3>
			<p className="article-card-author">{author}</p>
			</div>
			<div className="article-card-details">
			 <p>{formatText(topic)}</p>
			 <p>{formatDate(created_at)}</p>
			 <p>{`Votes: ${votes}`}</p>
			 <p>{`Comment count: ${comment_count}`}</p>
			</div>
		</div>
	);
}
