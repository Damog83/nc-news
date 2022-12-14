import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { patchVotes } from "../../services/Api";

export default function ArticleVote({ votes, article_id }) {
	const {user} = useContext(UserContext);
	const [currentVotes, setCurrentVotes] = useState(votes);
	const [hasVotedUp, setHasVotedUp] = useState(false);
	const [hasVotedDown, setHasVotedDown] = useState(false);
	const [err, setErr] = useState(null);

	useEffect(() => {
		const votedUpHistory = window.localStorage.getItem(`ncNews${user.username}Article${article_id}UpVote`);
		const votedDownHistory = window.localStorage.getItem(`ncNews${user.username}Article${article_id}DownVote`);
		setHasVotedUp(JSON.parse(votedUpHistory));
		setHasVotedDown(JSON.parse(votedDownHistory));
	},[article_id, user])

	useEffect(() => {
		window.localStorage.setItem(`ncNews${user.username}Article${article_id}UpVote`, JSON.stringify(hasVotedUp));
		window.localStorage.setItem(`ncNews${user.username}Article${article_id}DownVote`, JSON.stringify(hasVotedDown));

	},[article_id, user, hasVotedUp, hasVotedDown])

	const setIncrementalVotes = () => {
		setCurrentVotes(currentVotes + 1);
		if (hasVotedDown) {
			setHasVotedDown(false);
		} else {
			setHasVotedUp(true);
		}
		patchVotes({ inc_votes: 1 }, article_id).catch((err) => {
			setCurrentVotes(currentVotes - 1);
			setErr('Something went wrong, please try again.');
		});
	};

	const setDecrementalVotes = () => {
		setCurrentVotes(currentVotes - 1);
		if (hasVotedUp) {
			setHasVotedUp(false);
		} else {
			setHasVotedDown(true);
		}
		patchVotes({ inc_votes: -1 }, article_id).catch((err) => {
			setCurrentVotes(currentVotes + 1);
			setErr('Something went wrong, please try again.');
		});
	};

	if (err) return <p>{err}</p>;
	
	return (
		<div className="voting">
			<button
				type="button"
				className="article-vote-button"
				disabled={hasVotedUp}
				onClick={() => {
					setIncrementalVotes();
				}}
			>
				+
			</button>
			<p>{currentVotes}</p>
			<button
				type="button"
				className="article-vote-button"
				disabled={hasVotedDown}
				onClick={() => {
					setDecrementalVotes();
				}}
			>
				-
			</button>
		</div>
	);
}
