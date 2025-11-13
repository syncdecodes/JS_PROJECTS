console.log("To do list")

// Accessing html elements
const container = document.querySelector(".container")
const input = document.querySelector(".input")
const add_btn = document.querySelector(".add")
const select_time = document.querySelector(".select_time")
const showTask = document.querySelector(".showTask")

add_btn.style.backgroundColor = "rgb(4, 255, 4)"
console.log(container)
console.log(input)
console.log(add_btn)
console.log(select_time)
console.log(showTask)

let totalTask = parseInt(localStorage.getItem("totalTask")) || 0; 

// Filling hours in dropdown
for (let i = 1; i < 25; i++) {
    let option = document.createElement("option")
    option.innerHTML = i
    option.value = i
    select_time.appendChild(option)
}


// Function1 - format
function format(num) {
    return num < 10 ? "0" + num : num
}


// Function2 - countdown
function countdown(totalSeconds, time, key) {

    let interval = setInterval(() => {
        if (totalSeconds <= 0) {
            time.innerHTML = "Time over"
            clearInterval(interval)
            return
        }
        else {
            const h = format(Math.floor(totalSeconds / 3600))
            const m = format(Math.floor((totalSeconds % 3600) / 60))
            const s = format(Math.floor(totalSeconds % 60))
            time.innerHTML = `Time remaining ${h}: ${m}: ${s}`
            totalSeconds--

           let data = JSON.parse(localStorage.getItem(key))
           data.remaining = totalSeconds
           localStorage.setItem(key, JSON.stringify(data))
        }
    }, 1000)
}


// Function3 - createTaskElements
function createTaskElements(value, totalSeconds, key) {
    let allTasks = document.createElement("div")
    let task = document.createElement("div")
    let time = document.createElement("div")
    let dlt_btn = document.createElement("button")

    time.classList.add("time_remaining")
    dlt_btn.classList.add("btn")
    task.innerHTML = value
    dlt_btn.textContent = "Delete"

    allTasks.classList.add("allTasks")
    allTasks.appendChild(task)
    allTasks.appendChild(time)
    allTasks.appendChild(dlt_btn)

    showTask.appendChild(allTasks)

    countdown(totalSeconds, time, key)

    dlt_btn.addEventListener("click", () => {
        showTask.removeChild(allTasks)
        localStorage.removeItem(key)
    })
}


// Function4 - addTask
function addTask() {
    const value = input.value
    const hours = parseInt(select_time.value)
    if (!value || hours == 0) {
        alert("Enter task and time")
        return
    }

    totalTask++
    localStorage.setItem("totalTask", totalTask);

    let key = "Task" + totalTask 
    totalSeconds = hours * 60 * 60 

    localStorage.setItem(key, JSON.stringify({
        task: value,
        remaining: totalSeconds
    }))


    createTaskElements(value, totalSeconds, key)

    input.value = ""
    select_time.value = "0"

}

add_btn.addEventListener("click", addTask)


// on load
window.addEventListener("load", ()=>{
    for (let i = 0; i < localStorage.length ; i++) {
        let key_number = localStorage.key(i)
        if(key_number.startsWith("Task")){
            let data = JSON.parse(localStorage.getItem(key_number))

            createTaskElements(data.task, data.remaining, key_number)
        }
    }

})

// localStorage.setItem("key", "dev")
// localStorage.setItem("key2", "kiku")
// console.log(localStorage.key(0))

/*  

efforts.js  :)

done_btn.addEventListener("click", () => {

        let date = new Date()

        let container2 = document.createElement("div")
        container2.classList.add("container2")

        let h1 = document.createElement("h1")
        h1.textContent = "History"
        h1.classList.add("heading")

        let TaskHistory = document.createElement("div")
        TaskHistory.classList.add("TaskHistory")

        let history = document.createElement("div")
        let Current_Date = document.createElement("div")

        let Remove_btn = document.createElement("button")
        Remove_btn.classList.add("btn")
        Remove_btn.textContent = "Remove"

        history.innerHTML = value
        Current_Date.textContent = `Task completed on: ${date}`

        TaskHistory.appendChild(history)
        TaskHistory.appendChild(Current_Date)
        TaskHistory.appendChild(Remove_btn)

        container2.append(h1)
        container2.appendChild(TaskHistory)

        document.body.appendChild(container2)

        Remove_btn.addEventListener("click", () => {
            document.body.removeChild(container2)
        })

    })

*/