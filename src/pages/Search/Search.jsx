// hooks
import { useState } from 'react';
import { useLocation } from 'react-router'

// styles
import './Search.css'


export default function Search() {
    const [parameter, setParameter] = useState(null)
    // search bar param
    const loc = useLocation().search;
    // getting the query parameter
    const urlParam = new URLSearchParams(loc);
    // putting parameter in a var
    setParameter(urlParam.get('s'))

    return (
        <div>
            
        </div>
    )
}
