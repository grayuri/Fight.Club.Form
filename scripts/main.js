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
const userQrCode = document.querySelector('#qr-code>img')
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

function getUserAge(datebirth) {
  const birth = datebirth.getFullYear()
  let presentTime = new Date().getFullYear()
  let age = presentTime - birth

  return age
}

function formatDatebirth(date) {
  const datebirth = new Date(date);
  const formatedBirth = (new Intl.DateTimeFormat('pt-br')).format(datebirth);
  const age = getUserAge(datebirth)

  return (`${formatedBirth} (${age} years)`) 
}

function formatHeight(height) {
  let heightCm = height;
  let heightArray = Array.from(heightCm.toString())
  heightArray[0] += "."
  let heightM = heightArray.reduce((accum, value) => accum + value)

  return heightM
}

function formatPhoneNumber(number) {
  const crudeNumber = (81987363068).toString()
  const DDD = crudeNumber.substring(0, 2)
  const numberNine = crudeNumber.substring(2,3)
  const firstPart = crudeNumber.substring(3,7)
  const secondPart = crudeNumber.substring(7,11)
  const completeNumber = `(${DDD}) ${numberNine} ${firstPart}-${secondPart}`

  return completeNumber
}

function setUserQrCode(informations) {
  const gChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=160x160&chl='
  const qrCodeContent = gChartAPI + encodeURIComponent(informations)
  userQrCode.src = qrCodeContent
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const formatedBirth = formatDatebirth(inputBirth.value)
  const formatedHeight = formatHeight(inputHeight.value)
  const formatedPhoneNumber = formatPhoneNumber(inputPhone.value)

  const userInformations = {
    name: inputName.value,
    lastName: inputLastName.value,
    birth: formatedBirth,
    weight: inputWeight.value,
    height: formatedHeight,
    email: inputEmail.value,
    phone: formatedPhoneNumber,
    state: inputState.value,
    city: inputCity.value,
    observation: inputObservation.value,
  }

  setUserQrCode(userInformations)
  setUserInformations(userInformations)
  showAfterSection()
  addClassToPrint()
  getPdfButton.addEventListener('click', () => window.print())
})


