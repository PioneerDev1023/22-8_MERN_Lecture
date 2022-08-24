import React, { useState, useEffect, Fragment } from "react";
import PropTypes from 'prop-types';
import Header from '../../components/Header/header'
import { Col, Button } from 'react-bootstrap';
import '../../assets/css/spin.css';
import LoginLogo from '../../assets/images/logo.svg';
import Mailbox from '../../assets/images/mailbox.svg';
import Facebook from '../../assets/images/facebook.svg';
import Google from '../../assets/images/google.svg';

import { Container } from "react-bootstrap";


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
            <Header />
            <div className="login-content">
                <Col lg={6} md={6} sm={12} className="login-panel">
                    <form onSubmit={handleFormSubmit}>
                        <h1>Log in to Ybalah Guide!</h1>
                        <p>No account yet?<span className="subtitle ps-2">Create an account</span></p>
                        <div className="d-flex py-2">
                            <Col className="form-group pe-1">
                                <input className="form-control p-3" type="text" onChange={handleUsernameChange} placeholder="Email" autoComplete="false" />
                            </Col>
                            <Col className="form-group ps-1">
                                <input className="form-control p-3" type="password" onChange={handlePassword} placeholder="Password" autoComplete="false" />
                            </Col>
                        </div>
                        {/* <div className="form-group py-2">
                            <Button className="form-control p-3">Login with Email<img className="ps-2" src={Mailbox} /></Button>
                        </div> */}
                        <div className="form-group py-2">
                            <Button className="form-control p-3">
                                {showtext && <div className="loginbtn">Login with Email<img className="ps-2" src={Mailbox} /></div>}
                                {showspinner && <div className="loginspinner"></div>}
                            </Button>
                        </div>
                        <p>or Login with</p>
                        <div className="site-link d-flex justify-content-center">
                            <div className="account-link me-2">
                                <img src={Google} />
                            </div>
                            <div className="account-link ms-2">
                                <img src={Facebook} />
                            </div>
                        </div>
                        <p className="privacy">By signing in or creating an account, you agree with our Terms & Conditions and Privacy Statement</p>
                    </form>
                </Col>
                <Col lg={6} md={6} sm={12} className="login-side">
                    <div>
                        <img src={LoginLogo} />
                    </div>
                    
                </Col>
            </div>
            
        </div>
    );
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
}