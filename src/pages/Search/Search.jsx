// hooks
import { useLocation } from 'react-router'
import UseFetchGET from '../../hooks/UseFetchGET'
// styles
import './Search.css'
// components 
import RecipeList from '../../Components/RecipeList/RecipeList';


export default function Search() {
    // search bar param
    const loc = useLocation().search;
    // getting the query parameter
    const urlParam = new URLSearchParams(loc);
    // putting parameter in a var
    const s = urlParam.get('s');
    // searching the db via specific param
    const {data, isDepending, error} = UseFetchGET(`http://localhost:3001/recipes/?q=${s}`)
    
    return (
        <div className="home">
            <h2 className="page-title">Recipe that includes "{s}"</h2>
            {isDepending && <p className="loading">Loading ...</p>}
            {error && <p className="error">{error}</p>}
            {data && <RecipeList data={data}/>}
            
        
    )
        </div>
    )
}
