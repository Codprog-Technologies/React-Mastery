// custom hooks

// useState
// useEffect
// useRef
// useReducer
// useContext
import useFetch from "./hooks/useFetch";

function Users() {
    const { data, isPending, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users/"
    );

    if (isPending) {
        return <h2>Loading ....</h2>;
    }
    if (error) {
        return <h2>{error}</h2>;
    }
    return (
        <>
            {data &&
                data.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>{user.name}</h2>
                        </div>
                    );
                })}
        </>
    );
}

export default Users;
