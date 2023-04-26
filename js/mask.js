/* MASCARA TELEFONE */
const handlePhone = (event) => {
    let valuePhone = event.target
    valuePhone.value = phoneMask(valuePhone.value)
    
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}


/* MASCARA CEP */
const handleZipCode = (event) => {
  let input = event.target
  input.value = zipCodeMask(input.value)
}

const zipCodeMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{5})(\d)/,'$1-$2')
  return value
}

/* MASCARA CPF */
const handleCPF = (event) => {
  let input = event.target
  input.value = cpfMask(input.value)
}

const cpfMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return value
}

/* MASCARA SENHA */
function togglePassword() {
  const togglePassword = document.getElementById("togglePasswordID");
  const password = document.getElementById("passwordID");
  
  if (password.type == "password") {
    password.type = "text";
    togglePassword.classList.toggle("bi-eye");
  } else if (password.type == "text") {
    password.type = "password";
    togglePassword.classList.toggle("bi-eye");
  }
}

function toggleRPassword() {
  const togglePassword = document.getElementById("toggleRPasswordID");
  const password = document.getElementById("senhaID");
  
  if (password.type == "password") {
    password.type = "text";
    togglePassword.classList.toggle("bi-eye");
  } else if (password.type == "text") {
    password.type = "password";
    togglePassword.classList.toggle("bi-eye");
  }
}

var countTab = 0;

