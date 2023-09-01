import { useEffect, useState } from "react";
import User from "./User";
const URL = "https://jsonplaceholder.typicode.com/users";

// strict mode

// on component mount

// effect  run
// cleanup function
// effect run

function FetchDataExample() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        // console.log("useEffect callback invoked");
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchData = async () => {
            const response = await fetch(URL, { signal: signal });
            if (!(response.status >= 200 && response.status <= 299)) {
                setIsError(true);
                setErrorMsg(`${response.status} Error`);
                setIsLoading(false);
                return;
            }
            const data = await response.json();
            console.log(data);
            setUsers(data);
            setIsLoading(false);
        };
        fetchData();
        return () => {
            console.log("aborting request ....");
            controller.abort();
        };
    }, []);

    if (isLoading) {
        return <h1>Loading ....</h1>;
    }
    if (isError) {
        return <h1>{errorMsg}</h1>;
    }
    return (
        <div>
            {users.map((user) => (
                <User key={user.id} {...user} />
            ))}
        </div>
    );
}

export default FetchDataExample;
