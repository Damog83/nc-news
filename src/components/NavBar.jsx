import {Link} from 'react-router-dom'

export default function NavBar(){
    return (<nav>
    <Link to = '/'>Home</Link>
    <Link to = '/articles/coding'>Coding</Link>
    <Link to = '/articles/cooking'>Cooking</Link>
    <Link to = '/articles/football'>Football</Link>    
    </nav>)
}
    // <button type='button' onClick={() => {<link to = '/'>Home</link>}}>Home</button>
    // <button type='button' onClick = {() => { <link to = '/topics?coding'>Coding</link>}}>Coding</button>
    // <button type='button' onClick = {() => {<link to = '/topics?cooking'>Cooking</link>}}>Cooking</button>
    // <button type='button' onClick = {() => {<link to = '/topics?football'>Footbal</link>}}>Football</button>