import useLocalStorage from "./hooks/useLocalStorage";

function BasicForm() {
    const [firstname, setFirstName] = useLocalStorage("firstname", "");
    const [lastname, setLastname] = useLocalStorage("lastname", "");
    return (
        <form>
            <label htmlFor="firstname">Firstname</label>
            <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <h1>FirstName : {firstname}</h1>
            <label htmlFor="lastname">lastname</label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
            <h1>lastname : {lastname}</h1>
        </form>
    );
}

export default BasicForm;
