console.log("Password generator")
const select = document.querySelector("#select")
const pass_length = document.querySelector(".length")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")
const simple_tab = document.querySelector(".simple_pass")
const moderate_tab = document.querySelector(".moderate_pass")
const strong_tab = document.querySelector(".strong_pass")

console.log(select)
console.log(pass_length)
console.log(btn1)
console.log(btn2)
console.log(btn3)
console.log(btn4)
console.log(simple_tab)
console.log(moderate_tab)
console.log(strong_tab)

for (let i = 5; i <= 20; i++) {
    const option = document.createElement("option")
    option.innerHTML = i
    select.appendChild(option)
}

select.addEventListener("change", () => {
    pass_length.value = select.value
})
const simple_passes = ["ADMIN", "HELLOWORLD", "JOHNWICK", "PASSWORD", "PASS123", "INFINITY", "CRAZYPASS", "ALIEN", "PETER", "BAHUBALI", "123PASS", "MONEYHEIST", "SQIDGAME", "CODECRACKED", "FAITHCODES", "SYNCDECODES", "ADMIN123", "HPWORLD"]
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const nums = "1234567890"
const special = "@#&$!%@#!$%&"

const char_nums = characters + nums
const all = char_nums + special

btn1.addEventListener("click", () => {
    password = ""
    for (let i = 0; i < 1; i++) {
        const random_index = Math.floor(Math.random() * simple_passes.length)
        password += simple_passes[random_index]
    }
    simple_tab.textContent = password
})

btn2.addEventListener("click", () => {
    password = ""
    if (pass_length.value == "") {
        alert("Enter length of password")
    }
    else {
        for (let i = 0; i < pass_length.value; i++) {
            const random_index = Math.floor(Math.random() * char_nums.length)
            password += char_nums[random_index]
        }
    }
    moderate_tab.textContent = password
})

btn3.addEventListener("click", () => {
    password = ""
    if (pass_length.value == "") {
        alert("Enter length of password")
    }
    else {
        for (let i = 0; i < pass_length.value; i++) {
            const random_index = Math.floor(Math.random() * all.length)
            password += all[random_index]
        }
    }
    strong_tab.textContent = password
})


btn4.addEventListener("click", () => {
    pass_length.value = ""
    select.selectedIndex = 0 // reset back to "Length"
    simple_tab.textContent = ""
    moderate_tab.textContent = ""
    strong_tab.textContent = ""

})




// check logic in console -:
const char = "AGIULHFUHR9GYHERUL5462375646562"
let pass = ""
for (let i = 0; i <= 7; i++) {
    const random_index = Math.floor(Math.random() * char.length)
    pass += char[random_index]
    console.log(pass)
}
console.log("Final passwor -:")
console.log(pass)

