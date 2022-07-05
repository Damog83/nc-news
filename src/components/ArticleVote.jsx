import { useState} from "react"
import {patchVotes} from "../Api"

export default function ArticleVote({votes, article_id}){

    const [count, setCount] = useState(0);
//     const [incrementButton, setIncrementButton] = useState(false);
//     const [decrementButton, setDecrementButton] = useState(false);
//     const [err, setErr] = useState(null);

//     const updateVotes = (vote) => {

//             setCurrentVotes(actualVotes => {
//                 return actualVotes + vote
//             });
// console.log(currentVotes,'llllllll')
//             if(vote === 1 && currentVotes === 0) {
//                 setIncrementButton(true)
//                 setDecrementButton(false)
//                 patchVotes({inc_votes: 1}, article_id).catch((err) => {
//                 setIncrementButton(false)
//                 setDecrementButton(true)
//                 setErr('Something went wrong, please try again.');
//                 })
//             }
    
//             if(vote === -1 && currentVotes === 0) {
//                 setIncrementButton(false)
//                 setDecrementButton(true)
//                 patchVotes({inc_votes: -1}, article_id).catch((err) => {
//                 setIncrementButton(true)
//                 setDecrementButton(false)
//                 setErr('Something went wrong, please try again.');
//                 })
//             }

//             if(vote === -1 && currentVotes === 1) {
//                 setIncrementButton(false)
//                 patchVotes({inc_votes: -1}, article_id).catch((err) => {
//                 setIncrementButton(true)
//                 setErr('Something went wrong, please try again.');
//                 })
//             }

//             if(vote === 1 && currentVotes === -1) {
//                 setDecrementButton(false)
//                 patchVotes({inc_votes: 1}, article_id).catch((err) => {
//                 setDecrementButton(true)
//                 setErr('Something went wrong, please try again.');
//                 })
//             }
//         }
        
//     if(err) return (<p>{err}</p>)

    return (
        <div>

    <button type = 'button' id = 'incrementButton' disabled = {false}>Vote +</button>
    <p>{votes}</p>
    <button type = 'button' id = 'decrementButton' disabled = {false}>Vote -</button>
        
        </div>
    )

}