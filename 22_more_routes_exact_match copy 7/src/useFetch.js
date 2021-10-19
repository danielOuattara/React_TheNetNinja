import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { // this function runs every render
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log("response =", res)
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
                    // console.log("Error = ", err.message);
                    setError(err.message);
                    setIsPending(false);
                });
        }, 2000)
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;