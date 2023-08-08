import { useState } from "react";

function StateExampleObject() {
    const [person, setPerson] = useState({
        id: 1,
        firstName: "Harshit",
        lastName: "Vashistha",
        email: "harshitvashisth@gmail.com",
        phone: "9090909090",
        age: 24,
    });
    const increaseAge = () => {
        // setPerson({
        //     ...person,
        //     age: person.age + 1,
        // });
        setPerson((prevState) => {
            return {
                ...prevState,
                age: prevState.age + 1,
            };
        });

        // setPerson((prevState) => ({ ...prevState, age: prevState.age + 1 }));
    };
    return (
        <div>
            <p>firstName: {person.firstName}</p>
            <p>lastName: {person.lastName}</p>
            <p>email: {person.email}</p>
            <p>phone: {person.phone}</p>
            <p>age: {person.age}</p>
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    );
}

export default StateExampleObject;
