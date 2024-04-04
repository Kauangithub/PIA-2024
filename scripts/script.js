document.get

document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores do formulário
    var ticketName = document.getElementById('ticketName').value;
    var ticketDescription = document.getElementById('ticketDescription').value;
    var ticketPrice = document.getElementById('ticketPrice').value;
    var ticketImage = document.getElementById('ticketImage').files[0];

    // Aqui você pode enviar os dados para o servidor usando AJAX, por exemplo
    // Por enquanto, vamos apenas exibir os dados no console
    console.log('Nome:', ticketName);
    console.log('Descrição:', ticketDescription);
    console.log('Preço:', ticketPrice);
    console.log('Imagem:', ticketImage);

    // Limpa o formulário
    document.getElementById('ticketForm').reset();
});
