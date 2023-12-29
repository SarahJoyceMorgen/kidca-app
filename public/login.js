import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  //API Aufruf und MongoDB Logik
  };

  return (
    <div>
      <h1>Anmeldeseite</h1>
      <form>
        <label>
          Benutzername:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Passwort:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
          Anmelden
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

export default LoginPage;