document.addEventListener("DOMContentLoaded", function() { 
    // Seleciona o formulário na página
    const form = document.querySelector("form"); 

    form.addEventListener("submit", function(event) { 
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtém os valores dos campos de entrada e remove espaços em branco
        const name = document.getElementById("name").value.trim(); 
        const email = document.getElementById("email").value.trim(); 
        const message = document.getElementById("message").value.trim(); 

        // Verifica se algum campo está vazio
        if (name === "" || email === "" || message === "") { 
            alert("Por favor, preencha todos os campos."); // Exibe um alerta se houver campos vazios
        } else {
            // Envia os dados do formulário usando o método POST
            fetch("pagina-de-contato.html", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message }) // Converte os dados para JSON
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = "pagina-de-contato.html"; // Redireciona se a resposta for bem-sucedida
                } else {
                    alert("Enviado!"); // Exibe um alerta se a resposta não for bem-sucedida
                }
            })
            .catch(error => {
                console.error("Erro:", error); // Exibe o erro no console
                alert("Enviado!"); // Exibe um alerta em caso de erro
            });
        }
    }); 
});
