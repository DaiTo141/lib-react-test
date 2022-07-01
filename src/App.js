import logo from './logo.svg';
import './App.css';
import { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const forceUpdate = useCallback(() => setCount(0), []);
  const handleClick = () => {
    let x = count + 1;
    setCount(x)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count}
        </p>
        <button onClick={handleClick}>Clicked</button>
        <button onClick={forceUpdate}>Reset</button>
      </header>
    </div>
  );
}

export default App;
