const rootElement = document.getElementById("root");

// // type, props, children
// // function HelloWorld() {
// //     return React.createElement("h1", { className: "heading" }, "Hello World");
// // }

function HelloWorld() {
    return <h1 className="heading">Hello World</h1>;
}

// h1, h2, h3, h4, div, p , article, main

ReactDOM.createRoot(rootElement).render(<HelloWorld />);
