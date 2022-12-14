import { useCallback, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCommentsByArticleId } from '../../services/Api';
import { UserContext } from '../../contexts/UserContext';
import CommentCard from './CommentCard';
import AddComment from './AddComment';
import ErrorPage from '../Error/ErrorPage';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';

export default function Comments(props) {
	const { user } = useContext(UserContext);
	const { article_id } = props;
	const fetch = useCallback(() => {
		return fetchCommentsByArticleId(article_id);
	}, [article_id]);

	const { data, error, isLoading } = useFetch(fetch, 'comments');
	const [comments, setComments] = useState([]);

	useEffect(() => {
		setComments(data);
	}, [data]);

	const renderNewComment = (newComment) => {
		setComments([newComment, ...comments]);
	};

	const rerenderAfterDelete = (comment_id) => {
		const updatedComments = [...comments].filter(
			(comment) => comment.comment_id !== comment_id
		);
		setComments(updatedComments);
	};

	if (error) return <ErrorPage error={error} />;
	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			{user ? (
				<AddComment
					article_id={article_id}
					renderNewComment={renderNewComment}
					key="AddCommentComponent"
				/>
			) : (
				<p>
					<Link className="sign-in-link" to="/signIn">
						Sign in
					</Link>{' '}
					to add comment and vote on articles
				</p>
			)}
			<ul>
				{comments.map((comment) => {
					return (
						<CommentCard
							comment={comment}
							rerenderAfterDelete={rerenderAfterDelete}
							key={comment.comment_id}
						/>
					);
				})}
			</ul>
		</>
	);
}
