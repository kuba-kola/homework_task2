function calc() {
    const firstParam = +prompt('Введите первое значение');

    if (isNaN(firstParam)) {
        console.log('Некорректный ввод!');
        return;
    }

    const secondParam = +prompt('Введите второе значение');
    
    if (isNaN(secondParam)) {
        console.log('Некорректный ввод!');
    } else {
        const sum = firstParam + secondParam;
        const quotient = firstParam / secondParam;
        console.log(`Ответ: ${sum}, ${quotient}.`);
    }    
}

calc();