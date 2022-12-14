import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import DeleteComment from "./DeleteComment";
import formatDate from "../../utils/formatDate";

export default function CommentCard(props) {

    const {user} = useContext(UserContext);
    const {comment, rerenderAfterDelete} = props;

    const {body,
           votes,
           author,
           created_at,
           comment_id} = comment;

    return (
        <div className="comment-card">
            <p className="comment-card-body">{body}</p>
            <div className="comment-card-details">
            <p>{author}</p>
            <p>{formatDate(created_at)}</p>
            <p>{votes}</p>
            {user && user.username === author && <DeleteComment rerenderAfterDelete={rerenderAfterDelete} comment_id={comment_id}/>}
            </div>
        </div>
    )      
}