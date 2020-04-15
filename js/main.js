import keys from './keys.js'

const url = `http://data.fixer.io/api/latest?access_key=${keys.accessKey}&symbols=${keys.currencies}`

const renderExchange = (data) => {
    const usdContainer = document.querySelector('.exchange-USD');
    const eurContainer = document.querySelector('.exchange-EUR');

    eurContainer.innerHTML = `<span>&#8364;: </span>${data.rates.RUB.toFixed(2)}`
    usdContainer.innerHTML = `<span>&#36;: </span>${(data.rates.RUB / data.rates.USD).toFixed(2)}`
}

document.addEventListener(`DOMContentLoaded`, async function getExchange(){
    try {
        const respons = await fetch(url);
        if (respons.status !== 200){
            console.error(respons.status + ': ' + respons.statusText);
            setTimeout(()=> getExchange(), 500);
        }
        else {
            await respons.json().then(data => data.success == true ? renderExchange(data): Promise.reject(data.error.info));
        }
    } 
    catch (error) {
        console.error('error', error);
        setTimeout(()=> getExchange(), 500);
    }
})