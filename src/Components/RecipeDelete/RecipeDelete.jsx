
// hooks
import { useNavigate } from 'react-router'
// style
import './RecipeDelete.css'
// svg
import deleteIcon from '../../assets/deleteIcon.svg'
// firebase
import { projectFirestore } from '../../firebase/config'

export default function RecipeDelete({id}) {
    // navigation
    const nav = useNavigate();
    function handleClick(){
        projectFirestore.collection('recipes').doc(id).delete()
            .then((res) => {
                nav('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
         <img className="delete" style={{cursor: 'pointer'}} onClick={handleClick} src={deleteIcon} alt="delete" title="delete" />   
        </>
    )
}
