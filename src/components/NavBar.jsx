import {Link} from 'react-router-dom'

export default function NavBar(){
    return (<nav >
    <Link className = 'navBar' id = 'homeNav' to = '/'>Home</Link>
    <Link className = 'navBar' id = 'codingNav' to = '/articles/coding'>Coding</Link>
    <Link className = 'navBar' id = 'cookingNav' to = '/articles/cooking'>Cooking</Link>
    <Link className = 'navBar' id = 'footballNav' to = '/articles/football'>Football</Link>    
    </nav>)
}
