//Calculadora con JavaScript | Calculator with JavaScript

//Variables
var see_operation = ""; 
var hidden_operation = "";

//Funcion | Function
function agregar(valor) {

    if(valor == 'AC') {
        see_operation = "";
        
    } else if(valor == '=') {
        
        try {
            see_operation = eval(see_operation).toString();
        } catch(e) {
            see_operation = "Error";
        }
    }

    see_operation += valor;
    document.getElementById('contacto-div__input').value = see_operation;
}


 /*
    switch(valor) {
        case 'AC':
            input = "";
            break;
        case '=':
            try {
                input = eval(input).toString();
            } catch(e) {
                input = "Error";
            }
            break;
        case 'Pi':
            input += Math.PI.toString();
            break;
        case 'e':
            input += Math.E.toString();
            break;
        default:
            input += valor;
    }
    */