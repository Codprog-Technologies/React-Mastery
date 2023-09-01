import { useState } from "react";
import DisplayFullName from "./DisplayFullName";
import TestComponent from "./TestComponent";

// controlled components
// uncontrolled components
function UserForm() {
    console.log("userform componenet rendered");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const fullName = firstName + " " + lastName;

    return (
        <form>
            <h1>Form</h1>
            <div>
                <label htmlFor="firstname">firstname </label>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={undefined}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                />
            </div>
            <br />
            <div>
                <label htmlFor="lastname">lastname </label>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                />
            </div>
            <h2>user detail</h2>
            <div>
                <p>firstname: {firstName}</p>
                <p>lastname: {lastName}</p>
                <p>
                    fullname: <DisplayFullName fullName={fullName} />
                </p>
                {/* <TestComponent /> */}
            </div>
        </form>
    );
}

export default UserForm;
