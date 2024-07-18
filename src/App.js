import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initData = window.Telegram.WebApp.initDataUnsafe;
    setUser(initData.user);
    window.Telegram.WebApp.ready();
  }, []);
  return (
    <div className="App">
    <header className="App-header">
      <h1>Welcome to Telegram WebApp!</h1>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
        </div>
      )}
    </header>
  </div>
  );
}

export default App;
