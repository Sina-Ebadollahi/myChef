// Route
import { Link } from 'react-router-dom'
//style
import './NavBar.css'
// components
import SearchBar from '../SearchBar/SearchBar'
export default function NavBar() {
    return (
        <div className="navbar">
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
