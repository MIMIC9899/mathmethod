
function methods(){

    var checkboxes = document.getElementsByClassName('checkbox');

    var n = 10; // Число разбиений
    var a = parseFloat(document.getElementById("x_1_down").value);
    var b = parseFloat(document.getElementById("x_1_up").value);  // Левая и правая границы
    var h = (b - a) / n;; // Шаг разбиения
    var exListX = [ 0.3, 0.4, 0.7, 1.2, 1.5, 1.8, 2.0, 2.6 ]; // Список из 3 задания
    var exListY = [ 1.4, 1.5, 2.2, 3.4, 4.9, 4.3, 2.7, 1.2 ]; // Список из 3 задания
    var exectValues = [ 0.177099, 2.3, 0 ];  // Точные значения интегралов

    var checkboxesChecked = [];

    for (var index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
        }
    }

    checkboxesChecked.forEach(element => {
        switch (element) {
            case "LeftRect":
                printResult("Метод Левого Прямоугольника", LeftRect(FillMassive(a, h, n), h, n), GetDiscrepancy(LeftRect(FillMassive(a, h, n), h, n), exectValues));
                break;
            case "RightRect":
                printResult("Метод Правого Прямоугольника", RightRect(FillMassive(a, h, n), h, n), GetDiscrepancy(RightRect(FillMassive(a, h, n), h, n), exectValues));
                break;
            case "MiddleRect":
                printResult("Метод Среднего Прямоугольника", MiddleRect(FillMassive(a, h, n), h, n), GetDiscrepancy(MiddleRect(FillMassive(a, h, n), h, n), exectValues));
                break;
            case "Trapeze":
                printResult("Метод трапеций", Trapeze(FillMassive(a, h, n), h, n), GetDiscrepancy(Trapeze(FillMassive(a, h, n), h, n), exectValues));
                break;
            case "Parabola":
                printResult("Метод Симсона (парабол)", Parabola(FillMassive(a, h, n), h, n), GetDiscrepancy(Parabola(FillMassive(a, h, n), h, n), exectValues));
                break;
            case "NewtonCotes3":
                printResult("Ньютон-Котес n=3", NewtonCotes(FillMassive(a, h, n), 3, h, n), GetDiscrepancy(NewtonCotes(FillMassive(a, h, n), 3, h, n), exectValues));
                break;
            case "NewtonCotes4":
                printResult("Ньютон-Котес n=4", NewtonCotes(FillMassive(a, h, n), 4, h, n), GetDiscrepancy(NewtonCotes(FillMassive(a, h, n), 4, h, n), exectValues));
                break;
            case "Chebishev2":
                printResult("Чебышев m=2", Chebishev(2, FillMassive(a, h, n), h, n), GetDiscrepancy(Chebishev(2, FillMassive(a, h, n), h, n), exectValues));
                break;
            case "Chebishev3":
                printResult("Чебышев m=3", Chebishev(3, FillMassive(a, h, n), h, n), GetDiscrepancy(Chebishev(3, FillMassive(a, h, n), h, n), exectValues));
                break;
            case "LejandrGauss2":
                printResult("Лежандр-Гаусс m=2", LejandrGauss(2, FillMassive(a, h, n), h, n), GetDiscrepancy(LejandrGauss(2, FillMassive(a, h, n), h, n), exectValues));
                break;
            case "LejandrGauss3":
                printResult("Лежандр-Гаусс m=3", LejandrGauss(3, FillMassive(a, h, n), h, n), GetDiscrepancy(LejandrGauss(3, FillMassive(a, h, n), h, n), exectValues));
                break;
            case "Teylor":
                printResult("Разложение по ряду Тейлора", Teylor(FillMassive(a, h, n), h, n), GetDiscrepancy(Teylor(FillMassive(a, h, n), h, n), exectValues));
                break;
            case "MonteCarlo":
                printResult("Метод Монте-Карло", MonteCarlo(FillMassive(a, h, n), h, n), GetDiscrepancy(MonteCarlo(FillMassive(a, h, n), h, n), exectValues));
                break;
        }
    });


}

function printResult(title_meth, result_meth, discr_meth) {
    var select = document.getElementById('results');

    print_mess = '<table class="tbl">';
    print_mess += ("<tr><td>" + title_meth + "</td><td>" + "x = " + result_meth + "</td><td>" + "discrepancy = " + discr_meth + "</td></tr>");
    print_mess += '</table>';
    select.innerHTML = print_mess;
}

function FillMassive(a, h, n) // Создание массива используемых значений X
{
    var result = new Array();
    result[0] = a;
    for (let i = 1; i < n + 1; i++)
    {
        result[i] = result[i - 1] + h;
    }
    return result;
}

function FillArrInFuncs() // Возврат соответствующего типу массивзначений Х
{
    if (type != 2)
    {
        return FillMassive();
    }
    else
    {
        return exListX;
    }
}

function F(x) // Значение функции в точке X
{
    const contact = document.querySelectorAll('input[name="contact"]')
    var x_1_1 = parseFloat(document.getElementById("x_1_1").value);

    for (const type of contact) {
        if (type.checked){
            if (type.value == 1) {
                return (x_1_1 * Math.pow(x, 3) * Math.sin(x));
            }
            if (type.value == 2) {
                return (Math.pow(x, 2) - 2*x +3);
            }
            if (type.value == 3) {
                var index = exListX.indexOf(x);
                return (exListY[index]);
            }
        }
    }
}

