document.addEventListener("DOMContentLoaded", function() { 
    // Seleciona o formulário na página
    const form = document.querySelector("form"); 

    form.addEventListener("submit", function(event) { 
        // Obtém os valores dos campos de entrada e remove espaços em branco
        const name = document.getElementById("name").value.trim(); 
        const email = document.getElementById("email").value.trim(); 
        const message = document.getElementById("message").value.trim(); 

        // Verifica se algum campo está vazio
        if (name === "" || email === "" || message === "") { 
            alert("Por favor, preencha todos os campos."); 
            event.preventDefault(); // Evita o envio do formulário se houver campos vazios 
        } else {
            alert("Enviado!"); // Exibe o alerta "Enviado!" se todos os campos estiverem preenchidos
        }
    }); 
});
