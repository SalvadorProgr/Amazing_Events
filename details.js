let eventContainer = document.getElementById("eventContainer")
let dataEvents = tarjetas.events;

const id = location.search
let parametro = new URLSearchParams(id)
// console.log(parametro)
const idNumber = parseInt(parametro.get("_id"));
// console.log(idNumber)
const evento = dataEvents.find(element => element._id === idNumber)
// console.log(evento)

eventContainer.innerHTML = `<div class="row">
  <div class="col-md-5";">
    <img src="${evento.image}" alt="..." class="mb-4 mb-md-0 ms-0 pt-5" style="width: 400px; height: 300px;"/>
  </div>
  <div class="col-md-6 d-flex flex-column justify-content-center ps-5 pt-3">
    <h2 class="details_title">${evento.name}</h2>
    <p>${evento.description}</p>
    <p class="h6"><strong>Date: </strong>${evento.date}</p>
    <p><strong>Category: </strong>${evento.category}</p>
    <p><strong>Place: </strong>${evento.place}</p>
    <p><strong>Capacity: </strong>${evento.capacity}</p>
    <p><strong>Assistance: </strong>${evento.assistance}</p>
    <p><strong>Price: </strong>$${evento.price}</p>
  </div>
</div>
`