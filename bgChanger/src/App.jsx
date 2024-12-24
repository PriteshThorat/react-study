import { useState } from 'react'
import './App.css'
import Button from './Button.jsx'

function App() {
  const [color, setColor] = useState("red");

  document.body.style.backgroundColor = color;

  return (
    <div className='div'>
      <Button onClick={() => setColor("red")} bgColor="red" color="white" name="Red"/>
      <Button onClick={() => setColor("green")} bgColor="green" color="white" name="Green"/>
      <Button onClick={() => setColor("blue")} bgColor="blue" color="white" name="Blue"/>
      <Button onClick={() => setColor("olive")} bgColor="olive" color="white" name="Olive"/>
      <Button onClick={() => setColor("gray")} bgColor="gray" color="white" name="Gray"/>
      <Button onClick={() => setColor("yellow")} bgColor="yellow" color="white" name="Yellow"/>
      <Button onClick={() => setColor("pink")} bgColor="pink" color="white" name="Pink"/>
      <Button onClick={() => setColor("purple")} bgColor="purple" color="white" name="Purple"/>
      <Button onClick={() => setColor("lavender")} bgColor="lavender" color="black" name="Lavender"/>
      <Button onClick={() => setColor("white")} bgColor="white" color="black" name="White"/>
      <Button onClick={() => setColor("black")} bgColor="black" color="white" name="Black"/>
    </div>

      /*<div className='div'>
        <button 
        className="buttons"
        onClick={() => {
          setColor("red");
        }}
        style={{backgroundColor: "red"}}>Red
        </button>
        <button 
        className="buttons"
        onClick={() => {
          setColor("green");
        }}
        style={{backgroundColor: "green"}}>Green
        </button>
        <button 
        className="buttons"
        onClick={() => {
          setColor("blue");
        }}
        style={{backgroundColor: "blue"}}>Blue
        </button>
        <button 
        className="buttons"
        onClick={() => {
          setColor("olive");
        }}
        style={{backgroundColor: "olive"}}>Olive
        </button>
        <button 
        className="buttons"
        onClick={() => {
          setColor("gray");
        }}
        style={{backgroundColor: "gray"}}>Gray
        </button>
        <button 
        className="buttons"
        onClick={() => {
          setColor("yellow");
        }}
        style={{backgroundColor: "yellow"}}>Yellow
        </button>
        <button 
        className="buttons"
        onClick={() => {
          setColor("pink");
        }}
        style={{backgroundColor: "pink"}}>Pink
        </button>
        <button 
        className="buttons"
        onClick={() => {
          setColor("purple");
        }}
        style={{backgroundColor: "purple"}}>Purple
        </button>
        <button 
        className="buttons"
        onClick={() => {
          setColor("lavender");
        }}
        style={{backgroundColor: "lavender", color: "black"}}>Lavender
        </button>
        <button 
        className="buttons"
        onClick={() => {
          setColor("white");
        }}
        style={{backgroundColor: "white", color: "black"}}>White
        </button>
        <button 
        className="buttons"
        onClick={() => {
          setColor("black");
        }}
        style={{backgroundColor: "black"}}>Black
        </button>
      </div>*/
  )
}

export default App