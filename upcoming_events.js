
let fechaActual = tarjetas.currentDate;
let fechaActualDate = new Date(fechaActual);

let divContainerEvents = document.getElementById('div-container-events');
let fragment = document.createDocumentFragment()
for (const event of tarjetas.events) {
  let fechaEvento = event.date;
  let fechaEventoDate = new Date(fechaEvento)

  if (fechaEventoDate > fechaActualDate) {

    let cardUnica = document.createElement('div')
    cardUnica.classList.add('card', 'text-center')
    cardUnica.innerHTML = `<img src="${event.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">
          ${event.description}
        </p>
        <div class="price-and-button d-flex justify-content-between">
          <p class="card-text">PRICE $ ${event.price}</p>
          <a href="./details.html" class="btn" style="background-color: #a493e6"><i>VAMOS</i></i></a>
        </div>
        `
    fragment.appendChild(cardUnica)
  }
}
divContainerEvents.appendChild(fragment)