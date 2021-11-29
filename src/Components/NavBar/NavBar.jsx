// Route
import { Link } from 'react-router-dom'
//style
import './NavBar.css'
// components
import SearchBar from '../SearchBar/SearchBar'
// hooks
import UseTheme from '../../hooks/UseTheme'
export default function NavBar() {
    const { color } = UseTheme();
    return (
        <div  className="navbar" style={{backgroundColor : color}}>
            <nav>
                <Link to="/" className="brand">
                    <h1>myChef</h1>
                </Link>
                <SearchBar />
                <Link to="/Create">Create Recipe</Link>
            </nav>
        </div>
    )
}
