import { useContext, useCallback } from 'react';
import { UserContext } from '../contexts/UserContext';
import { fetchTopics } from '../services/Api';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import ErrorPage from '../pages/Error/ErrorPage';
import useFetch from '../hooks/useFetch';

export default function NavBar() {
	const { user } = useContext(UserContext);

	const fetch = useCallback(() => {
		return fetchTopics();
	}, []);

	const { data, error } = useFetch(fetch, 'topics');

	if (error) return <ErrorPage error={error} />;

	return (
		<div id="nav">
			<ul>
				<Link className="navLink" to="/">
					Home
				</Link>

				{data.map((topic) => {
					return (
						<NavLink className="navLink" topic={topic} key={`${topic.slug}`} />
					);
				})}
				{!user ? (
					<Link className="navLink" to="/signIn">
						Sign In
					</Link>
				) : (
					<Link className="navLink" to="/signOut">
						Sign Out
					</Link>
				)}
			</ul>
		</div>
	);
}
