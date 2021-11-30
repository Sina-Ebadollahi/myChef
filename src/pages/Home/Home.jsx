// hooks
import { useState, useEffect } from 'react'
// styles
import './Home.css'
// components
import RecipeList from '../../Components/RecipeList/RecipeList';
// firebase
import { projectFirestore } from '../../firebase/config';
export default function Home() {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [isDepending,setIsDepending] = useState(false)

    useEffect(() => {
        setIsDepending(true)
        const unsub = projectFirestore.collection('recipes').onSnapshot(((snapshot) => {
                let results = [];
                snapshot.docs.forEach((doc) => {
                    results.push({id : doc.id, ...doc.data()})
                })
                setData(results)
                setIsDepending(false)
            }), (err) => {
                setError(err.message);
                setIsDepending(false)
            })
            return () => {
                unsub();
            }
    },[])
    return (
        <div className="home">
            {isDepending && <p className="loading">Loading ...</p>}
            {error && <p className="error">{error}</p>}
            {data && <RecipeList data={data}/>}
            
        </div>
    )
}

