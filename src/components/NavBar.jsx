import { useState, useEffect } from "react";
import { fetchTopics } from "../Api";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

export default function NavBar() {
	const [topics, setTopic] = useState([]);

	useEffect(() => {
		fetchTopics().then((topics) => {
			setTopic(topics);
		});
	}, []);

	return (
		<ul>
			<Link className="navBar" id="homeNav" to="/">
				Home
			</Link>
			{topics.map((topic) => {
				return <NavLink topic = {topic} key={`${topic.slug}`} />;
			})}
		</ul>
	);
}
