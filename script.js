const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector("currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //outras moedas

    const dollarToday = 5.2

    const convertedValue = inputCurrencyValue / dollarToday

    currencyValueToConvert.innerHTML = inputCurrencyValue
    console.log(convertedValue)

}

convertButton.addEventListener("click", convertValues)