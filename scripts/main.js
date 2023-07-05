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
const globalDivForm = document.getElementById('global-div')
const globalAfter = document.getElementById('global-after')
const getPdfButton = document.getElementById('get-pdf')

// Print Page --------------------------------------------------

const printPage = document.getElementById('print-page')
const userDataInputs = document.querySelectorAll('.user-datas>p')
const userName = userDataInputs[0]
const userBirth = userDataInputs[1]
const userEmail = userDataInputs[2]
const userPhone = userDataInputs[3]
const userState = userDataInputs[4]
const userCity = userDataInputs[5]
const userObjective = userDataInputs[6]
const userStatus = document.querySelectorAll('.status>h1')
const userWeight = userStatus[0]
const userHeight = userStatus[1]

// -------------------------------------------------------------

function setUserInformations(user) {
  const completeName = `${user.name} ${user.lastName}`

  userName.textContent = completeName.toUpperCase()
  userBirth.textContent = user.birth.toUpperCase()
  userEmail.textContent = user.email.toUpperCase()
  userPhone.textContent = user.phone.toUpperCase()
  userState.textContent = user.state.toUpperCase()
  userCity.textContent = user.city.toUpperCase()
  userWeight.textContent = user.weight
  userHeight.textContent = user.height
  userObjective.textContent = user.observation
}

function showAfterSection() {
  globalDivForm.classList.add('hidden')
  globalAfter.classList.remove('hidden')
}

function addClassToPrint() {
  printPage.classList.add('toPrint')
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
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

  setUserInformations(userInformations)
  showAfterSection()
  addClassToPrint()
  
  getPdfButton.addEventListener('click', () => window.print())
})