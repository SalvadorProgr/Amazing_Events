let divContainerEvents = document.getElementById('divContainerEvents');

// desde acá los checkboxes

// let checks = document.getElementById('checks')
// checks.addEventListener('click', imprimirPorConsola)
// function imprimirPorConsola(e) {
//   console.log(e.target)
// }
let listaDeEventos = []
let arrayDeCategory = tarjetas.events.map(evento => {
  if (!listaDeEventos.includes(evento.category))
    listaDeEventos.push(evento.category)
})
// console.log(listaDeEventos)
let fragment = document.createDocumentFragment()
for (const category of listaDeEventos) {
  let div = document.createElement('div')
  div.innerHTML = `
  <div class="form-check">
  <label class="form-check-label" for="flexCheckDefault">
    ${category}
  <input class="form-check-input" type="checkbox" value="${category}" id="">
  </label>
</div>
  `
  fragment.appendChild(div)
}
checks.appendChild(fragment)

let checkboxes = document.querySelectorAll('input[type=checkbox]');
// console.log(checkboxes);

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', verificarChequeado)
})

function verificarChequeado() {
  let inputChequeado = Array.from(checkboxes).filter(checkbox => checkbox.checked)
  let inputMapeados = inputChequeado.map(input => input.value);

  let eventsFiltrados
  if (inputMapeados.length == 0) {
    eventsFiltrados = tarjetas.events
  } else {
    eventsFiltrados = tarjetas.events.filter(evento => inputMapeados.includes(evento.category));
  }

  showCards(eventsFiltrados, "divContainerEvents")
}
verificarChequeado()

// function filterArrayByArray(arrayStrings, arrayObjetos) {
//   if(arrayStrings.length === 0) return arrayObjetos
//   let newArray = arrayObjetos.filter(elemento => arrayStrings.includes(elemento.category))
//   return newArray
// }

function showCards(array, idContainer) {
  let container = document.getElementById(idContainer)
  container.innerHTML = "";
  const fragment = document.createDocumentFragment()
  for (let elemento of array) {
    let div = document.createElement('div')
    div.className = 'card card-small'
    div.style.width = '20rem'
    div.innerHTML = `
    <img src="${elemento.image}" class="card-img-top" alt="..." />
       <div class="card-body">
         <h5 class="card-title">${elemento.name}</h5>
         <p class="card-text">
           ${elemento.description}
         </p>
         <div class="price-and-button d-flex justify-content-between">
           <p class="card-text">PRICE $ ${elemento.price}</p>
           <a href="./details.html?_id=${elemento._id}" class="btn" style="background-color: #a493e6"><i>SEE MORE</i></i></a>
         </div>
    `
    fragment.appendChild(div)
  }
  container.appendChild(fragment)
}

let inputForm = document.getElementById('inputForm')
inputForm.addEventListener('keyup', (e) => {
  console.log(inputForm.value)
})
