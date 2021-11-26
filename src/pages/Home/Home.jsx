// hooks
import UseFetch from '../../hooks/UseFetch';
// styles
import './Home.css'

export default function Home() {
    const {data, isDepending, error} = UseFetch('http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');

    return (
        <div className="home">
            {isDepending && <p className="loading">Loading ...</p>}
            {error && <p className="error">{error}</p>}
            {data && data.map(res => (
                <h2 key={res.id}>{res.title}</h2>
            ))}
            
        </div>
    )
}
