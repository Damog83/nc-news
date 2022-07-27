import { useState, useEffect } from "react";
import { fetchUsers } from "../Api";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState();
	const [canSignIn, setCanSignIn] = useState(true);
	const {setUser} = useContext(UserContext);

	useEffect(() => {
		fetchUsers().then((users) => {
			setUsers(users);
		});
	}, []);

	const navigate = useNavigate()

	const selectUser = (event) => {
		setSelectedUser(event.target.value);
		setCanSignIn(false);
	};

	const userSignIn = () => {
		setUser(selectedUser);
		navigate(-1)
	};

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
