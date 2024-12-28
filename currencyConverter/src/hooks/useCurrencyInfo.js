import { useEffect, useState } from 'react';

const currencyInfo = (currency) => {
    const [rate, setRate] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setRate(res[currency]))
        .catch(error => {
            console.log("Error: ", error)
        });
    }, [currency])
    return rate;
};

export default currencyInfo;