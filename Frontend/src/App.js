import './assets/css/style.css';
// import './assets/css/spin.css';
import LoginPage from './screens/authentication/LoginPage';
import { useState } from 'react';
import { Router as BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';

function App() {
    const [token, setToken] = useState(null);
    return (
        <div className="wrapper">
            { !token && <LoginPage setToken={setToken} /> }
            <Dashboard />
            {/* <BrowserRouter>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/preferences' element={<Preferences />} />
                </Routes>
            </BrowserRouter> */}
        </div>
    );
}

export default App;