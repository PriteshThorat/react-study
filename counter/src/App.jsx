import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const addValue = () => {
    if(count == 20){
      alert("Count is 20");
    }else{
      setCount(count + 1);
    }
  };

  const removeValue = () => {
    if(count == 0){
      alert("Count is 0");
    }else{
      setCount(count - 1);
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <button onClick={addValue}>Add: {count}</button>
      <button onClick={removeValue}>Remove: {count}</button>
    </>
  )
}

export default App
