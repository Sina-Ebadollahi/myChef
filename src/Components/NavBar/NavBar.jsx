// Route
import { Link } from 'react-router-dom'
//style
import './NavBar.css'

export default function NavBar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/" className="brand">
                    <h1>myChef</h1>
                </Link>
                <Link to="/Create">Create Recipe</Link>
            </nav>

            
        </div>
    )
}
