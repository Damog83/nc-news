import formatDate from "../utils/formatDate";

export default function CommentCard({comment}) {

    const {body,
           votes,
           author,
           created_at} = comment;

    return (
        <div className="comment_card">
            <p>{body}</p>
            <p>{votes}</p>
            <p>{author}</p>
            <p>{formatDate(created_at)}</p>
        </div>
    )      



}