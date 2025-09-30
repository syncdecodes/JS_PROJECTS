console.log("Loops and functions revesion")
const num1 = document.querySelector(".input_num1")
const btn1 = document.querySelector(".btn1")
const table1 = document.querySelector(".table1")
const btn2 = document.querySelector(".btn2")

console.log("Ques 1 - write a table using for loop")

btn1.addEventListener("click", () => {
    if (isNaN(num1.value)) {
        alert("Enter a valid Number")
    }
    else if (num1.value == "") {
        alert("Enter a number")
    }
    else {
        table1.innerHTML = ""
        for (let i = 1; i <= 10; i++) {
            product = num1.value * i
            console.log(num1.value, "x", i, "=", product)
            table1.innerHTML += (num1.value + " x " + i
                + " = " + product + "<br>")
        }
    }
})

btn2.addEventListener("click", () => {
    num1.value = ""
    table1.innerHTML = ""
     num1.focus();
})


console.log("Ques 1 - write a table using while loop")


const num2 = document.querySelector(".input_num2")
const num3 = document.querySelector(".input_num3")
const btn3 = document.querySelector(".btn3")
const table2 = document.querySelector(".table2")
const btn4 = document.querySelector(".btn4")

btn3.addEventListener("click", () => {
    if (num2.value == "" || num3.value == "") {
        alert("Enter both the numbers")
    }
    else if (isNaN(num2.value) || isNaN(num3.value)) {
        alert("Enter a valid number")
    }
    else {
        table2.innerHTML = ""
        i = 1
        while (i <= num3.value) {
            product2 = num2.value * i
            console.log(num2.value + " x " + i + " = " + product2 + "<br>")
            table2.innerHTML += (num2.value + " x " + i + " = " + product2 + "<br>") 
            i++
        }
    }
})

btn4.addEventListener("click", ()=>{
    num2.value = ""
    num3.value = ""
    table2.innerHTML = ""
})