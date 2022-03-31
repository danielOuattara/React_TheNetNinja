/* IMPORTANT: In react custom hook function must start 
              with the 'use in their name 
*/

//--------------------------------------------------  THEN/CATH

// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => { // this function runs every render
//         setTimeout(() => {
//             fetch(url)
//                 .then(res => {
//                     if (!res.ok) {
//                         throw Error("Could not fetch the data from that ressource")
//                     }
//                     return res.json();
//                 })
//                 .then(data => {
//                     setData(data);
//                     setIsPending(false);
//                     setError(false);
//                 })
//                 .catch(err => {
//                     setError(err.message);
//                     setIsPending(false);
//                 });
//         }, 2000)
//     }, [url]);

//     return {data, isPending, error};
// }

// export default useFetch;


//--------------------------------------------------  ASYNC/AWAIT

import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => { // this function runs every render
        (async () => {
            try {
                const res = await fetch(url);
                if(!res.ok) throw Error("Could not fetch the data from that ressource")
                const data = await res.json();
                console.log(data)
                setData(data);
                setIsPending(false);
                
            } catch (err) {
                setError(err.message);
                setIsPending(false);
            }
        })()
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;