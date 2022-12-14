import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { postComment } from '../../services/Api';
import ErrorPage from '../Error/ErrorPage';

export default function AddComment(props) {
	const [comment, setComment] = useState('');
	const [submitButton, setSubmitButton] = useState(true);
	const [error, setError] = useState(null);
	const { article_id, renderNewComment } = props;
	const { user } = useContext(UserContext);

	const updateComment = (event) => {
		setComment(event.target.value);
		event.target.value === '' ? setSubmitButton(true) : setSubmitButton(false);
	};

	const submitComment = () => {
		const newComment = { username: `${user.username}`, body: `${comment}` };
		setComment('');
		setSubmitButton(true);
		postComment(article_id, newComment)
			.then((response) => {
				renderNewComment(response.data.comment);
			})
			.catch((err) => {
				setError({ err });
			});
	};

	if (error) return <ErrorPage error={error} />;

	return (
		<div>
			<textarea
				className="textarea"
				placeholder="Add a comment..."
				value={comment}
				onChange={updateComment}
			/>
			<br></br>
			<button
				type="button"
				disabled={submitButton}
				onClick={() => {
					submitComment();
				}}
			>
				Submit
			</button>
		</div>
	);
}
