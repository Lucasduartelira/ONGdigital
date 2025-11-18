// Armazena as referências de TODOS os inputs em variáveis ÚNICAS
const inputFullName = document.getElementById("full-name");
const inputEmail = document.getElementById("email");
const inputCpf = document.getElementById("cpf");
const inputNumber = document.getElementById("number");
const inputBirthdate = document.getElementById("birthdate");
const inputAddress = document.getElementById("address");
const inputZipcode = document.getElementById("zipcode");
const inputState = document.getElementById("state");

// Armazena a referência do botão
const botaoCadastrar = document.getElementById("cadastrar-usuario");

// Adiciona o Listener ao botão
botaoCadastrar.addEventListener("click", function (evento) {

    let enviarForm = true;

    console.log("--- Dados do Formulário ---");
    console.log("Nome Completo:", inputFullName.value);
    console.log("E-mail:", inputEmail.value);
    console.log("CPF:", inputCpf.value);
    console.log("Telefone:", inputNumber.value);
    console.log("Data de Nascimento:", inputBirthdate.value);
    console.log("Endereço:", inputAddress.value);
    console.log("CEP:", inputZipcode.value);
    console.log("Estado:", inputState.value);
    console.log("---------------------------");

    if (!inputFullName.value || !inputEmail.value || !inputCpf.value || !inputNumber.value || !inputBirthdate.value || !inputAddress.value || !inputZipcode.value || !inputState.value) {
        enviarForm = false;
        alert("Um dos campos esta vazio");
    }
    else if (inputCpf.value.length < 11 || inputCpf.value.length > 11) {
        enviarForm = false;
        alert("Digito do CPF incorreto");
    }
    else if (inputZipcode.value.length < 8 || inputZipcode.value.length > 8) {
        var CEP = inputZipcode.value;
        CEP = CEP.replace("-", "");
        if (CEP.length != 8) {
            enviarForm = false;
            alert("CEP incorreto")
        }
        else {
            console.log("Nenhum campo está vazio");
            enviarForm = true;
            alert("Seus dados foram enviados com sucesso");
        }
    }

    else {
        console.log("Nenhum campo está vazio");
        enviarForm = true;
        alert("Seus dados foram enviados com sucesso");
    }

    if (!enviarForm) {
        evento.preventDefault();
    }

});

