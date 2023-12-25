//Calculadora con JavaScript | Calculator with JavaScript

//Variables
var see_operation = "";
var hidden_operation = "";

//Funcion | Function
function agregar(valor) {

    //Si detecta AC, borra todo | If detect AC, delete all
    if (valor == 'C') {
        hidden_operation = "";
        see_operation = "";

    }
    //Si detecta A, borra el ultimo valor | If detect CE, delete the last value
    else if (valor == 'A') {
        hidden_operation = hidden_operation.substring(0, hidden_operation.length - 1);
        see_operation = see_operation.substring(0, see_operation.length - 1);
    }
    //Si detecta =, evalua la operacion | If detect =, evaluate the operation
    else if (valor == '=') {

        try {
            hidden_operation = eval(hidden_operation).toString();
            see_operation = hidden_operation;

        } catch (e) {

            see_operation = "Error";
        }
    }
    //Si detecta P, agrega el valor de pi | If detect P, add the value of pi
    else if (valor == 'P') {
        hidden_operation += 3.1416;
        see_operation += 'π';
    }
    //Si detecta e, agrega el valor de e | If detect e, add the value of e
    else if (valor == 'e') {
        hidden_operation += 2.71828;
        see_operation += 'e';
    }
    //Si detecta * muestra X | If detect *, show X
    else if (valor == '*') {
        hidden_operation += '*';
        see_operation += 'X';
    }
    //Si detecta ** muestra ^ | If detect **, show ^
    else if (valor == '**') {
        hidden_operation += '**';
        see_operation += '^';
    }
    //Si detecta R muestra √ | If detect R, show √
    else if (valor == 'R') {
        hidden_operation += 'Math.sqrt';
        see_operation += '√';
    }
    //Si detecta cualquier otro valor, lo agrega | If detect any other value, add it
    else {
        hidden_operation += valor;
        see_operation += valor;
    }

    //Muestra la operacion | Show the operation
    document.getElementById('calculator-input').value = see_operation;
}