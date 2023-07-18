const rootElement = document.getElementById("root");

// console.log("Hello world");

//
// 1. type of element h1, h2, div, form, select, main
// 2. properties / props / configurations , null, {}
// 3. children

// const h1Element = React.createElement(
//     "h1",
//     { className: "heading" },
//     "React App"
// ); // this will create elements

// shortcut
// jsx : javascript xml

// const mainHeading = <h1 className="heading">React App</h1>;

// component (functional component)

// first letter should always be capital

function MainHeading() {
    return (
        <div className="heading">
            <h1>React App 1</h1>
            <p>this is para</p>
        </div>
    );
}

// ReactDOM.createRoot(rootElement).render(mainHeading());
ReactDOM.createRoot(rootElement).render(<MainHeading />);

// jsx
// react.createElement
