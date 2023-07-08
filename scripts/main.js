const form = document.getElementById('form')
const inputName = document.getElementById('name')
const inputLastName = document.getElementById('lastname')
const inputBirth = document.getElementById('birth')
const inputImage = document.getElementById('image')
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
const selectImageButton = document.getElementById('select-image-btn')

// Print Page --------------------------------------------------

const printPage = document.getElementById('print-page')
const userDataInputs = document.querySelectorAll('.user-datas>p')
const userImage = document.querySelector('#user-image>img')
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

inputImage.addEventListener('change', (e) => {
  const target = e.target || window.event.srcElement
  const file = target.files
  const fileReader = new FileReader()

  fileReader.onload = () => {
    userImage.src = fileReader.result
  }

  fileReader.readAsDataURL(file[0])

  selectImageButton.textContent = 'Selected!'
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  // Date Formatation
  const datebirth = new Date(inputBirth.value);
  const formatedBirth = (new Intl.DateTimeFormat('pt-br')).format(datebirth);

  // Height Formatation
  let heightCm = inputHeight.value;
  let heightArray = Array.from(heightCm.toString())
  heightArray[0] += "."
  let heightM = heightArray.reduce((accum, value) => accum + value)

  //Phone-number Formatation
  //https://www.ctasoftware.com.br/blog/formatar-telefone-em-javascript/#:~:text=M%C3%A9todo%20para%20formatar%20telefone%20com%208%20ou%209,8%29%3B%20%7D%20else%20if%20%28length%20%3D%3D%3D%209%29%20%7B

  const userInformations = {
    name: inputName.value,
    lastName: inputLastName.value,
    birth: formatedBirth,
    weight: inputWeight.value,
    height: heightM,
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