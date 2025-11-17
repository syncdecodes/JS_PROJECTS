console.log("Expense Tracker")
const input = document.querySelector(".Title")
const amount = document.querySelector(".amount")

const add_btn = document.querySelector(".btn")
add_btn.style.backgroundColor = "rgba(66, 255, 66, 1)"

const balance = document.querySelector(".balance")
const income = document.querySelector(".income")
const expense = document.querySelector(".expenses")

const clear_btn = document.querySelector(".clear")
clear_btn.style.backgroundColor = "rgba(255, 26, 26, 1)"

let bal = 0
let earning = 0
let cost = 0

let Transactions = parseInt(localStorage.getItem("Total_Transactions")) || 0;

function inflow(amt, Title) {
    bal += amt
    earning += amt
    balance.textContent = `Balance: ${bal}`
    income.textContent = `Income: ${earning}`

    history(Title, "Income", amt)
}

function outflow(amt, Title) {
    bal -= amt
    cost += amt
    balance.textContent = `Balance: ${bal}`
    expense.textContent = `Expense: ${cost}`

    history(Title, "Expense", amt)
}

function history(Title, type, amt) {
    let current_date = new Date()
    let history_div = document.createElement("div")

    let Title_div = document.createElement("div")
    let Trans_Type_div = document.createElement("div")
    let Date_div = document.createElement("div")

    Title_div.textContent = `Title: ${Title}`
    Trans_Type_div.textContent = `${type}: ${amt}`
    Date_div.textContent = `Transaction Date: ${current_date.toLocaleString()}`

    history_div.appendChild(Title_div)
    history_div.appendChild(Trans_Type_div)
    history_div.appendChild(Date_div)

    document.querySelector(".Trans_History").appendChild(history_div)
}

function addTransaction() {
    let Title = input.value
    let amt = parseInt(amount.value)

    let Transaction_Type = document.querySelector("input[name='type']:checked")

    if (Transaction_Type && Title && amt) {
        if (Transaction_Type.value === "income") {
            inflow(amt, Title)
        }
        else if (Transaction_Type.value === "expense") {
            outflow(amt, Title)
        }
    }
    Transactions++

    localStorage.setItem("Total_Transactions", Transactions)

    localStorage.setItem(`Transaction ${Transactions}`, JSON.stringify({
        subject: Title,
        balance: bal,
        inc: earning,
        exp: cost,
        inp_amt: amt,
        type: Transaction_Type.value
    }))
}

// Heleper function
function restoreData(data) {
    bal = data.balance
    earning = data.inc
    cost = data.exp
    title = data.subject
    inp_amt = data.inp_amt
    tr_type = data.type

    balance.textContent = `Balance: ${bal}`
    income.textContent = `Income: ${earning}`
    expense.textContent = `Expense: ${cost}`

    if (tr_type === "income") {
        history(title, "Income", inp_amt)
    }
    else {
        history(title, "Expense", inp_amt)
    }
}

add_btn.addEventListener("click", () => {
    addTransaction()
    input.value = ""
    amount.value = ""

    let selected = document.querySelector("input[name='type']:checked")
    if (selected) selected.checked = false
})
clear_btn.addEventListener("click", () => {
    localStorage.clear()

    bal = 0
    earning = 0
    cost = 0

    Transactions = 0

    balance.textContent = "Balance: 0"
    income.textContent = "Income: 0"
    expense.textContent = "Expense: 0"

    document.querySelector(".Trans_History").innerHTML = "<h1> History </h1>"

    input.value = ""
    amount.value = ""
})

window.addEventListener("load", () => {
    let total = parseInt(localStorage.getItem("Total_Transactions")) || 0

    for (let i = 1; i <= total; i++) {
        let key_data = JSON.parse(localStorage.getItem(`Transaction ${i}`))
        if (key_data) {
            restoreData(key_data);
        }
    }
});


// window.addEventListener("load", () => {
//     for (let i = 0; i < localStorage.length; i++) {
//         let key_num = localStorage.key(i)

//         if (key_num.startsWith("Trans")) {
//             let key_data = JSON.parse(localStorage.getItem(key_num))
//             restoreData(key_data)
//         }
//     }
// })



/*  

efforts.js :)

console.log("Expense Tracker")
const input = document.querySelector(".Title")
const amount = document.querySelector(".amount")

const add_btn = document.querySelector(".btn")

const balance = document.querySelector(".balance")
const income = document.querySelector(".income")
const expense = document.querySelector(".expenses")

let bal = 0
let earning = 0
let cost = 0

let TotalTransaction = 0;

function inflow(amt) {
    bal += amt
    earning += amt
    balance.textContent = `Balance: ${bal}`
    income.textContent = `Income: ${earning}`
}

function outflow(amt) {
    bal -= amt
    cost += amt
    balance.textContent = `Balance: ${bal}`
    expense.textContent = `Expense: ${cost}`
}

function history(Title){
let current_date = new Date()
let history_div = document.createElement("div")

let Title_div = document.createElement("div")
let Trans_Type_div = document.createElement("div")
let Date_div = document.createElement("div")

Title_div.textContent = Title
Date_div.textContent = current_date
}

function addTransaction() {
    let Title = input.value
    let amt = parseInt(amount.value)

    let Transaction_Type = document.querySelector("input[name='type']:checked")

    if (Transaction_Type) {
        if (Transaction_Type.value === "income") {
            inflow(amt)
            history(Title)
        }
        else if (Transaction_Type.value === "expense") {
            outflow(amt)
        }
    }

    localStorage.setItem(`Transaction ${TotalTransaction}`, JSON.stringify({
        subject: Title,
        balance: bal,
        inc: earning,
        exp: cost
    }))
    TotalTransaction++
}

// Heleper function
function restoreData(data) {
    bal = data.balance
    earning = data.inc
    cost = data.exp

    balance.textContent = `Balance: ${bal}`
    income.textContent = `Balance: ${earning}`
    expense.textContent = `Balance: ${cost}`
}

add_btn.addEventListener("click", () => {
    addTransaction()
})

window.addEventListener("load", () => {
    for (let i = 0; i < localStorage.length; i++) {
        let key_num = localStorage.key(i)

        if (key_num.startsWith("Trans")) {
            let key_data = JSON.parse(localStorage.getItem(key_num))
            restoreData(key_data)
        }
    }
})

*/
