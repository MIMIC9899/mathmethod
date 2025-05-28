function methods(){
    var checkboxes = document.getElementsByClassName('checkbox'); // получаем все чекбоксы
    var h = parseFloat(document.getElementById("eps").value);  // получаем значение шага из поля ввода с id "eps"
    var x0 = parseFloat(document.getElementById("x0").value); // получаем значение точки из поля ввода с id "x0"

    var checkboxesChecked = []; // создаем массив для хранения выбранных чекбоксов

    for (var index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value);  // добавляем выбранный чекбокс в массив
        }
    }
 /* Для каждого выбранного метода вызываем соответствующую функцию 
 и выводим результаты на страницу */
    checkboxesChecked.forEach(element => { 
        switch (element) {
            case "kra":
                printResults("kra", kra(x0, h), 1); // вывод конечно-разностная аппроксимация (центральная)
                break;
            case "mnk1":
                printResults("mnk1", mnk1(x0, h), 0);// вывод конечно-разностная аппроксимация (правых)
                break;
            case "mnk2":
                printResults("mnk2", mnk2(x0, h), 0);// вывод конечно-разностная аппроксимация (левых)
                break;
        }
    });
};

/* Функция для вывода результатов на страницу. Если resid_meth равен нулю,
то просто выводим число result_meth. Иначе формируем таблицу */
function printResults(title_meth, result_meth, resid_meth){
    var select = document.getElementById('results');

    if (resid_meth == 0){
        select.innerHTML = result_meth;}
    else{
      select.innerHTML = '<table> <tr><td>Правый</td><td>Левый</td><td>Центральный</td></tr><tr><td>'+ result_meth[0] +'</td><td>'+ result_meth[1] +'</td><td>'+ result_meth[2] +'</td></tr>';
    }

}
function ur(x){ // исходное уравнение
    return Math.sin(2*x) + Math.cos(x + 1);
}

function mnk1(x0, h){  //Конечно-разностная аппроксимация (правых)
    x1 = x0 - h;
    x2 = x0 + h;
    rez = (- 0.5 * ur(x1) + 0.5 * ur(x2)) / h;
    return rez;
}

function mnk2 (x0, h) { // Конечно-разностная аппроксимация (левых)
  x1 = x0 - h;
  x2 = x0 + h;
  rez = (-2 * ur(x0) + ur(x1) + ur(x2)) / (h * h);
  return rez;
}

function kra (x0, h){ //Конечно-разностная аппроксимация (центральная)
  x1 = x0 - h;
  x2 = x0 + h;
  rez = [(ur(x2) - ur(x0)) / h, (ur(x0) - ur(x1)) / h, (ur(x2) - ur(x1)) / (2 * h)];
  return rez;
}
