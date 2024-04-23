const btnAdd = document.getElementById('add')
const btnRem = document.getElementById('rem')
const forms = document.getElementById('span')
const existe = document.getElementById('ingexistentes')
const lista = document.getElementById('lista')
const nome = document.getElementById('ticketName')


btnAdd.addEventListener('click', function(){
    if (forms.style.display != 'block'){
        forms.style.display = 'block'
        btnRem.style.display = 'none'
        btnAdd.style.width = '45%'
        btnAdd.style.margin =  '10px'
    } else if(forms.style.display != 'none') {
        alert('teste')
        const novoItem = document.createElement('li');
        novoItem.textContent = nome.value; 
        lista.appendChild(novoItem); 
        forms.style.display = 'none'
        btnRem.style.display = 'block'
        btnAdd.style.width = '100%'
        btnAdd.style.margin =  '0px'
    }  
})

btnRem.addEventListener('click', function(){
    if(lista.value != ''){
        alert('lista vazia')
    }
})
function remIng(){
    existe.style.display = 'block'
}
function cancel(){
    forms.style.display = 'none';
    btnRem.style.display = 'block'
    btnAdd.style.width = '100%'
    btnAdd.style.margin =  '0px'
}
