console.log("Digital Clock 12 hour format")

const clock = document.querySelector(".clock")

setInterval(() => {
    let now = new Date();

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let session = "AM" // Default session is AM

    // 12 H FORMAT LOGIC WITH AM AND PM
    if (hours == 0) {
        hours = 12;
    }
    else if (hours == 12) {
        session = "PM";
    }
    else if (hours > 12) {
        hours = hours - 12;
        session = "PM"
    }


    // CONDITONALS USING TRADITIONAL IF ELSE
    if (hours < 10) {
        hours = "0" + hours
    }
    else { hours = hours }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    else { minutes = minutes }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    else { seconds = seconds }
    // condition ? valueIfTrue : valueIfFalse

    const time = `${hours} : ${minutes} : ${seconds} ${session}`
    clock.textContent = time

}, 1000)