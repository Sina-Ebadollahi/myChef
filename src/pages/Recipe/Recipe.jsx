// styles
import './Recipe.css'
// hooks
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import UseTheme from '../../hooks/UseTheme';
// firebase
import { projectFirestore } from '../../firebase/config';
export default function Recipe() {
    // states 
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [isDepending,setIsDepending] = useState(false)
    // theme hook
    const { theme } = UseTheme()
    // getting the changable id parameter
    const { id } = useParams();
    // fetching with useEffect hook
    useEffect(() => {
        setIsDepending(true)
        const onSub = projectFirestore.collection('recipes').doc(id).onSnapshot(((doc) => {
                if(doc.exists){
                    setIsDepending(false)
                    setData(doc.data())
                }else{
                    setIsDepending(false)
                    setError('Could not fetch the data!')
                }
            }),(err) => {
                setIsDepending(false)
                setError(err.message)
            })
            
            return () => onSub();
    },[id])

    return (
        <div className={`recipe ${theme}`}>
            {isDepending && <p className="loading">Loading ...</p>}
            {error && <p className="error">{error}</p>}
            {data && (
                <>
                 <h2 className="page-title">{data.title}</h2>  
                 <p>takes {data.cookingTime} to cook.</p>
                 <ul>
                     {data.ingredients.map(ing => (<li key={ing}>{ing}</li>))}
                 </ul>
                 <p className="method">{data.method}</p>
                </>
            )}
        </div>
    )
}
