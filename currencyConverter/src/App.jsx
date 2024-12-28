import { useState, useEffect } from 'react'
import './App.css'
import InputField from './components/InputField';
import currencyInfo from './hooks/useCurrencyInfo';
import currencyTypes from './hooks/getCurrency';

function App() {
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedValue, setConvertedValue] = useState(0);

  const currencyData = currencyInfo(from);
  
  const currencyType = currencyTypes();

  const swap = () => {
    setFrom(to);
    setTo(from);
    setValue(convertedValue);
    setConvertedValue(value)
  }

  const conversion = () => {
    const convertedValue = (value * currencyData[to]);
    setConvertedValue(convertedValue);
  };

  return (
    <div className='container'>
      <div className='inner-container'>
        <div className='from-input'>
          <InputField 
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)} 
          onAmountChange={(value) => setValue(value)} 
          fromOrTo="From" 
          value={value} 
          option={Object.keys(currencyData)}
          isDisabled={false} />
        </div>
        <div className='swap-div'>
          <button className='swap-btn'
          onClick={() => {
            swap();
          }}>swap</button>
        </div>
        <div className='to-input'>
          <InputField 
          selectCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)} 
          onAmountChange={(value) => setValue(value)} 
          fromOrTo="To" 
          value={convertedValue} 
          option={Object.keys(currencyData)}
          isDisabled={true} />
        </div>
        <button 
        className='btn'
        onClick={() => {
          conversion();
        }}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
    </div>
  )
}

export default App;