function F_I(x){ // Значение функции в точке X        {
    const contact = document.querySelectorAll('input[name="contact"]')
    var x_1_1 = parseFloat(document.getElementById("x_1_1").value);

    for (const type of contact) {
        if (type.checked){
            if (type.value == 1) {
                return(x_1_1 * (Math.pow(x, 3) * Math.cos(x) + 3 * Math.pow(x, 2) * Math.sin(x)));
            }
            if (type.value == 2) {
                return (Math.pow(x, 2) - 2*x +3);
            }
            if (type.value == 3) {
                var index = exListX.indexOf(x);
                return (exListY[index]);
            }
        }
    }
}

function F_II(x){ // Значение функции в точке X{
    const contact = document.querySelectorAll('input[name="contact"]')
    var x_1_1 = parseFloat(document.getElementById("x_1_1").value);

    for (const type of contact) {
        if (type.checked){
            if (type.value == 1) {
                return (x_1_1 * x * (-Math.pow(x, 2) * Math.sin(x) + 6 * x * Math.cos(x) + 6 * Math.sin(x)));
            }
            if (type.value == 2) {
                return (Math.pow(x, 2) - 2*x +3);
            }
            if (type.value == 3) {
                var index = exListX.indexOf(x);
                return (exListY[index]);
            }
        }
    }
}

function LeftRect(arr, h, n) // Метод левого прямоугольника
{
    var sum = 0;
    for (let i = 0; i < n; i++)
    {
        var x = arr[i];
        sum += F(x) * h;
    }
    return sum;
}

function RightRect(arr, h, n) // Метод правого прямоугольника
{
    var sum = 0;
    for (let i = n - 1; i >= 0; i--)
    {
        var x = arr[i];
        sum += F(x) * h;
    }
    return sum;
}

function MiddleRect(arr, h, n) // Метод среднего прямоугольника
{
    var sum = 0;
    for (let i = 0; i < n; i++)
    {
        var x1 = arr[i];
        var x2 = arr[i + 1];
        var x = (x1 + x2) / 2;
        sum += F(x) * h;
    }
    return sum;
}

function Trapeze(arr, h, n) // Метод Трапеций
{
    var sum = 0;
    for (let i = 0; i < n; i++)
    {
        var x1 = arr[i];
        var x2 = arr[i + 1];
        sum += (F(x1) + F(x2)) / 2 * h;
    }
    return sum;
}

function Parabola(arr, h, n) // Метод Симпсона
{
    var sum = 0;
    for (let i = 0; i < n; i++)
    {
        var x1 = arr[i];
        var x3 = arr[i + 1];
        var x2 = arr[i] + (x3 - x1) / 2;
        sum += h / 6 * (F(x1) + 4 * F(x2) + F(x3));
    }
    return sum;
}

function NewtonCotes(arr, nk, h, n) // ФОрмулы Ньютона-Котеса высших поряд-ков
{
    var sum = 0;
    switch (nk) //nk порядок формулы
    {
        case 3:
            for (let i = 0; i < n; i++)
            {
                var x1 = arr[i]; // local A
                var x4 = arr[i + 1]; // local B
                var x2 = (2 * x1 + x4) / 3;
                var x3 = (x1 + 2 * x4) / 3;
                sum += h / 8 * (F(x1) + 3 * F(x2) + 3 * F(x3) + F(x4));
            }
            break;
        case 4:
            for (let i = 0; i < n; i++)
            {
                var x1 = arr[i]; // local A
                var x5 = arr[i + 1]; // local B
                var x2 = x1 + (x1 + x5) / 4;
                var x3 = x2 + (x1 + x5) / 4;
                var x4 = x3 + (x1 + x5) / 4;
                sum += h / 90 * (7 * F(x1) + 32 * F(x2) + 12 * F(x3)+ 32 * F(x4) + 7 * F(x5));
            }
            break;
    }
    return sum;
}

function ChebX(m){ // Элементы формулы Чебыш
    var chebX2 = [ -0.57735, 0.57735 ];
    var chebX3 = [ -0.707107, 0, 0.707107 ];
    if (m == 2) return chebX2;
    return chebX3;
}

function Chebishev(m, arr, h, n){ // Чебышев        {
    var sum = 0;
    var chebX = ChebX(m);
    for (let i = 0; i < n; i++)
        chebX.forEach((x) => {
            sum += F(arr[i] + h / 2 + h / 2 * x);
        })
    if (m == 3) return (sum * h / 3);
    return sum * h / 2;
}

function LejandrKoef(m){  // Элементы формулы Лежандра-Гаусса        {
    var lej2 = [ [ -0.57735027, 0.57735027 ], [ 1, 1 ] ]; // x и c длm=2
    var lej3 = [ [ -0.77459667, 0, 0.77459667 ], [ 0.55555556, 0.88888889, 0.55555556 ] ]; // x и c для m=3
    if (m == 2) return lej2;
    return lej3;
}

function LejandrGauss(m, arr, h, n){ // Метод Лежандра-Гаусса        {
    var sum = 0;
    var lejX = LejandrKoef(m);
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++)                {
            var x = arr[i] + h / 2 + h / 2 * lejX[0][j];
            var c = lejX[1][j];
            sum += c * F(x);
        }
    }
    return sum * h / 2;
}

function Teylor(arr, h, n){ // Разложение в ряд Тейлора        {
    var sum = 0;
    for (let i = 0; i < n; i++)            {
        var x = arr[i];
        sum += F(x) * h + F_I(x) * h * h / 2 + F_II(x) * h * h * h / 6;
    }
    return sum;
}

function MonteCarlo(arr, h, n){ // Метод Монте-Карло        {
    var sum = 0;
    for (let i = 0; i < n; i++)
        sum += F(arr[i]);
    sum = sum * h;
    return sum;
}

function GetDiscrepancy(ans, exectValues) // Вычисление невязок
{
    return Math.abs(exectValues[0] - ans);
}
