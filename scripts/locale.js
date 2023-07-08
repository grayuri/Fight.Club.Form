const state = document.getElementById('state');
const city = document.getElementById('city');

state.addEventListener('change', async () => {
  const citiesUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.value}/municipios`;
  const request = await fetch(citiesUrl);
  const response = await request.json();

  let options = '<option></option>';
  response.forEach(city => {
    options += `<option>${city.nome}</option>`;
  });
  
  city.innerHTML = options;
})

window.addEventListener('load', async () => {
  const statesUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  const request = await fetch(statesUrl);
  const response = await request.json();

  let options = '<option></option>';
  response.forEach(state => {
    options += `<option>${state.sigla}</option>`;
  });

  state.innerHTML = options;
});