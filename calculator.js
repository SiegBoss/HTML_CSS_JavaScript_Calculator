//Calculadora con JavaScript | Calculator with JavaScript

//Variables
var see_operation = ""; 
var hidden_operation = "";

//Funcion | Function
function agregar(valor) {

    //Si detecta AC, borra todo | If detect AC, delete all
    if(valor == 'AC') {
        hidden_operation = "";
       
    } 
    //Si detecta =, evalua la operacion | If detect =, evaluate the operation
    else if(valor == '=') {
        
        try {
            hidden_operation = eval(hidden_operation).toString();

        } catch(e) {

            hidden_operation = "Error al realizar la operacion";
        }

    }
    //Si detecta Pi, agrega el valor de Pi | If detect Pi, add the value of Pi
    else if(valor == 'Pi') {
        let pi = Math.PI.toString();
        let pi_rounded = pi.substring(0, 4);
        hidden_operation += pi_rounded;
    }
    //Si detecta e, agrega el valor de e | If detect e, add the value of e
    else if(valor == 'e') {
        let e = Math.E.toString();
        let e_rounded = e.substring(0, 5);
        hidden_operation += e_rounded;
    }
    //Si detecta cualquier otro valor, lo agrega | If detect any other value, add it
    else{

        hidden_operation += valor;
    }
    document.getElementById('contacto-div__input').value = hidden_operation;
}