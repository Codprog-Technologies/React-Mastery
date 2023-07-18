import "./Greeting.css";
function Greeting() {
    const isDarkMode = true;
    return (
        <div className={`container ${isDarkMode ? "bg-dark" : ""}`}>
            <h1>Hello, Harshit</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                ut harum perspiciatis modi nulla adipisci?
            </p>
        </div>
    );
}

export default Greeting;
