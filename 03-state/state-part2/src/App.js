import { useState } from "react";
import "./App.css";
import Users from "./Users";

function App() {
    const [users, setUsers] = useState([
        { id: 1, firstName: "Harshit", lastName: "Vashisth", age: 24 },
        { id: 2, firstName: "John", lastName: "Doe", age: 25 },
        { id: 3, firstName: "Jane", lastName: "Doe", age: 26 },
    ]);

    function increaseAge(id) {
        // console.log(id);
        // console.log("Increase age called");

        // const newState = [];
        // for (let user of users) {
        //     if (user.id === id) {
        //         newState.push({ ...user, age: user.age + 1 });
        //     } else {
        //         newState.push(user);
        //     }
        // }
        // setUsers(newState);

        // react developer way

        // arrow functions
        // map, filter, reduce , find
        setUsers((prevState) => {
            return prevState.map((user) => {
                if (user.id === id) {
                    return { ...user, age: user.age + 1 };
                } else {
                    return user;
                }
            });
        });
    }

    const deleteUser = (id) => {
        // const newState = [];
        // for (let user of users) {
        //     if (user.id !== id) {
        //         newState.push(user);
        //     }
        // }
        // setUsers(newState);
        // setUsers((prevState) => {
        //     return prevState.filter((user) => {
        //         return user.id !== id;
        //     });
        // });

        setUsers((prevState) => prevState.filter((user) => user.id !== id));
    };
    return (
        <div className="App">
            <h1>State Example</h1>
            <Users
                users={users}
                increaseAge={increaseAge}
                deleteUser={deleteUser}
            />
        </div>
    );
}

export default App;
