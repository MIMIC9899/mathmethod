function graph(){
    var example = document.getElementById("graph-box");
    example.innerHTML = ("<canvas height='1000' width='1000' id='example'>Обновите браузер</canvas>");
    var ctx = document.getElementById("example").getContext('2d');

    var n = 100; // Число разбиений

    var tl = TableLocalization();

    var listX = [];
    var listY = [];

    var a = -5;

    for (let i = -1; i < 15; i+=0.2){
        if (Math.abs(F(i)) < Math.abs(F(a))){
            a = i;
        }
    }

    var b = a + 1 ;
    a -= 1;
    var h = (b - a) / n;

    for (let i = 0; i < n; i++){
        listX[i] = a + h * i;
    }

    for (let i = 0; i < n; i++){
        listY[i] = F(listX[i]);
    }

    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: listX,
            datasets: [{
                label: "",
                data: listY,
                backgroundColor: [
                ],
                borderColor: [
                    'blur'
                ],
                borderWidth: 1,
                pointStyle: 'line'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

//Табличная локализация
function TLB() {
    let tmp = TableLocalization();
    Get_t(tmp[0], tmp[1]);
}

function TableLocalization(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    var step = 2; //шаг
    var numRoot2 = 0; //количетво корней 2
    do{
        var numRoot1 = 0; //количество корней 1
        var tmp = a; //левая граница
        var X = new Array(); //список иксов
        var Y = new Array(); //список игриков
        step /= 2;
        while (tmp <= b){ //пока левая граница не приблизикся к правой
            tmp += step; //сдвиг левой границы на шаг
            X.push(tmp - step); //добавление икса в список
            Y.push(F(tmp - step)); //добавление игрика в список
            if (F(tmp) * F(tmp-step) < 0){ //проверка на смену знака
                numRoot1++; //увеличение счетчика
            }
        }
        if (numRoot1 != numRoot2){ //проверка на измение количества корней
            numRoot2 = numRoot1;
        } else {
            break; //выход из цикла
        }
    } while (true);
    return [X, Y];
}

function Get_t(X, Y){
    let equation = document.getElementById("tabl");
    var s_x = '<table class= "table_dark">';
    s_x += "<tr><td>X</td><td>Y</td></tr>";
    for (let i = 0; i < X.length; i++){
        s_x += "<tr><td>"+ X[i] +"</td><td>"+ Y[i] +"</td></tr>";
    }
    s_x += '</table>';
    equation.innerHTML = s_x;
}

function methods(){
    var checkboxes = document.getElementsByClassName('checkbox');
    var eps = parseFloat(document.getElementById("eps").value);

    var checkboxesChecked = [];

    for (var index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
        }
    }

    checkboxesChecked.forEach(element => {
        switch (element) {
            case "HalfDivision":
                print_2(HalfDivision(0.5, 1, eps), ['n', 'a', 'b', 'f(a)', 'f(b)', 'x', 'f(x)'])
                break;
            case "Chord":
                print_2(Chord(0.5, 1, eps), ['n', 'a', 'b', 'f(a)', 'f(b)', 'x', 'f(x)'])
                break;
            case "GoldenRatio":
                console.log(GoldenRatio(0.5, 1, eps));
                print_2(GoldenRatio(0.5, 1, eps), ['n', 'a', 'b', 'f(a)', 'f(b)', 'x1', 'x2', 'f(x1)', 'f(x2)'])
                break;
            case "Ridder":
                console.log(Ridder(0.5, 1, eps));
                print_2(Ridder(0.5, 1, eps), ['n', 'a', 'b', 'c', 'f(a)', 'f(b)', 'f(c)', 'x', 'f(x)'])
                break;
            case "Newton":
                console.log(Newton(0.5, 1, eps));
                print_2(Newton(0.5, 1, eps), ['n', 'x', 'f(x)', 'f`(x)'])
                break;
            case "ModificationNewton":
                console.log(ModificationNewton(0.5, 1, eps));
                print_2(ModificationNewton(0.5, 1, eps), ['n', 'x', 'f(x)', 'f`(x)'])
                break;
            case "Secant":
                console.log(Secant(0.5, 1, eps));
                print_2(Secant(0.5, 1, eps), ['n', 'x1', 'x0', 'f(x1)', 'f(x0)'])
                break;
            case "Muller":
                console.log(Muller(0.5, 1, eps));
                print_2(Muller(0.5, 1, eps), ['n', 'x3', 'x2', 'x1', 'f(x3)', 'f(x2)', 'f(x1)', 'q'])
                break;
            case "SimpleIteration":
                console.log(SimpleIteration(0.5, 1, eps));
                print_2(SimpleIteration(0.5, 1, eps), ['n', 'xT', 'b'])
                break;
        }
    });
}

function F(x){
    const contact = document.querySelectorAll('input[name="contact"]')
    var x_1_1 = parseFloat(document.getElementById("x_1_1").value);
    var x_1_2 = parseFloat(document.getElementById("x_1_2").value);
    var x_1_3 = parseFloat(document.getElementById("x_1_3").value);
    var x_1_4 = parseFloat(document.getElementById("x_1_4").value);
    var x_2_1 = parseFloat(document.getElementById("x_2_1").value);
    var x_2_2 = parseFloat(document.getElementById("x_2_2").value);
    var x_2_3 = parseFloat(document.getElementById("x_2_3").value);
    var x_3_1 = parseFloat(document.getElementById("x_3_1").value);
    var x_3_2 = parseFloat(document.getElementById("x_3_2").value);
    var x_3_3 = parseFloat(document.getElementById("x_3_3").value);

    for (const f of contact) {
        if (f.checked){
            if (f.value == 1) {
                return (x_1_1*Math.pow(x,3) + x_1_2*Math.pow(x,2) + x_1_3*x + x_1_4);
            }
            if (f.value == 2) {
                return (x_2_1*x + x_2_2*Math.sin(x) + x_2_3);
            }
            if (f.value == 3) {
                return (x_3_1 + x_3_2*Math.log(x) + x_3_3*Math.cos(2*x))
            }
        }
    }
}

function F_I(x){
    const contact = document.querySelectorAll('input[name="contact"]')
    var x_1_1 = parseFloat(document.getElementById("x_1_1").value);
    var x_1_2 = parseFloat(document.getElementById("x_1_2").value);
    var x_1_3 = parseFloat(document.getElementById("x_1_3").value);
    var x_2_1 = parseFloat(document.getElementById("x_2_1").value);
    var x_2_2 = parseFloat(document.getElementById("x_2_2").value);
    var x_3_2 = parseFloat(document.getElementById("x_3_2").value);
    var x_3_3 = parseFloat(document.getElementById("x_3_3").value);

    for (const f of contact) {
        if (f.checked){
            if (f.value == 1) {
                return (x_1_1*3*Math.pow(x,2) + x_1_2*2*x + x_1_3);
            }
            if (f.value == 2) {
                return (x_2_1 + x_2_2*Math.cos(x));
            }
            if (f.value == 3) {
                return ( x_3_2/x - x_3_3*2*Math.sin(2*x))
            }
        }
    }
}

function F_II(x){
    const contact = document.querySelectorAll('input[name="contact"]')
    var x_1_1 = parseFloat(document.getElementById("x_1_1").value);
    var x_1_2 = parseFloat(document.getElementById("x_1_2").value);
    var x_2_1 = parseFloat(document.getElementById("x_2_1").value);
    var x_2_2 = parseFloat(document.getElementById("x_2_2").value);
    var x_3_2 = parseFloat(document.getElementById("x_3_2").value);
    var x_3_3 = parseFloat(document.getElementById("x_3_3").value);
    for (const f of contact) {
        if (f.checked){
            if (f.value == 1) {
                return (x_1_1*6*x + x_1_2*2);
            }
            if (f.value == 2) {
              return (x_2_1 + x_2_2*Math.cos(x));
            }
          if (f.value == 3) {
                return ( x_3_2/x - x_3_3*2*Math.sin(2*x))
            }
        }
    }
}

function HalfDivision(a, b, eps)
{
    var lst_hist = new Array();
    var x; //искомое
    var count = 0; //счетчик итераций
    do
    {
        x = (a + b) / 2; //находим икс
        lst_hist[count] = [count, a, b, F(a), F(b), x, F(x)];
        if (F(x) * F(a) < 0) //проводим анализ постоянства знака функции
            b = x; //двигаем правую границу
        else
            a = x; //двигаем левую границу
        count++; //увеличиваем счетчик
    } while (Math.abs(F((a+b)/2)) > eps || Math.abs(b - a) > 2 * eps);

    return [lst_hist, x];
}

function Chord(a, b, eps)
{
    var lst_hist = new Array();
    var xTmp, x = 0; //искомое
    var count = 0; //счетчик итераций
    do
    {
        xTmp = x;
        x = a - (b - a) / (F(b) - F(a)) * F(a); //находим иксл
        lst_hist[count] = [count, a, b, F(a), F(b), x, F(x)];
        if (F(x) * F(a) < 0) //проводим анализ постоянства знака функции
            b = x; //двигаем правую границу
        else
            a = x; //двигаем левую границу
        count++; //увеличиваем счетчик
    } while (Math.abs(F(x)) > eps || Math.abs(x - xTmp) > eps); //проверка условия сходимости
    return [lst_hist, x];
}

function GoldenRatio(a, b, eps)
{
    var lst_hist = new Array();
    var x1, x2; //Xi и Xi+1
    var count = 0; //счетчик итераций
    var fi = 0.5 * (1.0 + Math.sqrt(5)); //число Фибаначи
    do
    {
        x1 = b - (b - a) / fi; //находим Xi
        x2 = a + (b - a) / fi; //находим Xi+1

        lst_hist[count] = [count, a, b, F(a), F(b), x1, F(x1), x2, F(x2)];

        if (F(a) * F(x1) < 0) //проводим анализ постоянства знака функции
            b = x1; //двигаем правую границу
        else if (F(x1) * F(x2) < 0)
        {
            a = x1; //двигаем левую границу
            b = x2; //двигаем правую границу
        }
        else
            a = x2; //двигаем левую границу
        count++; //увеличиваем счетчик
    } while (Math.abs(F((a + b) / 2)) > eps || Math.abs(b - a) > 2 * eps); //проверка

    return [lst_hist, x2];
}

function Ridder(a, b, eps)
{
    var lst_hist = new Array();
    var xTmp, c, x = 0;
    var count = 0;//счетчик итераций
    do
    {
        xTmp = x;
        c = (a + b) / 2; //Xi
        x = c + (c - a) * Math.sign(F(a) - F(b)) * F(c) / Math.sqrt(Math.pow(F(c), 2) - F(a) * F(b));//находим икс
        lst_hist[count] = [count, a, b, c, F(a), F(b),  F(c), x, F(x)];
        if (F(a) * F(x) < 0) //проводим анализ постоянства знака функции
            b = x; //двигаем правую границу
        else
            a = x; //двигаем левую границу
        count++; //увеличиваем счетчик
    } while (Math.abs(F(x)) > eps || Math.abs(x - xTmp) > eps); //проверка условия сходимостич
    return [lst_hist, xTmp];
}

function Newton(a, b, eps)
{
    var lst_hist = new Array();
    var x1, x2;
    var count = 0;
    console.log('conr');
    if (F(a) * F_II(a) < 0)
        x2 = b;
    else if (F(b) * F_II(b) < 0)
        x2 = a;
    else
        x2 = (a + b) / 2;
    do
    {
        x1 = x2;
        lst_hist[count] = [count, x1, F(x1), F_I(x1)];
        x2 = x1 - F(x1) / F_I(x1);
        count++;
    }
    while (Math.abs(x2 - x1) > eps || Math.abs(F(x1)) > eps);
    return [lst_hist, x2];
}

function ModificationNewton(a, b, eps)
{
    var lst_hist = new Array();
    var x1, x2, x0F;
    var count = 0;
    if (F(a) * F_II(a) < 0)
        x2 = b;
    else if (F(b) * F_II(b) < 0)
        x2 = a;
    else
        x2 = (a + b) / 2;
    x0F = F_I(x2);
    do
    {
        x1 = x2;
        lst_hist[count] = [count, x1, F(x1), F_I(x1)];
        x2 = x1 - F(x1) / x0F;
        count++;
    }
    while (Math.abs(x2 - x1) > eps || Math.abs(F(x1)) > eps);
    return [lst_hist, x2];
}

function Secant(a, b, eps)
{
    var lst_hist = new Array();
    var x1, x, x0;
    var count = 0;
    if (F(a) * F_II(a) < 0)
        x = b;
    else if (F(b) * F_II(b) < 0)
        x = a;
    else
        x = (a + b) / 2;
    x0 = x - Math.sign(x) * eps;
    do
    {
        x1 = x;
        lst_hist[count] = [count, x1, x0, F(x1), F(x0)];
        x = x1 - (x1 - x0) / (F(x1) - F(x0)) * F(x1);
        count++;
        x0 = x1;
    }
    while (Math.abs(x - x1) > eps || Math.abs(F(x1)) > eps);
    return [lst_hist, x];
}

function Muller(a, b, eps)
{
    var lst_hist = new Array();
    var x1, x, x2, x3, A, B, C, q, x_tmp_1, x_tmp_2;
    var count = 0;
    if (F(a) * F_II(a) < 0)
        x = b;
    else if (F(b) * F_II(b) < 0)
        x = a;
    else
        x = (a + b) / 2;
    x3 = x;
    x2 = x - Math.sign(x) * eps;
    x1 = x - 2 * Math.sign(x) * eps;
    do
    {
        q = (x3 - x2) / (x2 - x1);
        lst_hist[count] = [count, x3, x2, x1, F(x3), F(x2), F(x1), q];
        A = q * F(x3) - q * (1 + q) * F(x2) + Math.pow(q, 2) * F(x1);
        B = (2 * q + 1) * F(x3) - Math.pow(1 + q, 2) * F(x2) + Math.pow(q, 2) * F(x1);
        C = (1 + q) * F(x3);
        x_tmp_1 = x3 - (x3 - x2) * (2 * C) / (B - Math.sqrt(Math.pow(B, 2) - 4 * A * C));
        x_tmp_2 = x3 - (x3 - x2) * (2 * C) / (B + Math.sqrt(Math.pow(B, 2) - 4 * A * C));
        if (a <= x_tmp_1 && x_tmp_1 <= b)
            x = x_tmp_1;
        else
            x = x_tmp_2;
        x1 = x2; x2 = x3; x3 = x;
        count++;
    }
    while (Math.abs(x - x1) > eps || Math.abs(F(x1)) > eps);
    return [lst_hist, x3];
}

function SimpleIteration(a, b, eps)
{
    var lst_hist = new Array();
    var x, x0, xTmp, dX = Math.pow(10, 10);
    var count = 0;
    if (F(a) * F_II(a) < 0)
        x = b;
    else if (F(b) * F_II(b) < 0)
        x = a;
    else
        x = (a + b) / 2;
    x0 = x;
    do
    {
        xTmp = x;
        x = xTmp - F(xTmp)/F_I(x0);
        lst_hist[count] = [count, xTmp, x];
        dX = x - xTmp;
        count++;
    }
    while (Math.pow(dX, 2) > eps);
    return [lst_hist, x];
}


function print_2(meth, lnt){
    var select = document.getElementById('results');

    print_mess = ('x = '+meth[1]);

    select.innerHTML = print_mess;

}
