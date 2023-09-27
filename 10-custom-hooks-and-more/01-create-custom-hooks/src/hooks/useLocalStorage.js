import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) || initialValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}

export default useLocalStorage;
