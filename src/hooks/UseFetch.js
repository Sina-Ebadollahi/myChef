// hooks
import { useState, useEffect } from "react";


const UseFetch = ({url}) => {
    // main data
    const [data,setData] = useState([]);
    // loading text
    const [isDepending,setIsDepending] = useState(false);
    // error text
    const [error,setError] = useState(null);

    useEffect(() => {


        // handling Abort action while refresh
        const controller = new AbortController();
        // eslint-disable-next-line no-unused-vars
        (async function(){
            setIsDepending(true);
            try{
                const res = await fetch(url, {signal: controller.signal, headers: {'Content-type': 'application/json','Accept': 'application/json'}});
                console.log("im fetching");
                // if the connection was disconnected
                if(!res.ok){
                    throw new Error(res.statusText);
                }
                const jsonData = await res.text();
                console.log(jsonData);
                setIsDepending(false);
                setData(jsonData);
                setError(null);
            }catch(e){
                setIsDepending(false);
                setError('Could not fetch the data!')
            }
            // aborting the request while refreshing page by user
            return () => {
                controller.abort();
            }
        })();
        


    },[url])
    return {data, isDepending, error};
}
export default UseFetch;