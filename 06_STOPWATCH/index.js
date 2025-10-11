console.log("Stopwatch")
const clock = document.querySelector(".clock")
const start_btn = document.querySelector(".start")
const stop_btn = document.querySelector(".stop")
const clear_btn = document.querySelector(".clear")

clock.innerHTML = `00: 00: 00: 000`
let hours = 0
let minutes = 0
let seconds = 0
let milliseconds = 0
let Timer = null

function format(num) {
    return num < 10 ? "0" + num : num
}

start_btn.addEventListener("click", () => {
    if (Timer) return // Ryt now Timer has no id but when we click start btn, setInterval will return an id to Timer, now Timer will have non-Null value # false so the code wont run again 

    Timer = setInterval(() => {
        let h = format(hours)
        let m = format(minutes)
        let s = format(seconds)
        let ms = milliseconds < 100 ? "0" + milliseconds : milliseconds
        clock.innerHTML = `${h}: ${m}: ${s}: ${ms}`
        milliseconds += 10
        if (milliseconds >= 1000) {
            milliseconds = 0
            seconds++
            if (seconds >= 60) {
                seconds = 0
                minutes++
                if (minutes >= 60) {
                    minutes = 0
                    hours++
                }
            }
        }
    }, 10)
})

stop_btn.addEventListener("click", () => {
    clearInterval(Timer)
    Timer = null
})

clear_btn.addEventListener("click", () => {
    hours = 0
    minutes = 0
    seconds = 0
    clock.innerHTML = `00: 00: 00: 000`
    clearInterval(Timer) // just stops the interval 
    Timer = null
})


let Timer2 = null

console.log(Boolean(Timer2)) // false 

Timer2 = 5
console.log(Boolean(Timer2)) // true 

Timer2 = null
console.log(Boolean(Timer2)) // false 


