import React, { useState, useEffect } from "react";

export default function LoginPage(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.setLoading(true);
        props.setMessage("Login.");
        setTimeout(() => {
            props.setLoading(false);
        }, 3000);
    };

    return (
        <div>
            <div className="login-panel">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input onChange={handleUsernameChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div className="form-group">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}