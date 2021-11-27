// routing
import { Link } from 'react-router-dom'
// style
import './RecipeList.css'


export default function RecipeList({data : recipes}) {
    return (
        <div className="recipe-list">
            {recipes.map((item) => (
                <div key={item.id} className="card">
                    <h3>{item.title}</h3>
                    <p>{item.cookingTime} to make.</p>
                    <div>{item.method.substring(0,100)}</div>
                    <Link to={`/Recipes/${item.id}`}>Cook This</Link>
                </div>
            ))}
            
        </div>
    )
}
