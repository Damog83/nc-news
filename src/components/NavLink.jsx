import { Link } from "react-router-dom";
import startWithUpperCase from "../utils/formatNavLink";

export default function NavLink(props) {
	const { topic : {slug} } = props;
    const formattedTopic = startWithUpperCase(slug);
	return (
		<Link className="navBar" id={`${formattedTopic}Nav`} to={`/articles/${slug}`}>
			{`${formattedTopic}`}
		</Link>
	);
}
