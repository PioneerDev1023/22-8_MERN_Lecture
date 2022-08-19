import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import '../../assets/css/spin.css';

async function loginUser(credentials) {
    return (await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),
        mode: "cors"
    })
    .then(async (res)=>{
        let data = await res.json();
        alert(data.data);
        return data.data;
    }));
}

export default function LoginPage({ props, setToken }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showspinner, setShowSpinner] = useState(false);
    const [showtext, setShowText] = useState(true);

    const handleUsernameChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = async e => {
        e.preventDefault();

        setShowSpinner(true);
        setShowText(false);

        setTimeout(() => {
            setShowSpinner(false);
            setShowText(true);
            const data = loginUser({
                email: email,
                password: password
            });
            console.log(data);
            setToken(data);
        }, 1000);

        // const res = await loginUser({
        //     username,
        //     password
        // });
        // console.log("=============", res);
        // setToken(res);
    };

    return (
        <div className="login-section">
            <div className="login-panel">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" type="text" onChange={handleUsernameChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" onChange={handlePassword} />
                    </div>
                    <div className="form-group">
                        <button>
                            {showtext && <div className="loginbtn">Login</div>}
                            {showspinner && <div className="loginspinner"></div>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
}