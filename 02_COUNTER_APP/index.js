console.log("Counter App")
const Tab = document.querySelector(".count")
const add_btn = document.querySelector(".add")
const subs_btn = document.querySelector(".substract")
const clear_btn = document.querySelector(".clear")

Tab.textContent = 0
add_btn.addEventListener("click", ()=>{
    Tab.textContent = Number(Tab.textContent) + 1
})
subs_btn.addEventListener("click", ()=>{
    Tab.textContent = Number(Tab.textContent) - 1
})
clear_btn.addEventListener("click", ()=>{
    Tab.textContent = 0
})