const sumar = ( num1, num2 ) => num1 + num2;

const restar = ( num1, num2 ) => num1 - num2;

const multiplicar = ( num1, num2 ) => num1 * num2;

const dividir = ( num1, num2 ) => num1 / num2;


function mostrarValores ( operacion, num1, num2 ){
    switch ( operacion ) {

        case "+":
            console.log(sumar ( num1, num2 ))
         break;
        case "-":
            console.log(restar ( num1, num2 ))
         break;
        case "*":
            console.log(multiplicar( num1, num2 ))
         break;
        case "/":
            console.log(dividir ( num1, num2 ))
            break;
         default:
            console.log("Operación no valida")
    }
}

let respuesta;
do{
    let num1, num2, operacion
    do{
        num1 = parseFloat(prompt("Ingrese número"))
        num2 = parseFloat(prompt("Ingrese número"))
        operacion = prompt("Ingrese una operación (+,-,*,/)")

        if(isNaN (num1) || isNaN(num2)){
            console.log("El número ingresado no es válido")
        }
        if (num2 === 0 && operacion == "/"){
            console.log("No se puede dividir entre cero")
        }
    }while((isNaN(num1) || isNaN(num2) || (num2 === 0 && operacion == "/")))
    mostrarValores(operacion, num1, num2)
    do{
        respuesta = prompt("Desea ingresar otra operación?").toLowerCase()
    }while (respuesta != "si" && respuesta != "no")
}while(respuesta != "no")
