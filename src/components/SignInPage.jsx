import { useState, useEffect } from "react";
import { fetchUsers } from "../Api";

export default function SignInPage() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState();
	const [canSignIn, setCanSignIn] = useState(true);

	useEffect(() => {
		fetchUsers().then((users) => {
			setUsers(users);
		});
	}, []);

	const selectUser = (event) => {
		setSelectedUser(event.target.value);
		setCanSignIn(false);
	};

	const userSignIn = () => {};
	console.log(selectedUser);

	//create an onclick function that sets the conext to the selected value and directs to home page

	return (
		<>
			<label>
				Select user:
				<select
					value={selectedUser}
					onChange={selectUser}
					id="selectUser"
					className="userSignInSelectMenu"
				>
					{!selectedUser && <option key ='selectUser'>select user</option>}

					{users.map((user) => {
						return (
							<option
								key={`${user.username}`}
								value={`${user.username}`}
							>{`${user.username}`}</option>
						);
					})}
				</select>
			</label>
			<button
				type="button"
				className="signInButton"
				disabled={canSignIn}
				onClick={() => {
					userSignIn();
				}}
			>
				Sign In
			</button>
		</>
	);
}
