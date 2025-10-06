console.log("FORM VALIDATOR");

// Selectors
const nameInput = document.querySelector(".Name_inp");
const emailInput = document.querySelector(".Email_inp");
const passInput = document.querySelector(".Pass_inp");
const confirmInput = document.querySelector(".cnfrm_inp");

const submitBtn = document.querySelector(".sub");
const clearBtn = document.querySelector(".ac");

const userData = document.querySelector(".user_data");

// ✅ Validation Function
function validateForm() {
  let isValid = true; // flag

  // Reset previous styles
  let inputs = [nameInput, emailInput, passInput, confirmInput]
  inputs.forEach(inp => {
    inp.style.border = "1px solid #ccc";
  });

  // 1. Empty field check
  if (!nameInput.value.trim() || !emailInput.value.trim() || !passInput.value.trim() || !confirmInput.value.trim()) {
    alert("❌ Please enter all the fields");
    highlightEmpty();
    return false;
  }

  // 2. Name validation (no numbers allowed)
  if (!isNaN(nameInput.value)) {
    alert("❌ Enter a valid name");
    nameInput.style.border = "1px solid red";
    isValid = false;
  }

  // 3. Email validation
  if (!emailInput.value.endsWith("@gmail.com")) {
    alert("❌ Enter a valid email id");
    emailInput.style.border = "1px solid red";
    isValid = false;
  }

  // 4. Password validation
  if (passInput.value.length < 6) {
    alert("❌ Password must be at least 6 characters long");
    passInput.style.border = "1px solid red";
    isValid = false;
  }

  // 5. Confirm password
  if (confirmInput.value !== passInput.value) {
    alert("❌ Passwords do not match");
    confirmInput.style.border = "1px solid red";
    isValid = false;
  }

  return isValid;
}

// ✅ Highlight Empty Fields
function highlightEmpty() {
  [nameInput, emailInput, passInput, confirmInput].forEach(inp => {
    if (!inp.value.trim()) {
      inp.classList.add("error");
      setTimeout(() => inp.classList.remove("error"), 800);
    }
  });
}

// ✅ Submit Event
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent form refresh

  if (validateForm()) {
    userData.innerHTML = `
      ✅ <b>User Name:</b> ${nameInput.value} <br>
      📧 <b>User Email:</b> ${emailInput.value}
    `;
  }
});

// ✅ Clear Event
clearBtn.addEventListener("click", () => {
  [nameInput, emailInput, passInput, confirmInput].forEach(inp => inp.value = "");
  userData.innerHTML = "";
});

// 25% credit goes to Chatgpt

