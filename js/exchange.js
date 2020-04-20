import keys from './keys.js';

// const url = `http://data.fixer.io/api/latest?access_key=${keys.accessKey}&symbols=${keys.currencies}`

const renderExchange = (data) => {
    const usdContainer = document.querySelector('.exchange-USD');
    const eurContainer = document.querySelector('.exchange-EUR');

    eurContainer.innerHTML = `<span>&#8364;: </span>${data.rates.RUB.toFixed(2)}`;
    usdContainer.innerHTML = `<span>&#36;: </span>${(data.rates.RUB /data.rates.USD).toFixed(2)}`;
};

document.addEventListener('DOMContentLoaded', async function getExchange(){
    try {
        const response = await fetch(url);
        if (response.status !== 200){
            console.error(response.status + ': ' + response.statusText);
            setTimeout(()=>getExchange(),5000);
        } else {
           await response.json().then(data => data.success == true ? renderExchange(data) : Promise.reject(data.error.info));
           
        }
    } catch (error) {
        console.error('error', error);
        setTimeout(()=>getExchange(),5000);
    }
});