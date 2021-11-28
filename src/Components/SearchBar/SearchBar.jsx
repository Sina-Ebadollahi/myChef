// hooks
import { useState } from 'react';
import { useNavigate } from 'react-router';


// style
import './SearchBar.css'

export default function SearchBar() {
    // navigate hook
    const nav = useNavigate();
    const [searchText,setSearchText] = useState('')
    function handleSubmit(e){
        e.preventDefault();

        // navigating to search page with query parameters
        nav(`/search/?s=${searchText}`);
    }
    return (
        <div className="searchbar">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="search">search:</label>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" id="search" required />
            </form>
        </div>
    )
}
