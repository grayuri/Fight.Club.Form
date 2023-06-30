const form = document.getElementById('form')
const inputName = document.getElementById('name')
const inputLastName = document.getElementById('lastname')
const inputBirth = document.getElementById('birth')
const inputWeight = document.getElementById('weight')
const inputHeight = document.getElementById('height')
const inputEmail = document.getElementById('email')
const inputPhone = document.getElementById('phone')
const inputState = document.getElementById('state')
const inputCity = document.getElementById('city')
const inputObservation = document.getElementById('observation')

function getUserInformations() {
  const userInformations = {
    name: inputName.value,
    lastName: inputLastName.value,
    birth: inputBirth.value,
    weight: inputWeight.value,
    height: inputHeight.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    state: inputState.value,
    city: inputCity.value,
    observation: inputObservation.value,
  }

  return console.log(userInformations)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  getUserInformations()
})