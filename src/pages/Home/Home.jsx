// hooks
import UseFetchGET from '../../hooks/UseFetchGET'
// styles
import './Home.css'
// components
import RecipeList from '../../Components/RecipeList/RecipeList';
export default function Home() {
    const {data, isDepending, error} = UseFetchGET('http://localhost:3001/recipes');
    return (
        <div className="home">
            {isDepending && <p className="loading">Loading ...</p>}
            {error && <p className="error">{error}</p>}
            {data && <RecipeList data={data}/>}
            
        </div>
    )
}

