import './styles/style.css'
import javascriptLogo from './public/javascript.svg'
import viteLogo from './public/vite.svg'
import { setupCounter } from './services/counter.js'
import HolaMundo from './components/HolaMundo'
import NombreEdad from './components/NombreEdad'

document.querySelector('#app').innerHTML = `
  ${NombreEdad('Alfredo', 24)}
  ${HolaMundo('Francisco')}
  ${HolaMundo('Antonio')}
  ${HolaMundo('Bryan')}
  ${HolaMundo('Wilberth')}
`

/*
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hola mundo</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
*/

setupCounter(document.querySelector('#counter'))
