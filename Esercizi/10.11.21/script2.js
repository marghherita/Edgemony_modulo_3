// ESERCIZIO 2

const sum = (numOne, numTwo) => numOne + numTwo;

const min = (numOne, numTwo) => numOne - numTwo;

const mult = (numOne, numTwo) => numOne * numTwo;

const div = (numOne, numTwo) => numOne / numTwo;

const pow = (numOne, numTwo) => Math.pow(numOne, numTwo);

const sqrt = (numOne, numTwo) => Math.sqrt(numOne) + Math.sqrt(numTwo);

try {
    function calculator(operation, numbers) {
        let totOperation = 0;
        totOperation = operation(...numbers);
        return totOperation;
    }


    let operationChoice = prompt(`Inserisci operazione: somma => +
                                                    sottrazione => -
                                                    moltiplicazione = *
                                                    divisione => /
                                                    potenza => primo numero (base), secondo numero(potenza)
                                                    radice qudrata => primo numero + secondo numero = numero da mettere sotto radice`);
    let numbersChoice = prompt('Inserisci numeri: ');

    if (operationChoice === "") {
        throw `operazione vuota`;
    } else if (numbersChoice === "") {
        throw `nessun numero`;
    } else if (operationChoice === "" && numbersChoice === "") {
        throw `nessun parametro`;
    }

    const numbers = numbersChoice.split(",");

    const parsedNumbers = [];

    for (x of numbers) {
        if (isNaN(x)) {

            alert("Not a number");
        } else if (typeof numbers[1] === "undefined") {
            console.log(numbers[0])
        }

        parsedNumbers.push(parseInt(x))

    }



    switch (operationChoice) {

        case "+":
            console.log(calculator(sum, parsedNumbers))
            break;

        case "-":
            console.log(calculator(min, parsedNumbers))
            break;

        case "*":
            console.log(calculator(mult, parsedNumbers))
            break;

        case "/":
            console.log(calculator(div, parsedNumbers))
            break;

        case "pow":
            console.log(calculator(pow, parsedNumbers))
            break;

        case "rad":
            console.log(calculator(sqrt, parsedNumbers))
            break;

        default:
            ('Operation not found');



    }


} catch (error) {

    switch (error) {
        case `operazione vuota`:
            console.error("Nessuna operazione è stata eseguita");

            break;

        case `nessun numero`:
            console.error("Nessun numero è stato inserito");

            break;

        case `nessun parametro`:
            console.error("Nessun parametro è stato inserito");

            break;
    }
}