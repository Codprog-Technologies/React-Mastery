import { useState } from "react";
function HandleMultipleInputs() {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const handleChange = (e) => {
        setFormData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };
    const {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
        phone,
        address,
    } = formData;
    return (
        <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
            <div className="formGroup">
                <label htmlFor="firstName">firstName</label> <br />
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={handleChange}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="lastName">lastName</label> <br />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="username">username</label> <br />
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={handleChange}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="email">email</label> <br />
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="password">password</label> <br />
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="confirmPassword">confirmPassword</label> <br />
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="phone">phone</label> <br />
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={handleChange}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="address">address</label> <br />
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value="Signup" style={{ marginTop: "1rem" }} />
        </form>
    );
}

export default HandleMultipleInputs;
