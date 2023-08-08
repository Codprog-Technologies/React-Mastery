import User from "./components/User";
import { v4 as uuid } from "uuid";
import "./App.css";
const users = [
    { id: 1, firstName: "Harshit", lastName: "Vashistha" },
    { id: 2, firstName: "John", lastName: "Doe" },
    { id: 3, firstName: "Jane", lastName: "Doe" },
];

const newArray = [];
for (let user of users) {
    newArray.push({ ...user, id: uuid() });
}
// map method

console.log("new uuid", uuid());

// jsx : {}
function App() {
    return (
        <div className="App">
            {/* {users.map((user) => {
                return (
                    <User firstName={user.firstName} lastName={user.lastName} />
                );
            })} */}

            {/* {users.map((user) => (
                <User firstName={user.firstName} lastName={user.lastName} />
            ))} */}

            {/* {users.map((user) => (
                <User {...user} key={user.id} />
            ))} */}

            {/* {users.map((user, index) => (
                <User {...user} key={index} />
            ))} */}

            {newArray.map((user) => (
                <User {...user} key={user.id} />
            ))}
        </div>
    );
}

export default App;
