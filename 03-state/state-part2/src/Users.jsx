import React from "react";
import User from "./User";

function Users({ users, increaseAge, deleteUser }) {
    return (
        <div>
            {/* {users.map((users) => {
                return (
                    <div>
                        <p>firstName: {users.firstName}</p>
                    </div>
                );
            })} */}

            {users.map((user) => (
                <User
                    {...user}
                    key={user.id}
                    increaseAge={increaseAge}
                    deleteUser={deleteUser}
                />
            ))}
        </div>
    );
}

export default Users;
