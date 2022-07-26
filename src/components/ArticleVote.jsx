import { useEffect } from "react";
import { useState } from "react";
import { patchVotes } from "../Api";

export default function ArticleVote({ votes, article_id }) {
	const [currentVotes, setCurrentVotes] = useState(votes);
	const [hasVotedUp, setHasVotedUp] = useState(false);
	const [hasVotedDown, setHasVotedDown] = useState(false);
	const [err, setErr] = useState(null)

	useEffect(() => {
		const votedUpHistory = window.localStorage.getItem(`ncNewsArticle${article_id}UpVote`);
		const votedDownHistory = window.localStorage.getItem(`ncNewsArticle${article_id}DownVote`);
		setHasVotedUp(JSON.parse(votedUpHistory));
		setHasVotedDown(JSON.parse(votedDownHistory));
	},[article_id])

	useEffect(() => {
		window.localStorage.setItem(`ncNewsArticle${article_id}UpVote`, JSON.stringify(hasVotedUp));
		window.localStorage.setItem(`ncNewsArticle${article_id}DownVote`, JSON.stringify(hasVotedDown));

	},[article_id, hasVotedUp, hasVotedDown])

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
		<div>
			<button
				type="button"
				className="voteButton"
				disabled={hasVotedUp}
				id="incrementbutton"
				onClick={() => {
					setIncrementalVotes();
				}}
			>
				Vote +
			</button>
			<p>{currentVotes}</p>
			<button
				type="button"
				className="voteButton"
				disabled={hasVotedDown}
				id="decrementButton"
				onClick={() => {
					setDecrementalVotes();
				}}
			>
				Vote -
			</button>
		</div>
	);
}
