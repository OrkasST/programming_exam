const userInfo = document.getElementById("userInfo")
const error = document.querySelector(".pop")
const listContainer = document.querySelector(".list-container")

const hobbyAddBtn = document.getElementById("hobbyAddBtn")

const nameInput = document.getElementById("fullName")
const emailInput = document.getElementById("email")
const ageInput = document.getElementById("age")
const hobbyInput = document.getElementById("hobbies")

const hobbyList = document.querySelector(".hobbyList")

const inputs = [nameInput, emailInput, ageInput]

let toFill = []
let isAgeOver18 = true
let hobbies = []

userInfo.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!error.classList.contains("hidden")) error.classList.add("hidden")
    console.log('error.classList: ', error.classList);
    toFill = []
    isAgeOver18 = true
    
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') toFill.push(inputs[i].name)
        if (inputs[i].name == "age" && Number(inputs[i].value) < 18) isAgeOver18 = false
    }
    if (toFill.length > 0 || !isAgeOver18) {
        error.classList.remove("hidden")
        console.log('SSSSS');
        console.log('error.classList: ', error.classList);
        if (toFill.length > 0) {
            error.innerHTML = `
            You need to fill:
            <ul>
            `
            toFill.forEach(el => error.innerHTML += `<li>${el}</li>`)
            error.innerHTML += `</ul>`
        }
        if (!isAgeOver18) {
            error.innerHTML += `
            You must be over 18 to submit`
        }
     
       return
    }
    addUser(nameInput.value, emailInput.value, ageInput.value, hobbies)
    inputs.forEach(input => input.value = "")
    hobbyList.innerHTML = ""
})

hobbyAddBtn.addEventListener("click", (e) => {
    e.preventDefault()
    hobbies.push(hobbyInput.value)
    console.log('hobbyInput: ', hobbyInput);
    console.log('hobbyInput.value: ', hobbyInput.value);
    hobbyList.innerHTML += `
    <div class="hobby">${hobbyInput.value}</div>`
    
    hobbyInput.value = ""
})

function addUser(name, email, age, hobbies) {
    let card = `
    <div class="user_card">
        <div>
            <div>${name}, ${age} years old</div>
            <div>E-mail: ${email}</div>
            <div>Hobbies: ${hobbies.join(", ")}</div>
        </div>
    </div>
    `
    listContainer.innerHTML += card

}