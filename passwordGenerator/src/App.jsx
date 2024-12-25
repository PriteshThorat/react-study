import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, allowNo] = useState(false);
  const [char, allowChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator  = useCallback(() => {
    let password = "";
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numberSet = "0123456789";
    let specialCharSet = "!@#$%^&*()";

    if(number) {
      charSet += numberSet;
    }

    if(char){
      charSet += specialCharSet;
    }

    for (let i = 0; i < length; i++) {
      let randomChar = Math.floor(Math.random() * charSet.length);
      password += charSet.charAt(randomChar);
    }

    setPassword(password);
  }, [length, number, char, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowNo, allowChar, passwordGenerator]);

  const copiedValue = useRef(null);

  const copyPassword = useCallback(() => {
    copiedValue.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className='password-container'>
        <input className="password" 
        type="text"
        value={password}
        ref={copiedValue}
        readOnly/>
        <button className='copy-btn'
        onClick={() => copyPassword()}>Copy</button>
      </div>
      <div className='condition-div'>
        <input 
        type='range'
        min={1}
        max={100}
        onChange={(e) => {setLength(e.target.value)}}/>
        <label>Length ({length})</label>
        <input 
        type='checkbox'
        onChange={() => {
          allowNo(prev => !prev)
        }}/>
        <label>Numbers</label>
        <input 
        type="checkbox"
        onChange={() => {
          allowChar((prev) => !prev)
        }}/>
        <label>Characters</label>
      </div>
    </div>
  )
}

export default App
