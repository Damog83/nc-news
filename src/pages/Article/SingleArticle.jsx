import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import formatDate from '../../utils/formatDate';
import formatText from '../../utils/formatText';
import ArticleVote from './ArticleVote';

export default function Article(props) {
	const { user } = useContext(UserContext);

	const {
		article: {
			title,
			author,
			created_at,
			topic,
			body,
			votes,
			article_id,
			comment_count,
		},
	} = props;

	return (
		<div className="article">
			<div className={`article-top-${topic}`}>
				<div className="article-top-title">
				<h2>{title}</h2>
				</div>
				<div className="article-top-author">
				<h3>{author}</h3>
				</div>
			</div>
			<div className="article-topic-date">
				<h3>{formatText(topic)}</h3>
				<p className="article-date">{formatDate(created_at)}</p>
			</div>
			<p className="article-body">{body}</p>
			<div className="article-count-vote">
				<p>{`Comment count: ${comment_count}`}</p>
				{user ? (
					<ArticleVote
						className="article-vote"
						votes={votes}
						article_id={article_id}
					/>
				) : (
					<p className="articleVote">{`Vote: ${votes}`}</p>
				)}
			</div>
		</div>
	);
}
