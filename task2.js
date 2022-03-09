const firstParam = +prompt("Введите первое значение");
    secondParam = +prompt("Введите второе значение");

if ((Number.isFinite(firstParam) == true) && Number.isFinite(secondParam) == true ) {  
    
    let sum = firstParam+secondParam;
    const quo = firstParam/secondParam;    
    console.log("Ответ:", sum, ",", quo)
}
else {
    console.log('Некорректный ввод!');
}
