// prop drilling

// ------------ context wrapper value = {myfunc}--------------

// component
//    |
//   child
//    |
//   grand child
// ------------ context wrapper end --------------
// context

// to avoid prop drilling we use context

// how to use context ?
// step 1 : import createContext from React
// step 2 : create a context outside the component
// step 3 : wrap application in context.Provider

// provider
// consume

import MyComponent from "./MyComponent";

function App() {
    return (
        <div
            style={{
                padding: "2rem",
                backgroundColor: "#C8E4B2",
                height: "100vh",
            }}
        >
            <h1>App</h1>
            <MyComponent />
        </div>
    );
}

export default App;
