const btnAdd = document.getElementById('add')
const btnRem = document.getElementById('rem')
const forms = document.getElementById('span')
const existe = document.getElementById('ingexistentes')
const lista = document.getElementById('listaIng')
const nome = document.getElementById('ticketName')

function addIng(){
    if (forms.style.display = 'none'){
        forms.style.display = 'block'
        btnRem.style.display = 'none'
        btnAdd.style.width = '45%'
        btnAdd.style.margin =  '10px'
    } else {
        alert('Ingresso Criado')
        lista.document.createElement('li')
        lista.append('nome')
    }  
}
function remIng(){
    existe.style.display = 'block'
}
function cancel(){
    forms.style.display = 'none';
    btnRem.style.display = 'block'
    btnAdd.style.width = '100%'
    btnAdd.style.margin =  '0px'
}
