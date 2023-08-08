import Greeting from "./Greeting";
function App() {
    function handleClick(e) {
        console.log("hello world");
    }

    function handleClick2(firstName, lastName) {
        console.log(firstName, lastName);
    }
    return (
        <div className="App">
            <h1>App</h1>

            <button onClick={handleClick}>Click Me</button>
            <br />
            <br />
            <button
                onClick={(e) => {
                    e.target.textContent = "You clicked me";
                    handleClick2("Harshit", "vashisth");
                }}
            >
                Click Me 2
            </button>

            <Greeting handleClick={handleClick} />
        </div>
    );
}

export default App;
