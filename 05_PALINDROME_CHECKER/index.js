console.log("PALINDROME CHECKER")
// Palindrome eg - abcba - no matter you read it from left or right it will sound same in both case 

const input = document.querySelector(".user_inp")
const btn = document.querySelector(".btn")
const tab = document.querySelector(".tab")
const btn1 = document.querySelector(".btn1")
console.log(input)
console.log(btn)
console.log(btn1)

btn.addEventListener("click", () => {
    const value = input.value.trim()

    if (value === "") {
        tab.classList.add("show")
        tab.innerHTML = `<span class='result-no'>⚠️ Please enter a value!</span>`
        return
    }

    let reverse_value = value.split('').reverse().join('')
    if (value == reverse_value) {
        tab.classList.add("show")
        tab.innerHTML = `Entered value: <strong>${value}</strong><br/>
                         Reversed value: <strong>${reverse_value}</strong><br/>
                         <span class='result-yes'>✅ Yes, it's a PALINDROME!</span>`
    }

    else {
        tab.classList.add("show")
        tab.innerHTML = `Entered value: <strong>${value}</strong><br/>
                         Reversed value: <strong>${reverse_value}</strong><br/> 
                         <span class='result-no'>❌ No, it's not a PALINDROME.</span>`
    }
})

btn1.addEventListener("click", () => {
    input.value = ""
    tab.classList.remove("show")
    tab.innerHTML = ""
})