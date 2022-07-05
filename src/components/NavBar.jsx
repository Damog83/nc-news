import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTopics } from "../Api";

export default function NavBar() {
	const [navLinks, setNavLinks] = useState([]);

	useEffect(() => {
		fetchTopics().then((topics) => {
			setNavLinks(topics);
		});
	}, []);

	return (
		<ul>
            <Link className = 'navBar' id = 'homeNav' to = '/'>Home</Link>
			{navLinks.map((navLink) => {
				return (
					<Link
						className="navBar"
						id={`${navLink.slug}Nav`}
						to={`/articles/${navLink.slug}`}
						key={`${navLink.slug}`}
					>{`${navLink.slug}`}</Link>
				);
			})}
		</ul>
	);
}
