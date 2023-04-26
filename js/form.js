/* DESIGNER NAVSIDE BUTTON */
function loginButton() {
    document.getElementById("loginID").style.display = "block";
}

function closerButton() {
    document.getElementById("loginID").style.display = "none";
}

function registerButton() {
    document.getElementById("registerID").style.display = "block";
}

function closerRButton() {
    document.getElementById("registerID").style.display = "none";
}


/* FUNCTION CONTA CRIADA */
function accountCreateMSG() {
    swal("Bom trabalho!", "Sua conta foi criada com sucesso!", "success");
}

/* FUNCTION CONTA LOGADA */
function accountLoginMSG() {
    swal("Bom trabalho!", "Sua conta foi logada com sucesso!", "success");
}

function previousButton() {
    if (countTab == 1) {
        countTab--;
        document.getElementById("tab1ID").style.display = "none";
        document.getElementById("tab0ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "none";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("nameID").style.backgroundColor = "#f9f9f9";
        document.getElementById("nameID").style.color = "#212121";
        document.getElementById("step1ID").style.opacity = "0.5";
        document.getElementById("step0ID").style.opacity = "1";
    } else if (countTab == 2) {
        countTab--;
        document.getElementById("tab2ID").style.display = "none";
        document.getElementById("tab1ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("phoneID").style.backgroundColor = "#f9f9f9";
        document.getElementById("phoneID").style.color = "#212121";
        document.getElementById("step2ID").style.opacity = "0.5";
        document.getElementById("step1ID").style.opacity = "1";
    } else if (countTab == 3) {
        countTab--;
        document.getElementById("tab3ID").style.display = "none";
        document.getElementById("tab2ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("cpfID").style.backgroundColor = "#f9f9f9";
        document.getElementById("cpfID").style.color = "#212121";
        document.getElementById("step3ID").style.opacity = "0.5";
        document.getElementById("step2ID").style.opacity = "1";
    } else if (countTab == 4) {
        countTab--;
        document.getElementById("tab4ID").style.display = "none";
        document.getElementById("tab3ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("senhaID").style.backgroundColor = "#f9f9f9";
        document.getElementById("senhaID").style.color = "#212121";
        document.getElementById("step4ID").style.opacity = "0.5";
        document.getElementById("step3ID").style.opacity = "1";
    } else if (countTab == 5) {
        countTab--;
        document.getElementById("tab5ID").style.display = "none";
        document.getElementById("tab4ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("dateID").style.backgroundColor = "#f9f9f9";
        document.getElementById("dateID").style.color = "#212121";
        document.getElementById("step5ID").style.opacity = "0.5";
        document.getElementById("step4ID").style.opacity = "1";
    } else if (countTab == 6) {
        countTab--;
        document.getElementById("tab6ID").style.display = "none";
        document.getElementById("tab5ID").style.display = "block";
        document.getElementById("previousButtonID").style.display = "block";
        document.getElementById("warningID").style.display = "none";
        document.getElementById("nextButtonID").style.display = "block";
        document.getElementById("registerRButtonID").style.display = "none";
        document.getElementById("cepID").style.backgroundColor = "#f9f9f9";
        document.getElementById("cepID").style.color = "#212121";
        document.getElementById("step6ID").style.opacity = "0.5";
        document.getElementById("step5ID").style.opacity = "1";
    }
}