import {useState, useEffect} from "react";
import { fetchCommentsByArticleId } from "../Api";
import CommentCard from './CommentCard'


export default function Comments(props) {
    const {article_id} = props;
    const [comments, setComments] = useState([]);
    

    useEffect(() => {
		fetchCommentsByArticleId(article_id).then((requestedComments) => {
			setComments(requestedComments)
		})
	}, [article_id])

    return (<ul>
        {comments.map((comment) => {

            return (
                <CommentCard comment = {comment} key = {comment.comment_id}/>
            )
        })}
    </ul>)
}