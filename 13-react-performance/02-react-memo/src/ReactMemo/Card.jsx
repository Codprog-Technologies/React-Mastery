import { memo } from "react";

// t1 -- > i should render  or not

// t2 --> to render something

// t2 < t1

function Card({ state1 }) {
    console.log("card rendered");
    return (
        <div
            style={{
                background: state1 ? "green" : "red",
                width: "300px",
                height: "100px",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "center",
                padding: "1rem",
            }}
        >
            Card based on state 1
        </div>
    );
}
export default memo(Card);
