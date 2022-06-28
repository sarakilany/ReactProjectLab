import Count from './components/Count.js';
import './App.css';
import CounterBtn from './components/CounterBtn.js';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Count count={count} />
      <CounterBtn text='-' variant='danger' count={count} setCount={setCount} />
      <CounterBtn text='+' variant='success' count={count} setCount={setCount} />

    </div>
  );
}

export default App;
