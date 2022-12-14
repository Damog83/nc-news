import { useState } from "react";
import { deleteComment } from "../../services/Api";

export default function DeleteComment(props) {

    const [deleteButton, setDeleteButton] = useState(false);
    const {comment_id, rerenderAfterDelete} = props;

    const removeComment = () => {
        rerenderAfterDelete(comment_id);
        setDeleteButton(true);
        deleteComment(comment_id).catch((err) => {
        })
    }

    return (
        <>
            <button
            type="button"
            className="comment-delete-button"
            id="deleteComment"
            disabled={deleteButton}
            onClick={(() => {
                removeComment()
            })}>
                X
            </button>            
        </>
        )
}