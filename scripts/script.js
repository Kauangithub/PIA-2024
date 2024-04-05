btnAdd = document.getElementById('add')
btnRem = document.getElementById('rem')
forms = document.getElementById('span')
existe = document.getElementById('ingexistentes')
lista = document.getElementById('listaIng')
let nome = getElementById('ticketName')

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
function canc(){
    forms.style.display = 'none'
}
function test(){

}
