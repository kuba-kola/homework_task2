function calc() {
    const firstParam = +prompt("Введите первое значение");

    if (isNaN(firstParam)) {
        console.log('Некорректный ввод!');
        return;
    }

    const secondParam = +prompt("Введите второе значение");
    const sum = firstParam + secondParam;
    const quotient = firstParam / secondParam;
    if (isNaN(secondParam)) {
        console.log('Некорректный ввод!');
    } else {
        console.log(`Ответ: ${sum}, ${quotient}.`);
    }
}

calc();