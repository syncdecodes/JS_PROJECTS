console.log("Guess The Number")
const input = document.querySelector(".inp")
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")
const chances = document.querySelector(".chances")
const btn2 = document.querySelector(".btn2")

console.log(input)
console.log(btn)
console.log(result)
console.log(chances)
console.log(btn2)

let random = Math.floor(Math.random() * 100) + 1;
console.log(random)
let totalChances = 8;
chances.innerHTML = `Total Chances: ${totalChances}`


btn.addEventListener("click", (e) => {
    totalChances--;
    chances.innerHTML = `Chances left: ${totalChances}`

    let guess = input.value
    console.log(guess)
    if (guess == "") {
        alert("Enter a number")
        totalChances = 10
        chances.innerHTML = `Total chances: ${totalChances}`
    }
    if (random == guess) {
        result.innerHTML = "Result: 🎉 Congratulations, you guessed it!"
    }
    else if (guess > random) {
        result.innerHTML = "Result: Guess Too high"
    }
    else if (guess < random) {
        result.innerHTML = "Result: Guess Too low"
    }

    if (totalChances == 0 & guess !== random) {
        result.innerHTML = `❌ Game Over! The number was ${random}`;
        btn.disabled = true;
    }
})

btn2.addEventListener("click", () => {
    totalChances = 10
    let random = Math.floor(Math.random() * 100) + 1;
    console.log("New Number:", random);
    input.value = "";
    result.innerHTML = "Result: ";
    chances.innerHTML = `Total Chances: ${totalChances}`;

    btn.disabled = false;
})