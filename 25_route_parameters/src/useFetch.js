/* IMPORTANT: In react custom hook function must start 
              with the 'use in their name 
*/

//--------------------------------------------------  THEN/CATH

import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { // this function runs every render
        const abortController = new AbortController();

            fetch(url, { signal: abortController.signal})
            .then( res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data from that ressource")
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(false);
            })
            .catch(err => {
                console.log("Error = ", err);
                if(err.name === "AbortError") {
                    console.log("Aborting fetch request... component is unmounted")
                } else {
                    setError(err.message);
                    setIsPending(false);
                }

            });
        return () =>  {
            console.log("Aborting ...")
            abortController.abort();
        }

    }, [url]);

    return {data, isPending, error};
}

export default useFetch;


//--------------------------------------------------  ASYNC/AWAIT

// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect( () => { // this function runs every render
//         const abortController = new AbortController();
//         (async () => {
//             try {
//                 const res = await fetch(url, {signal: abortController.signal});
//                 if(!res.ok) throw Error("Could not fetch the data from that ressource")
//                 const data = await res.json();
//                 console.log(data);
//                 setData(data);
//                 setIsPending(false);
                
//             } catch (err) {
//                 if (err.name ==="AbortError")  {
//                     console.log("fetch aborted !")
//                 } else {
//                     setError(err.message);
//                 }   setIsPending(false);
//             }
//         })();

//         return () =>  {
//             console.log("Cleanup");
//             abortController.abort();
//         }
//     }, [url]);

//     return {data, isPending, error};
// }

// export default useFetch;