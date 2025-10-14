console.log("Word & Character Counter")
const input = document.querySelector("#textInput")
const Characters = document.querySelector("#charCount")
const Words = document.querySelector("#wordCount")

console.log(input)
console.log(Characters)
console.log(Words)


console.log(input.value.length)

input.addEventListener("input", () => {
    for (let i = 0; i <= input.value.length; i++) {
        Characters.innerHTML = `Characters: ${i}`
    }
    let text = input.value.trim()

    let wordcount = text == "" ? 0 : text.split(/\s+/).length
    // means => condition (if text's trimmed string is empty) ? wordcount = 0 otherwise wordcount = text.split(/\s+/).length
    Words.innerHTML = `Words: ${wordcount}`

    /* 
    let wordcount = text == "" ? 0 : text.split(/\s+/).length ----- using if else statements

        let words; // declared a variable without assigning any value to it
    if (text === "") {
        // if text is an empty string then
        words = 0;
    }
    else {
        // if there is something in text then
        words = text.split(/\s+/).length
    }
    */

    /*
     /\s+/ explaination -:
     /..../ -> Regular Expression (RegEx) syntax
     \s => symbol for spaces character 
     + => if spaces repeated treat it like 1 space only 
    */

})


// Logic understanding -: 

str = "hello world"
split_str_char = str.split(" ")
console.log(split_str_char)
console.log(split_str_char.length)

str2 = "hello  world"
split_str2_char = str2.split("")
console.log(split_str2_char)
console.log(split_str2_char.length)

str3 = "hello   world"
split_str3_char = str3.split(/\s+/)
console.log(split_str3_char)
console.log(split_str3_char.length)

str4 = "hello   world"
split_str4_char = str4.split(" ")
console.log(split_str4_char)
console.log(split_str4_char.length)