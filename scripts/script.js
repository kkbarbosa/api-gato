// const apiKey = 'live_5gmvq56FmF2OdeHA494d1SV59omm1xnfU8MImBfB87hniUO2ZFs0oDTxBe65y2DD';
const url = 'https://api.thecatapi.com/v1/images/search';

const section = document.querySelector('.imagens');
const button = document.querySelector('.btn');
// console.log('section');
// console.log('btn');

button.addEventListener('click', gerarGatosAleatorios);

gatoRandom = (json) => {
  let foto = json[0].url
  section.classList.add('gatos')

  let image = document.createElement('img')
  image.src = foto;
  image.classList.add('random_gato');
  image.alt = 'gato maneiro';
  section.appendChild(image)
}

async function gerarGatosAleatorios() {
  section.innerHTML = '';
  try {
    const response = await fetch(url)
    const json = await response.json()
    console.log('JSON: ' + json)
    return gatoRandom(json)
  } catch {

  }
}