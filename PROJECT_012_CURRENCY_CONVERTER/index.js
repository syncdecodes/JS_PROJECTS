console.log("Currency Converter")

const btn = document.querySelector(".btn")
const dropd = document.querySelectorAll(".dropdown")
const amountInput = document.querySelector(".amount")
const resultDiv = document.querySelector(".Ex-Rate")

const url = 'https://open.er-api.com/v6/latest/USD'

async function FillDropdown() {
    let response = await fetch(url)
    let data = await response.json()

    console.log('Data -: ', data)

    let currCode = Object.keys(data.rates)

    // Filling Dropdowns
    for (let i = 0; i < currCode.length; i++) {

        dropd.forEach(drop => {
            let option = document.createElement("option")
            option.textContent = currCode[i]
            drop.append(option)

        })
    }

}
FillDropdown()

btn.addEventListener("click", async () => {
    let fromCurr = dropd[0].value
    let toCurr = dropd[1].value
    let amount = parseFloat(amountInput.value)

    if (isNaN(amount)) {
        resultDiv.textContent = "Please enter a valid amount!"
        return
    }

    let response = await fetch(url)
    let data = await response.json()

    let fromRate = data.rates[fromCurr]
    let toRate = data.rates[toCurr]

    let converted = (amount / fromRate) * toRate

    resultDiv.textContent = `${amount} ${fromCurr} = ${converted.toFixed(2)} ${toCurr}`
})

// Formula for currency conversion: ((amount / fromRate) * toRate) - Note base is USD 



/*

Extra.js 

console.log("Currency Converter")
const url = 'https://open.er-api.com/v6/latest/USD'

async function getExRate() {
    let response = await fetch(url)
    let data = await response.json()
    console.log('Data -: ' ,data)
    console.log('Data keys -: ', Object.keys(data))
    console.log("Data values -: " ,Object.values(data))
    console.log(data.rates)
}
getExRate()


// ----------------------------------------------


const dropd = document.querySelectorAll(".dropdown")
console.log(dropd)


for (let i = 0; i < 10; i++) {
    Array.from(dropd).forEach(drop => {
        let option = document.createElement("option")
        option.textContent = i
        drop.append(option)
    })
}

*/