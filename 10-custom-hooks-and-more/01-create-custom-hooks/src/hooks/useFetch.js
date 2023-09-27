import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setIsPending(true);
        const controller = new AbortController();
        async function fetchData() {
            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) {
                    throw Error("Something Went Wrong");
                }
                const resData = await res.json();
                setData(resData);
                setError(null);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                }
            } finally {
                setIsPending(false);
            }
        }
        fetchData();
        return () => {
            controller.abort();
        };
    }, [url]);
    return { data, isPending, error };
}

export default useFetch;
