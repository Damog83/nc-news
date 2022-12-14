import { Link } from "react-router-dom";
import formatText from "../utils/formatText";

export default function NavLink(props) {
	const { topic : {slug} } = props;
    const formattedTopic = formatText(slug);
	return (
		<Link  className={"navLink"} to={`/articles/${slug}`}>
			{`${formattedTopic}`}
		</Link>
	);
}