function nextButton() {
    /* VARIAVEIS SENHA */
    const passwordInput = document.getElementById("senhaID");
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    /* VARIAVEIS NOME */
    const nameInput = document.getElementById("nameID");
    const nameRegex = /^[a-zA-ZÀ-ú ]+$/;
    /* VARIAVEIS TELEFONE */
    const phoneInput = document.getElementById("phoneID");
    const phoneRegex = /^(\+55)?\s*\(?([1-9]{2})\)?\s*([9]{1})?([6-9]{1}[0-9]{3})\-?([0-9]{4})$/;
    const phoneExp = /\(\d{2}\)\ \d{4}\-\d{4}/;
    /* VARIAVEIS CPF */
    const cpfInput = document.getElementById("cpfID");
    const cpfRegex = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;
    /* VARIAVEIS CEP */
    const cepInput = document.getElementById("cepID");
    const cepExp = /\d{2}\.\d{3}\-\d{3}/;
    /* VARIAVEIS NASCIMENTO*/
    const dateInput = document.getElementById("dateID");
    const dateExp =  /\d{2}\/\d{2}\/\d{4}/;
    
    /* VARIAVEIS INPUT */
    let input0 = document.getElementById("nameID");
    let input1 = document.getElementById("phoneID");
    let input2 = document.getElementById("cpfID");
    let input3 = document.getElementById("senhaID");
    let input4 = document.getElementById("dateID");
    let input5 = document.getElementById("cepID");
    
    /* CODIGO NOME E SOBRENOME */
if (!nameRegex.test(nameInput.value.trim()) || nameInput.value.length <= 10 || nameInput.value.length > 55) {
        document.getElementById("warningID").innerHTML = "Ops... Parece quê nem todos os campos foram preenchidos corretamente. Por favor, insira apenas letras e espaços.";
        document.getElementById("warningID").style.display = "block";
        document.getElementById("nameID").style.backgroundColor = "#f44336";
        document.getElementById("nameID").style.color = "#f9f9f9";
    } else if (countTab == 0) {
        countTab++;
        var name = document.getElementById("nameID").value;
        document.getElementById("tab0ID").style.display = "none";
        document.getElementById("tab1ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("step0ID").style.opacity = "0.5";
        document.getElementById("step1ID").style.opacity = "1";
    } else if (!phoneRegex.test(phoneInput.value.trim()) && !phoneExp.test(phoneInput.value.trim())) {
        document.getElementById("warningID").innerHTML = "Ops... Parece quê nem todos os campos foram preenchidos corretamente. Por favor, insira um número válido.";
        document.getElementById("warningID").style.display = "block";
        document.getElementById("phoneID").style.backgroundColor = "#f44336";
        document.getElementById("phoneID").style.color = "#f9f9f9";
    } else if (countTab == 1) {
        phoneNoRegex();
        countTab++;
        document.getElementById("tab1ID").style.display = "none";
        document.getElementById("tab2ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("step1ID").style.opacity = "0.5";
        document.getElementById("step2ID").style.opacity = "1";
    } else if (!cpfRegex.test(cpfInput.value.trim())) {
        document.getElementById("warningID").innerHTML = "Ops... Parece quê nem todos os campos foram preenchidos corretamente. Por favor, insira um endereço de e-mail válido.";
        document.getElementById("warningID").style.display = "block";
        document.getElementById("cpfID").style.backgroundColor = "#f44336";
        document.getElementById("cpfID").style.color = "#f9f9f9";
    } else if (countTab == 2) {
        validarCPF();
        countTab++;
        document.getElementById("tab2ID").style.display = "none";
        document.getElementById("tab3ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("step2ID").style.opacity = "0.5";
        document.getElementById("step3ID").style.opacity = "1";
    } else if (!passwordRegex.test(passwordInput.value.trim())) {
        document.getElementById("warningID").innerHTML = "Ops... Parece quê nem todos os campos foram preenchidos corretamente. Por favor, utilize letras maiúsculas, minúsculas é números em sua senha.";
        document.getElementById("warningID").style.display = "block";
        document.getElementById("senhaID").style.backgroundColor = "#f44336";
        document.getElementById("senhaID").style.color = "#f9f9f9";
    } else if (countTab == 3) {
        countTab++;
        document.getElementById("tab3ID").style.display = "none";
        document.getElementById("tab4ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("step3ID").style.opacity = "0.5";
        document.getElementById("step4ID").style.opacity = "1";
    } else if (dateExp.test(dateInput.value.trim())) {
        document.getElementById("warningID").innerHTML = "Ops... Parece quê nem todos os campos foram preenchidos corretamente. Por favor, utilize uma data de nascimento válido.";
        document.getElementById("warningID").style.display = "block";
        document.getElementById("dateID").style.backgroundColor = "#f44336";
        document.getElementById("dateID").style.color = "#f9f9f9";
    } else if (countTab == 4) {
        dateNoRegex();
        countTab++;
        document.getElementById("tab4ID").style.display = "none";
        document.getElementById("tab5ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("step4ID").style.opacity = "0.5";
        document.getElementById("step5ID").style.opacity = "1";
    }   else if (cepExp.test(cepInput.value.trim())) {
        document.getElementById("warningID").innerHTML = "Ops... Parece quê nem todos os campos foram preenchidos corretamente. Por favor, utilize um código postal válido.";
        document.getElementById("warningID").style.display = "block";
        document.getElementById("cepID").style.backgroundColor = "#f44336";
        document.getElementById("cepID").style.color = "#f9f9f9";
    } else if (countTab == 5) {
        cepNoRegex();
        countTab++;
        document.getElementById("tab5ID").style.display = "none";
        document.getElementById("tab6ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "block";
        document.getElementById("nextButtonID").style.display = "none";
        document.getElementById("step5ID").style.opacity = "0.5";
        document.getElementById("step6ID").style.opacity = "1";
    }
}

function validarCPF() {
    const cpfInputValue = document.getElementById("cpfID").value;
    var cpfNoRegex = cpfInputValue.replace(/\.|\-/g, '');
}

function phoneNoRegex() {
    const phoneInputValue = document.getElementById("phoneID").value;
    var phoneNoRegex = phoneInputValue.replace(/\D/g, '');
}

function dateNoRegex() {
    const dateInputValue = document.getElementById("dateID").value;
    var dateNoRegex = dateInputValue.replace(/\D/g, '');
}

function cepNoRegex() {
    const cepInputValue = document.getElementById("cepID").value;
    var cepNoRegex = cepInputValue.replace(/\D/g, '');
}