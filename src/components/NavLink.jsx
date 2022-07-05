import { Link } from "react-router-dom";
import startWithUpperCase from "../utils/formatNavLink";

export default function NavLink(props) {
	console.log(props.topic.slug)
	const { topic : {slug} } = props;
    const formatedTopic = startWithUpperCase(slug);
	return (
		<Link className="navBar" id={`${formatedTopic}Nav`} to={`/articles/${slug}`}>
			{`${formatedTopic}`}
		</Link>
	);
}
