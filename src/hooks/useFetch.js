import { useEffect, useState } from "react";
export default function useFetch(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {(
            async function(){
                try{
                    setLoading(true);
                    const res = await fetch(
                        url
                    );
                    const fetchedData = await res.json()
                    setData(fetchedData);
                }catch(err){
                    setError(err);
                    console.log('Fetch Data Error, something went wrong');
                }finally{
                    setLoading(false);
                }
            }
        )()
    }, [url]);
    return { data, error, loading }
}