// styles
import './Recipe.css'
// hooks
import { useParams } from 'react-router'
import UseFetchGET from '../../hooks/UseFetchGET';
export default function Recipe() {
    // getting the changable id parameter
    const { id } = useParams();
    const { data : dataById, isDepending, error} = UseFetchGET(`http://localhost:3001/recipes/?id=${id}`)
    // make it usable
    const firstIndexOfDataById = dataById[0]
    return (
        <div className="recipe">
            {isDepending && <p className="loading">Loading ...</p>}
            {error && <p className="error">{error}</p>}
            {firstIndexOfDataById && (
                <>
                 <h2 className="page-title">{firstIndexOfDataById.title}</h2>  
                 <p>takes {firstIndexOfDataById.cookingTime} to cook.</p>
                 <ul>
                     {firstIndexOfDataById.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                 </ul>
                 <p className="method">{firstIndexOfDataById.method}</p>
                </>
            )}
        </div>
    )
}
