// ESERCIZIO 1

function calculator(numbers) {
    function sum() {
        let sumTotal = 0;
        for (num of numbers) sumTotal += num;
        return sumTotal;
    }

    function sub() {
        let subTotal = numbers[0];
        for (num of numbers) subTotal -= num;
        return subTotal;
    }

    function mult() {
        let multTotal = numbers[0];
        for (num of numbers) multTotal *= num;
        return multTotal / numbers[0];
    }

    function div() {
        let divTotal = numbers[0];
        for (num of numbers) divTotal /= num;
        return divTotal * numbers[0];
    }

    return {
        sum: sum(),
        sub: sub(),
        mult: mult(),
        di: div()
    };
}

// ESERCIZIO 2

const sum = () => {numbers.reduce((acc, num) => acc + num)};
const sub = () => {numbers. reduce((acc, num) => acc - num)};
const mult = () => {numbers.reduce((acc, num) => acc * num)};
const div = () => {numbers.reduce((acc, num) => acc / num)};

// ESERCIZIO AVANZATO

const sqr = () => numbers.map(num => num * num);
const rad = () => numbers.map(num => Math.sqrt(num));

return {
    sum: sum(),
    sub: sub(),
    mult: mult(),
    div: div(),
    sqr: sqr(),
    rad: rad()
}