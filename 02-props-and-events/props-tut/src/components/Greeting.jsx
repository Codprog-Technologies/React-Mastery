function Greeting({ firstName, lastName, children }) {
    return (
        <>
            {children}
            <h3>
                {firstName} {lastName}
            </h3>
        </>
    );
}

export default Greeting;
