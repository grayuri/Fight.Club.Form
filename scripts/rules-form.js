let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');
const form = document.querySelector('#rules-form');

form.addEventListener('click', e => {
  if (!e.target.matches('[data-action]')) return

  const actions = {
    next() {
      currentStep++
    },
    prev() {
      currentStep--
    }
  }

  // Note something about this two lines below ---- |
  const action = e.target.dataset.action;
  actions[action](); // ***Dynamic*** acess
  // ---------------------------------------------- |

  updateActiveStep();
  updateProgresStep();
})

function updateActiveStep() {
  formSteps.forEach(step => { step.classList.remove('active') })
  if (currentStep == formSteps.length) {
    window.location.href = '../index.html'
  } else {
    formSteps[currentStep].classList.add('active');
  }

}

const progressStep = document.querySelectorAll('.steps-section');
function updateProgresStep() {
  progressStep.forEach((step, index) => {
    step.classList.remove('active')
    step.classList.remove('done')

    if (index < currentStep + 1) {
      step.classList.add('active')
    }

    if (index < currentStep) {
      step.classList.add('done')
    }
  })
}