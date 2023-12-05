//esercizio1
const datoInput = document.querySelector('#inputText')
const salvaDato = document.querySelector('#salvaDato')
const pDiMemoria = document.querySelector('#slotMemoria')
const cancellaButton = document.querySelector('#cancellaDato')
salvaDato.addEventListener('click', function() {
    const dato = datoInput.value
    localStorage.setItem('input1', dato)
    pDiMemoria.textContent = dato
})
window.addEventListener('load', function() {
    const valoreRecuperato = localStorage.getItem('input1')
    if (valoreRecuperato !== null) {
        pDiMemoria.textContent = valoreRecuperato
    }
})
cancellaButton.addEventListener('click', function () {
    localStorage.removeItem('input1')
    pDiMemoria.textContent = ''
})
//esercizio2
let contatore = sessionStorage.getItem('contatore') ? parseInt(sessionStorage.getItem('contatore')) : 0
const contatoreP = document.getElementById('contatore')
function incrementaContatore() {
    contatore++
    contatoreP.textContent = contatore
    sessionStorage.setItem('contatore', contatore)
}
setInterval(incrementaContatore, 1000);

