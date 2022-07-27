export default function addComment() {
    
    return (
        <>
        <textarea key = "addCommentTextArea" className="textArea" placeholder="Add a comment..."></textarea>
        </>
    )
}

//get the value of the text box as comment.  create a submit button.  bundle the comment and username into an object, send along with the article_id
