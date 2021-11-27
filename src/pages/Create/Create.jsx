// styles
import './Create.css'
// hooks
import { useRef, useState } from 'react'

export default function Create() {
    const [method,setMethod] = useState('');
    const [title,setTitle] = useState('');
    const [cookingTime,setCookingTime] = useState('');
    const [newIngredient,setNewIngredient] = useState('')
    const [ingredients,setIngredients] = useState([])
    const ingredientsInput = useRef()
    function handleSubmit(e){
        e.preventDefault();
        console.log(method, title, cookingTime, ingredients);
    }
    function handleAdd(e){
        e.preventDefault();
        const ing = newIngredient.trim().toLowerCase();
        if(ing && !ingredients.includes(ing)){
            setIngredients(prev => [...prev, ing])
            setNewIngredient('');
        }
        ingredientsInput.current.focus();
    }
    return (
        <div className="create">
            <h2 className="page-title">Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" required/>
                </label>
                <label>
                    <span>Recipe ingredients:</span>
                    <div className="ingredients">
                        <input ref={ingredientsInput} onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} type="text" />
                        <button onClick={(e) => handleAdd(e)} className="btn">add</button>
                    </div>
                </label>
                <p>Current ingredients:{ingredients.join()}</p>
                <label>
                    <span>Recipe method:</span>
                    <textarea onChange={(e) => setMethod(e.target.value)} value={method} type="text" required/>
                </label>
                <label>
                    <span>Cooking time (minutes)</span>
                    <input onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} type="number" required/>
                </label>
                <button className="btn">Submit</button>
            </form>
            
        </div>
    )
}
