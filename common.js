// ================= VALIDATION FUNCTIONS =================

// EMAIL (strict)
function isValidEmail(email){
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
  return pattern.test(email)
}

// NAME (only letters, min 2 chars)
function isValidName(name){
  let pattern = /^[A-Za-z]{2,}$/
  return pattern.test(name)
}

// CITY (only letters, spaces allowed)
function isValidCity(city){
  let pattern = /^[A-Za-z ]{2,}$/
  return pattern.test(city)
}

// PHONE (10 digits, cannot start with 0)
function isValidPhone(phone){
  let pattern = /^[6-9][0-9]{9}$/
  return pattern.test(phone)
}

// PIN (exact 6 digits)
function isValidPin(pin){
  let pattern = /^[1-9][0-9]{5}$/
  return pattern.test(pin)
}

// CARD
function isValidCard(card){
  let pattern = /^[0-9]{16}$/
  return pattern.test(card)
}

// CVV
function isValidCVV(cvv){
  let pattern = /^[0-9]{3}$/
  return pattern.test(cvv)
}


// ================= MAIN CHECKOUT =================

function validateCheckout(){

let email = document.getElementById("email").value.trim()
let fname = document.getElementById("fname").value.trim()
let lname = document.getElementById("lname").value.trim()
let address = document.getElementById("address").value.trim()
let city = document.getElementById("city").value.trim()
let pin = document.getElementById("pin").value.trim()
let phone = document.getElementById("phone").value.trim()

let payment = document.querySelector('input[name="pay"]:checked')

// EMAIL
if(!isValidEmail(email)){
alert("❌ Enter proper email (example: abc@gmail.com)")
return false
}

// NAME
if(!isValidName(fname)){
alert("❌ First name must be letters only (min 2)")
return false
}

if(!isValidName(lname)){
alert("❌ Last name must be letters only (min 2)")
return false
}

// ADDRESS
if(address.length < 5){
alert("❌ Enter proper address")
return false
}

// CITY
if(!isValidCity(city)){
alert("❌ City must contain only letters")
return false
}

// PIN
if(!isValidPin(pin)){
alert("❌ Enter valid 6-digit PIN")
return false
}

// PHONE
if(!isValidPhone(phone)){
alert("❌ Enter valid Indian phone number")
return false
}

// PAYMENT
if(!payment){
alert("❌ Select payment method")
return false
}

// CARD CHECK
if(payment.value === "card"){
let cardInputs = document.querySelectorAll("#cardBox input")

let cardNo = cardInputs[0].value.trim()
let expiry = cardInputs[1].value.trim()
let cvv = cardInputs[2].value.trim()

if(!isValidCard(cardNo)){
alert("❌ Card must be 16 digits")
return false
}

if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)){
alert("❌ Enter expiry in MM/YY format")
return false
}

if(!isValidCVV(cvv)){
alert("❌ CVV must be 3 digits")
return false
}
}

return true
}