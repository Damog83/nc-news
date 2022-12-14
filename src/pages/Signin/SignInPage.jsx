import { useState, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../services/Api';
import { UserContext } from '../../contexts/UserContext';
import useFetch from '../../hooks/useFetch';
import ErrorPage from '../Error/ErrorPage';

export default function SignInPage() {
	const [selectedUser, setSelectedUser] = useState();
	const [canSignIn, setCanSignIn] = useState(true);
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const fetch = useCallback(() => {
		return fetchUsers();
	}, []);

	const { data: users, error, isLoading } = useFetch(fetch, 'users');

	const selectUser = (event) => {
		const currentSelection = JSON.parse(event.target.value);
		setSelectedUser(currentSelection);
		setCanSignIn(false);
	};

	const userSignIn = () => {
		setUser(selectedUser);
		window.localStorage.setItem(
			'ncNewsSignedInAs',
			JSON.stringify(selectedUser)
		);
		navigate(-1);
	};

	if (error) return <ErrorPage error={error} />;
	if (isLoading) return <p>Loading...</p>;
	return (
		<>
		<div >
			<label>
				Select user:
				<select onChange={selectUser} className="select-menu">
					{!selectedUser && <option key="selectUser">select user</option>}

					{users.map((userObject) => {
						return (
							<option
								key={`${userObject.username}`}
								value={JSON.stringify(userObject)}
							>{`${userObject.username}`}</option>
						);
					})}
				</select>
			</label>
			
			<button
				type="button"
				className='signoutbutton'
				disabled={canSignIn}
				onClick={() => {
					userSignIn();
				}}
				>
				Sign In
			</button>
			
				</div>
		</>
	);
}
