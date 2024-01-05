//Calculadora con JavaScript | Calculator with JavaScript

//Variables
var seeOperation = "";
var hiddenOperation = "";

//Funcion | Function
function add(data) {

    //Si detecta AC, borra todo | If detect AC, delete all
    if (data == 'C') {

        hiddenOperation = "";
        seeOperation = "";

    }
    //Si detecta A, borra el ultimo valor | If detect CE, delete the last value
    else if (data == 'A') {

        hiddenOperation = hiddenOperation.substring(0, hiddenOperation.length - 1);
        seeOperation = seeOperation.substring(0, seeOperation.length - 1);
    }
    //Si detecta =, evalua la operacion | If detect =, evaluate the operation
    else if (data == '=') {

        try {

            hiddenOperation = eval(hiddenOperation).toString();
            seeOperation = hiddenOperation;

        } catch (e) {

            seeOperation = "Error";
        }
    }
    //Si detecta P, agrega el valor de pi | If detect P, add the value of pi
    else if (data == 'P') {

        hiddenOperation += 3.1416;
        seeOperation += 'π';

    }
    //Si detecta e, agrega el valor de e | If detect e, add the value of e
    else if (data == 'e') {

        hiddenOperation += 2.71828;
        seeOperation += 'e';

    }
    //Si detecta * muestra X | If detect *, show X
    else if (data == '*') {

        hiddenOperation += '*';
        seeOperation += 'X';

    }
    //Si detecta ** muestra ^ | If detect **, show ^
    else if (data == '**') {

        hiddenOperation += '**';
        seeOperation += '^';

    }
    //Si detecta R muestra √ | If detect R, show √
    else if (data == 'R') {

        hiddenOperation += 'Math.sqrt';
        seeOperation += '√';

    }
    //Si detecta cualquier otro valor, lo agrega | If detect any other value, add it
    else {

        hiddenOperation += data;
        seeOperation += data;
        
    }

    //Muestra la operacion | Show the operation
    document.getElementById('calculator-input').value = seeOperation;
}