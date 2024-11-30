let formElement = document.querySelector(".js-form");
let currencyFrom = document.querySelector(".js-currencyFrom");
let currencyTo = document.querySelector(".js-currencyTo");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

resultElement.innerText = (0.0).toFixed(2);

let PLNrate = 1;
let USDrate = 0.25;
let GBPrate = 0.19;
let EURrate = 0.23;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyFrom.value;
    let amount = parseFloat(amountElement.value);
    let rateFrom;

    switch (currency){
        case "PLN":
            rateFrom = PLNrate;
            break;

        case "USD":
            rateFrom = USDrate;
            break;
        
        case "GBP":
            rateFrom = GBPrate;
            break;

        case "EUR":
            rateFrom = EURrate;
            break;
        }

        let finalCurrency = currencyTo.value;
        let rateTo;
    
        switch (currencyTo.value) {
            case "PLN":
                rateTo = PLNrate;
                break;
            case "USD":
                rateTo = USDrate;
                break;
            case "GBP":
                rateTo = GBPrate;
                break;
            case "EUR":
                rateTo = EURrate;
                break;
        }

        if (isNaN(amount) || amount <= 0) {
            resultElement.innerText = "Proszę wprowadzić prawidłową kwotę.";
            return;
        }
         
        let result = (amount / rateFrom) * rateTo;
        resultElement.innerText = result.toFixed(2);
});
    
