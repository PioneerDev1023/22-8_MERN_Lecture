import './assets/css/main.css';
import LoginPage from './screens/authentication/LoginPage';
import Loading from './components/loading';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div>
        <Loading spinnerShow={loading} message={message}/>
        <LoginPage setLoading={setLoading} setMessage={setMessage}/>
    </div>
  );
}

export default App;