import './InputField.css';

const InputField = ({selectCurrency, onCurrencyChange, onAmountChange, fromOrTo, value, option, isDisabled}) => {
    return (
        <div className='input-field'>
            <div className='amount-div'>
                <label className='amount-label'>{fromOrTo}</label>
                <input 
                className='input'
                type="number"
                value={value}
                onChange={(e) => onAmountChange && onAmountChange(e.target.value === '' ? '' : Number(e.target.value))}
                disabled={isDisabled}/>
            </div>
            <div className='currency-div'>
                <label className='currency-label'>Currency Type</label>
                <select
                className='select'
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                value={selectCurrency}>
                    {
                        option.map((el) => {
                            return (
                                <option value={el} key={el}>{el.toUpperCase()}</option>
                            );
                        })
                    }
                </select>
            </div>
        </div>
    );
};

export default InputField;