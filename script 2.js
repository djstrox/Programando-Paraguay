console.log("El pequenho john quiere saber cual de sus 3 numeros es el maypr y si los dos primeros son iguales")
function comparar(num1, num2, num3) {
    if (num1 === num2) {
        console.log("los primeros dos numeros son iguales");
        console.log("Los dos primeros numeros no son iguales u freaky ahh");
    }
    else if (num1 > num2, num1 > num3) {
        console.log(num1, "es el mayor de todos");
        console.log("Los dos primeros numeros no son iguales u freaky ahh");
    }
    else if (num2 > num1, num2 > num3) {
        console.log(num2, "es el mayor de todos");
        console.log("Los dos primeros numeros no son iguales u freaky ahh");
    }
    else {
        console.log(num3, "es el mayor de todos")
        console.log("Los dos primeros numeros no son iguales u freaky ahh");
    }
}
comparar(4, 52, 11);
comparar(6, 8, 13);
comparar(5, 98, 1126);
