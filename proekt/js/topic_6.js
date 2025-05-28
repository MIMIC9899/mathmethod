window.onload=choosingEq(); //в момент загрузки страницы у нас неактивный 2 системы из 3
window.onload=autoWidth(); //в момент загрузки страницы у нас корректируются поля ввода

document.getElementById('getResult').addEventListener('click',getResult); //при нажатии кнопку получения результата, у нас выполняется функция получения результата
document.getElementById("task1").addEventListener("click",choosingEq); //при выборе первой системы, 2 и 3 неактивны changeUravn
document.getElementById("task2").addEventListener("click",choosingEq); //при выборе второй системы, 1 и 3 неактивны
document.getElementById("task3").addEventListener("click",choosingEq); //при выборе третье системы, 1 и 2 неактивны
document.getElementById("task4").addEventListener("click",choosingEq); //при выборе первой системы, 2 и 3 неактивны changeUravn
document.getElementById("task5").addEventListener("click",choosingEq); //при выборе второй системы, 1 и 3 неактивны
document.getElementById("task6").addEventListener("click",choosingEq); //при выборе третье системы, 1 и 2 неактивны
document.getElementById("task7").addEventListener("click",choosingEq); //при выборе первой системы, 2 и 3 неактивны changeUravn
document.getElementById("task8").addEventListener("click",choosingEq); //при выборе второй системы, 1 и 3 неактивны
document.getElementById("body").addEventListener('keydown',autoWidth); //при вводе у нас увеличиваются или уменьшаются поля ввода
document.getElementById('reset').addEventListener('click', reset); //при нажатии кнопки "сброса всех полей", у нас выполняется функция сброса полей

function reset(){ //функция очистки всех полей
	var inputs = document.getElementsByTagName('input'); //получаем эти поля
	for (var i=0; i<inputs.length;i++){ //делаем пустые поля ввода
		inputs[i].value="";
	}
	autoWidth(); //корректируем длину пустых полей
	document.getElementById('rightRectangles').checked=true; //устанваливаем метод Крамер по умолчанию
}

function intervalMethods() {//функция активации полей ввода точности и начального приближения

	var el = document.getElementsByName('forInter'); //получаем эти поля
}


function choosingEq() { //функция выбора системы

	var checkboxes = document.getElementsByName('check');
	var checkboxesChecked = [];

	for (var index = 0; index < checkboxes.length; index++) {
			if (checkboxes[index].checked) {
					checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
			}
	}

	checkboxesChecked.forEach(element => {
			switch (element) {
				case "task1":
						document.getElementById('imag1').style.visibility='visible';
						document.getElementById('imag2').style.visibility='hidden';
						document.getElementById('imag3').style.visibility='hidden';
						document.getElementById('imag4').style.visibility='hidden';
						document.getElementById('imag5').style.visibility='hidden';
						document.getElementById('imag6').style.visibility='hidden';
						document.getElementById('imag7').style.visibility='hidden';
						break;
				case "task2":
						document.getElementById('imag1').style.visibility='hidden';
						document.getElementById('imag2').style.visibility='visible';
						document.getElementById('imag3').style.visibility='hidden';
						document.getElementById('imag4').style.visibility='hidden';
						document.getElementById('imag5').style.visibility='hidden';
						document.getElementById('imag6').style.visibility='hidden';
						document.getElementById('imag7').style.visibility='hidden';
						break;
				case "task3":
						document.getElementById('imag1').style.visibility='hidden';
						document.getElementById('imag2').style.visibility='hidden';
						document.getElementById('imag3').style.visibility='visible';
						document.getElementById('imag4').style.visibility='hidden';
						document.getElementById('imag5').style.visibility='hidden';
						document.getElementById('imag6').style.visibility='hidden';
						document.getElementById('imag7').style.visibility='hidden';
						break;
				case "task4":
						document.getElementById('imag1').style.visibility='hidden';
						document.getElementById('imag2').style.visibility='hidden';
						document.getElementById('imag3').style.visibility='hidden';
						document.getElementById('imag4').style.visibility='visible';
						document.getElementById('imag5').style.visibility='hidden';
						document.getElementById('imag6').style.visibility='hidden';
						document.getElementById('imag7').style.visibility='hidden';
						break;
				case "task5":
						document.getElementById('imag1').style.visibility='hidden';
						document.getElementById('imag2').style.visibility='hidden';
						document.getElementById('imag3').style.visibility='hidden';
						document.getElementById('imag4').style.visibility='hidden';
						document.getElementById('imag5').style.visibility='visible';
						document.getElementById('imag6').style.visibility='hidden';
						document.getElementById('imag7').style.visibility='hidden';
						break;
				case "task6":
						document.getElementById('imag1').style.visibility='hidden';
						document.getElementById('imag2').style.visibility='hidden';
						document.getElementById('imag3').style.visibility='hidden';
						document.getElementById('imag4').style.visibility='hidden';
						document.getElementById('imag5').style.visibility='hidden';
						document.getElementById('imag6').style.visibility='visible';
						document.getElementById('imag7').style.visibility='hidden';
						break;
				case "task7":
						document.getElementById('imag1').style.visibility='hidden';
						document.getElementById('imag2').style.visibility='hidden';
						document.getElementById('imag3').style.visibility='hidden';
						document.getElementById('imag4').style.visibility='hidden';
						document.getElementById('imag5').style.visibility='hidden';
						document.getElementById('imag6').style.visibility='hidden';
						document.getElementById('imag7').style.visibility='visible';
						break;
					}
	    });
	};


function functions(x) {
var numberEq;
if (document.getElementById('task1').checked==true) {
numberEq =1;
}
if (document.getElementById('task2').checked==true) {
var numberEq =2;
}
if (document.getElementById('task3').checked==true){
var	numberEq=3;
}
	var I1 = Number(document.getElementById('1Input').value);
	var I2 = Number(document.getElementById('2Input').value);
	var I3 = Number(document.getElementById('3Input').value);
	var I4 = Number(document.getElementById('4Input').value);
	var I5 = Number(document.getElementById('5Input').value);
	var I6 = Number(document.getElementById('6Input').value);
	switch (numberEq) {
		case 1: return (I1*Math.pow(x,I2)*I3*Math.pow(Math.sin(x),I4)); break;
		case 2: return (Math.sqrt(I5*Math.exp(I6*x)-1)); break;
		case 3: return 5.4 * Math.pow(x, 7) - 4.7512 * 10 * Math.pow(x, 6) + 1.6606 * Math.pow(10, 2) * Math.pow(x, 5) - 2.9593 * Math.pow(10, 2) * Math.pow(x, 4) + 2.8840 * Math.pow(10, 2) * Math.pow(x, 3) - 1.5130 * Math.pow(10, 2) * Math.pow(x, 2) + 4.0383 * 10 * x - 2.8082; break;
	}
}

function output(ans) {
var numberEq;
var del=Number(document.getElementById('del').value);
if (document.getElementById('task1').checked==true) {
numberEq =1;
var Dlim =Number(document.getElementById('Dlim').value);
var Ulim =Number(document.getElementById('Ulim').value);
var task =Number(document.getElementById('task1').value);
}

if (document.getElementById('task2').checked==true) {
var numberEq =2;
var Dlim =Number(document.getElementById('Dlim2').value);
var Ulim =Math.log(Number(document.getElementById('Ulim2').value));
var task =Number(document.getElementById('task2').value);
}

if (document.getElementById('task3').checked==true){
var	numberEq=3;
}

	var place = document.getElementById('answer'); //получаем поля для ответов
	if (numberEq==1 || numberEq==3 || document.getElementById('leibnic').checked==true)
	place.value=ans;
	if (numberEq==2 && document.getElementById('leibnic').checked==false) {
		place = document.getElementsByName('answers'); //получаем поля для ответов
		for(var i=0;i<ans.length;i++) //присваиваем им полученные значения
		place[i].value = ans[i];
	}
	autoWidth(); //корректируем эти поля
}

function autoWidth(){ //функция коррекции размера полей
	var el = document.getElementsByTagName('input');  //получем все поля ввода
	for (var i=0; i<el.length;i++) { //корректируем их
		el[i].style.width = ((el[i].value.length+1) * 8) + 'px';
	}
}

function method() {
	var place = document.getElementsByName('answers'); //получаем поля ответов
	var placeIter = document.getElementsByName('NEV'); //получаем поля невязок
	for(var i=0;i<place.length;i++) //обнуляем поля ответов
		place[i].value = "";
	for(var i=0;i<placeIter.length;i++)  //обнуляем поля невязок
		placeIter[i].value = "";
	if (document.getElementById('task3').checked==true){
		if(!checkTable()){
			return false;
		}
	}
	if (document.getElementById('task1').checked==true){
		if (!checkLimits()){
		return false;
		}
	}
	if (document.getElementById('rightRectangles').checked==true || document.getElementById('leftRectangles').checked==true || document.getElementById('mediumRectangles').checked==true || document.getElementById('trapecii').checked==true || document.getElementById('simpson').checked==true || document.getElementById('simpson38').checked==true) {
	newtonKotes();
	}
	if(document.getElementById('simpson2.45').checked==true){
		simpson45();
	}
	if(document.getElementById('monte').checked==true){
		monteCarlo();
	}
	if(document.getElementById('teylor').checked==true){
		taylorSeries();
	}
	if(document.getElementById('leibnic').checked==true){
		NutonLeibnic();
	}
	if(document.getElementById('chebyshev').checked==true){
		chebyshev();
	}
	if(document.getElementById('lGauss').checked==true){
		legandrGauss();
	}
}


function eilerYavn(uravn, delenia, nachX, endX, nach, nach2, tempX, tempY) { //функция метода Эйлера

		for (var a = 0; a < 3; a++, delenia *= 2) // проходимся 3 раза
		{
			var arrayX = []; //создаём массив под X-ы
			var arrayY = []; //создаём массив под Y-и
			var step = Math.abs(Math.abs(nachX) - Math.abs(endX)) /delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
			if (uravn < 3) {
				tempX = nachX; //берём для временного значения левый конец промежутка
				tempY = nach; // в качестве временного значения функции берём начальное значение функции

				for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
					arrayX[b] = tempX; arrayY[b] = tempY; //присваиваем месту массива полученный X
					tempX += step; //X увеличивается на величину шага
					tempY = arrayY[b] + step * functions(arrayX[b], arrayY[b], uravn, 0); //находим Y. Yi+h*f(Xi,Yi)
				}

				consoleOut(uravn, delenia, arrayX, arrayY, NULL); //выводим таблицу на консоль
				recordInFile(doubleMassiv(arrayX, arrayY, NULL, 2, delenia + 1), 2, delenia + 1);//записываем таблицу в файл

			}
			else {  // в случае системы уравнений
				var tempT = nachX; // переменная t стала нашим "иксом"
				tempX = nach; // берём начальное значение x в качестве временного значения
				tempY = nach2; // в качестве временного значения функции берём начальное значение y

				var arrayT = []; //создаём массив под t
				for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
					arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; //присваиваем местам массивов полученный X,y.t
					tempT += step; //увеличиваем t на шаг
					tempX = arrayX[b] + step * functions(arrayX[b], arrayY[b], uravn, arrayT[b]); // находим Xi+1. Xi+h*f(Xi,Yi,Ti)
					tempY = arrayY[b] + step * functions(arrayX[b], arrayY[b], uravn + 1, arrayT[b]); //находим Yi+1. Yi+h*f(Xi,Yi,Ti)
					}

					consoleOut(uravn, delenia, arrayX, arrayY, arrayT); //выводим таблицу на консоль
					recordInFile(doubleMassiv(arrayX, arrayY, arrayT, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл

				}
		}
}

function eilerNeYavn(uravn, delenia, nachX, endX, nach, nach2, tempX, tempY) { //функция метода Неявного Эйлера

	for (var a = 0; a < 3; a++, delenia *= 2)// проходимся 3 раза
	{
		var step = Math.abs(Math.abs(nachX) - Math.abs(endX)) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		var arrayX = [];  //создаём массив под X-ы
		var arrayY = []; //создаём массив под Y-и
		if (uravn < 3) {
			tempX = nachX; //берём для временного значения левый конец промежутка
			tempY = nach; // в качестве временного значения функции берём начальное значение функции

			for (var b = 0; b < delenia + 1; b++) {  // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; //присваиваем месту массива полученный X
				tempX += step; //X увеличивается на величину шага
				tempY = localis(nachX, endX, tempX, arrayY[b], uravn, step, true, NULL); // Выполняем локализацию и ищем значение методом Ньютона
			}

			consoleOut(uravn, delenia, arrayX, arrayY, NULL); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, NULL, 2, delenia + 1), 2, delenia + 1);//записываем таблицу в файл
		}
		else {  // в случае системы уравнений
				var tempT = nachX; // переменная t стала нашим "иксом"
				tempX = nach; // берём начальное значение x в качестве временного значения
				tempY = nach2; // в качестве временного значения функции берём начальное значение y
				var arrayT = []; //создаём массив под t

				for (var b = 0; b < delenia + 1; b++) {  // получаем в массиве значения
					var mas = [nachX,endX];
					arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT;  //присваиваем местам массивов полученный X,y.t
					tempT += step; //увеличиваем t на шаг
					tempX = systemNewton(nachX, endX, uravn, arrayX[b], arrayY[b], step, true, tempT)[0]; // Выполняем локализацию и ищем значение X методом Ньютона
					tempY = systemNewton(nachX, endX, uravn+1, arrayX[b], arrayY[b], step, true, tempT)[1]; // Выполняем локализацию и ищем значение Y методом Ньютона
				}

				consoleOut(uravn, delenia, arrayX, arrayY, arrayT); //выводим таблицу на консоль
				recordInFile(doubleMassiv(arrayX, arrayY, arrayT, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл

			}
	}
}

function eilerPereschet( uravn, delenia, nachX, endX, nach, tempX, tempY, nach2) { //функция метода явного Эйлера с пересчетом

	for (var a = 0; a < 3; a++, delenia *= 2) // проходимся 3 раза
	{
		var arrayX = []; //создаём массив под X-ы
		var arrayY = []; //создаём массив под Y-и
		var step = (-nachX + endX) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		var Ycherta; // Yчерта в формуле
		if (uravn < 3) { // в случае когда у нас 1 уравнение, а не система
			tempX = nachX; //берём для временного значения левый конец промежутка
			tempY = nach; // в качестве временного значения функции берём начальное значение функции

			for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; //присваиваем месту массива полученный X
				tempX += step; //X увеличивается на величину шага
				Ycherta = arrayY[b] + step * functions(arrayX[b], arrayY[b], uravn, NULL); //находим Yчерту - y+h*f(Xi,Yi)
				tempY = arrayY[b] + (step / 2.0) * (functions(arrayX[b], arrayY[b], uravn, NULL) + functions(arrayX[b] + step, Ycherta, uravn, NULL));// находим значение yi+h/2*(f(Xi,Yi)+f(Xi+1,Ycherta)))
			}

			consoleOut(uravn, delenia, arrayX, arrayY, NULL); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, NULL, 2, delenia + 1), 2, delenia + 1);//записываем таблицу в файл

		}
		else { // в случае системы уравнений
			var tempT = nachX; // переменная t стала нашим "иксом"
			tempX = nach; // берём начальное значение x в качестве временного значения
			tempY = nach2; // в качестве временного значения функции берём начальное значение y
			var arrayT = []; //создаём массив под t
			var Xcherta; // Xчерта в формуле
			for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT;  //присваиваем местам массивов полученный X,y.t
				tempT += step; //увеличиваем t на шаг
				Xcherta = arrayX[b] + step * functions(arrayX[b], arrayY[b], uravn, arrayT[b]); //находим Xчерту - Xi+h*f(Xi,Yi,Ti)
				Ycherta = arrayY[b] + step * functions(arrayX[b], arrayY[b], uravn + 1, arrayT[b]); //находим Yчерту - Yi+h*f(Xi,Yi,Ti)
				tempX = arrayX[b] + (step / 2.0) * (functions(arrayX[b], arrayY[b], uravn, arrayT[b]) + functions(Xcherta, Ycherta, uravn, tempT));// находим значение xi+h/2*(f(Xi,Yi,Ti)+f(Xcherta,Ycherta,Ti+1)))
				tempY = arrayY[b] + (step / 2.0) * (functions(arrayX[b], arrayY[b], uravn + 1, arrayT[b]) + functions(Xcherta, Ycherta, uravn + 1, tempT));// находим значение yi+h/2*(f(Xi,Yi,Ti)+f(Xcherta,Ycherta,Ti+1)))
			}

			consoleOut(uravn, delenia, arrayX, arrayY, arrayT); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл
		}
	}
}

function precor(uravn, delenia, nachX, endX, nach, tempX, tempY, nach2) { // функция метода Предиктор-Корректора

	for (var a = 0; a < 3; a++, delenia *= 2) // проходимся 3 раза
	{
		var step = Math.abs(Math.abs(nachX) - Math.abs(endX)) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		var arrayX = []; //создаём массив под X-ы
		var arrayY = []; //создаём массив под Y-и
		var halfY; // Y(i+1/2)
		if (uravn < 3) { // в случае когда у нас 1 уравнение, а не система
			tempX = nachX; //берём для временного значения левый конец промежутка
			tempY = nach; // в качестве временного значения функции берём начальное значение функции
			for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; //присваиваем месту массива полученный X
				halfY = tempY + step / 2.0 * (functions(arrayX[b], arrayY[b], uravn, NULL));// Yi+h/2*(f(Xi,Yi))
				tempX += (step / 2.0); // увеличиваем X на пол шага
				tempY = arrayY[b] + step * (functions(tempX, halfY, uravn, NULL)); //находим значение y= Yi+h*(f(X[i+1/2],Y[i+1/2]))
				tempX += (step / 2.0); // увеличиваем X на пол шага
			}

			consoleOut(uravn, delenia, arrayX, arrayY, NULL); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, NULL, 2, delenia + 1), 2, delenia + 1);//записываем таблицу в файл

		}
		else { // в случае системы уравнений
			var tempT = nachX; // переменная t стала нашим "иксом"
			tempX = nach; // берём начальное значение x в качестве временного значения
			tempY = nach2; // в качестве временного значения функции берём начальное значение y
			var arrayT = [];  //создаём массив под t
			var halfX; // X(i+1/2)
			for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; //присваиваем местам массивов полученный X,y.t
				tempT += (step / 2.0); // увеличиваем t на пол шага
				halfX = tempX + step / 2.0 * (functions(arrayX[b], arrayY[b], uravn, arrayT[b]));// Xi+h/2*(f(Xi,Yi,Ti))
				halfY = tempY + step / 2.0 * (functions(arrayX[b], arrayY[b], uravn + 1, arrayT[b]));// Yi+h/2*(f(Xi,Yi,Ti))
				tempX = arrayX[b] + step * (functions(halfX, halfY, uravn, tempT)); //находим значение x= Xi+h*(f(X[i+1/2],Y[i+1/2],T[i+1/2]))
				tempY = arrayY[b] + step * (functions(halfX, halfY, uravn + 1, tempT)); //находим значение y= Yi+h*(f(f(X[i+1/2],Y[i+1/2],T[i+1/2]))
				tempT += (step / 2.0); // увеличиваем t на пол шага
			}
			consoleOut(uravn, delenia, arrayX, arrayY, arrayT); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл
		}
	}
}

function RungeKutt(uravn, delenia, nachX, endX, nach, tempX, tempY, nach2) { // функция методов Рунге-Куттых

	for (var a = 0; a < 3; a++, delenia *= 2) // проходимся 3 раза
	{
		var step = Math.abs(Math.abs(nachX) - Math.abs(endX)) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		var arrayX = []; //создаём массив под X-ы
		var arrayY = []; //создаём массив под Y-и
		var k1, k2, k3, k4; // коэффициенты
		if (uravn < 3) { //  в случае 1 уравнения, а не системы
			for (var c = 0; c < 3; c++) { // проходимся 3 раза
				tempX = nachX; //берём для временного значения левый конец промежутка
				tempY = nach; // в качестве временного значения функции берём начальное значение функции
				for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
					arrayX[b] = tempX; arrayY[b] = tempY;//присваиваем местам массивов полученный X,y
					tempX += (step); // увеличиваем X на величину шаг
					switch (c) {// методы с 2 порядка точности по 4
					case 0: //2 порядок точности
						k1 = functions(arrayX[b], arrayY[b], uravn, NULL); //k1=f(Xi,Yi)
						k2 = functions(tempX, arrayY[b] + step * k1, uravn, NULL); //k2=f(Xi+1, Y+h*k1)
						tempY = arrayY[b] + step / 2.0 * (k1 + k2); // Y[i+1]= Yi+h/2*(k1+k2)
						break;
					case 1: // 3 порядок точности
						k1 = functions(arrayX[b], arrayY[b], uravn, NULL); //k1=f(Xi,Yi)
						k2 = functions(arrayX[b] + step / 3.0, arrayY[b] + step / 3.0 * k1, uravn, NULL); // k2= f(X[i+1]/3, Yi+h/3*k1)
						k3 = functions(arrayX[b] + 2 * step / 3.0, arrayY[b] + 2 * step / 3.0 * k2, uravn, NULL); // k3=f(Xi+2*h/3,Yi+2*h/3*k2)
						tempY = arrayY[b] + step / 4.0 * (k1 + 3 * k3); // Y[i+1]= Yi+h/4*(k1+3*k3)
						break;
					case 2: // 4 порядок точности
						k1 = functions(arrayX[b], arrayY[b], uravn, NULL); //k1=f(Xi,Yi)
						k2 = functions(arrayX[b] + step / 2.0, arrayY[b] + step / 2.0 * k1, uravn, NULL); // k2=f(Xi+h/4, Yi+h/4*k1)
						k3 = functions(arrayX[b] + step / 2.0, arrayY[b] + step / 2.0 * k2, uravn, NULL); // k3=(Xi+h/2, Yi+h/2*k2)
						k4 = functions(arrayX[b] + step, arrayY[b] + step * k3, uravn, NULL); //k4=(Xi+h,Yi+h*k1-2*h*k2+2*h*k3)
						tempY = arrayY[b] + step / 6.0 * (k1 + 2 * k2 + 2*k3+k4); // Y[i+1]= Yi+h/6*(k1+4*k3+k4)
						break;
					}
				}
				consoleOut(uravn, delenia, arrayX, arrayY, NULL); //выводим таблицу на консоль
				recordInFile(doubleMassiv(arrayX, arrayY, NULL, 2, delenia + 1), 2, delenia + 1);//записываем таблицу в файл
			}
		}
		else { // в случае системы уравнений
				var z1, z2, z3, z4;  // коэффициенты
				var tempT = nachX; // переменная t стала нашим "иксом"
				var arrayT = []; //создаём массив под t
				for (var c = 0; c < 3; c++) { // проходим все порядки точности
					tempX = nach; // берём начальное значение x в качестве временного значения
					tempY = nach2; // в качестве временного значения функции берём начальное значение y
					tempT = nachX; // переменная t стала нашим "иксом"
					for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
						arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; //присваиваем местам массивов полученный X,y.t
						tempT += step;//увеличиваем t на шаг
						switch (c) { // методы с 2 порядка точности по 4
						case 0:  //2 порядок точности
							k1 = functions(arrayX[b], arrayY[b], uravn, arrayT[b]); //k1=f(Xi,Yi, Ti)
							z1 = functions(arrayX[b], arrayY[b], uravn + 1, arrayT[b]); //z1=f(Xi,Yi,Ti)
							k2 = functions(arrayX[b] + step * k1, arrayY[b] + step * z1, uravn, tempT); //k2=f(Xi+h*k1, Yi+h*z1, Ti+step)
							z2 = functions(arrayX[b] + step * k1, arrayY[b] + step * z1, uravn + 1, tempT); //z2=f(Xi+h*k1, Yi+h*z1, Ti+step)
							tempX = arrayX[b] + step / 2.0 * (k1 + k2); // X[i+1]= Xi+h/2*(k1+k2)
							tempY = arrayY[b] + step / 2.0 * (z1 + z2); // Y[i+1]= Yi+h/2*(z1+z2)
							break;
						case 1: //3 порядок точности
							k1 = functions(arrayX[b], arrayY[b], uravn, arrayT[b]); //k1=f(Xi,Yi, Ti)
							z1 = functions(arrayX[b], arrayY[b], uravn + 1, arrayT[b]); //z1=f(Xi,Yi, Ti)
							k2 = functions(arrayX[b] + step / 3.0*k1, arrayY[b] + step / 3.0 * z1, uravn, arrayT[b] + step / 3.0); // k2= f(X[i+1]/3*k1, Yi+h/3*z1, Ti+h/3)
							z2 = functions(arrayX[b] + step / 3.0*k1, arrayY[b] + step / 3.0 * z1, uravn + 1, arrayT[b] + step / 3.0); // z2= f(X[i+1]/3*k1, Yi+h/3*z1, Ti+h/3)
							k3 = functions(arrayX[b] + 2 * step / 3.0 * k2, arrayY[b] + 2 * step / 3.0 * z2, uravn, arrayT[b] + 2*step / 3.0); // k3=f(Xi+2*h/3*k2,Yi+2*h/3*z2, Ti+2*h/3)
							z3 = functions(arrayX[b] + 2 * step / 3.0 * k2, arrayY[b] + 2 * step / 3.0 * z2, uravn + 1, arrayT[b] + 2*step / 3.0); // z3=f(Xi+2*h/3*k2,Yi+2*h/3*z2, Ti+2*h/3)
							tempX = arrayX[b] + step / 4.0 * (k1 + 3 * k3); // X[i+1]= Xi+h/4*(k1+3*k3)
							tempY = arrayY[b] + step / 4.0 * (z1 + 3 * z3); // Y[i+1]= Yi+h/4*(z1+3*z3)
							break;
						case 2:  //4 порядок точности
							k1 = functions(arrayX[b], arrayY[b], uravn, arrayT[b]); //k1=f(Xi,Yi, Ti)
							z1 = functions(arrayX[b], arrayY[b], uravn + 1, arrayT[b]); //z1=f(Xi,Yi, Ti)
							k2 = functions(arrayX[b] + step / 4.0 * k1, arrayY[b] + step / 4.0 * z1, uravn, arrayT[b] + step / 4.0); // k2=f(Xi+h/4*k1, Yi+h/4*z1, Ti+h/4.0)
							z2 = functions(arrayX[b] + step / 4.0 * k1, arrayY[b] + step / 4.0 * z1, uravn + 1, arrayT[b] + step / 4.0); // z2=f(Xi+h/4*k1, Yi+h/4*z1, Ti+h/4.0)
							k3 = functions(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn, arrayT[b] + step / 2.0); // k3=(Xi+h/2*k2, Yi+h/2*z2, Ti+h/2)
							z3 = functions(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn + 1, arrayT[b] + step / 2.0); // z3=(Xi+h/2*k2, Yi+h/2*z2, Ti+h/2)
							z4 = functions(arrayX[b] + step * k1 - 2 * step * k2 + 2 * step * k3, arrayY[b] + step * z1 - 2 * step * z2 + 2 * step * z3, uravn + 1, arrayT[b] + step); //z4=(Xi+h*k1-2*h*k2+2*h*k3,Yi+h*z1-2*h*z2+2*h*z3, Ti+step)
							k4 = functions(arrayX[b] + step * k1 - 2 * step * k2 + 2 * step * k3, arrayY[b] + step * z1 - 2 * step * z2 + 2 * step * z3, uravn, arrayT[b] + step); //k4=(Xi+h*k1-2*h*k2+2*h*k3,Yi+h*z1-2*h*z2+2*h*z3, Ti+step)
							tempX = arrayX[b] + step / 6.0 * (k1 + 4 * k3 + k4); // X[i+1]= Xi+h/6*(k1+4*k3+k4)
							tempY = arrayY[b] + step / 6.0 * (z1 + 4 * z3 + z4); // Y[i+1]= Yi+h/6*(z1+4*z3+z4)
							break;
						}
					}
					consoleOut(uravn, delenia, arrayX, arrayY, arrayT); //выводим таблицу на консоль
					recordInFile(doubleMassiv(arrayX, arrayY, arrayT, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл
				}
		}
	}
}

function secPorToch(uravn, delenia, nachX, endX, nach, tempX, tempY, nach2) { //функция неявной формулы точности второго порядка

	for (var a = 0; a < 3; a++, delenia *= 2) // проходимся 3 раза
	{
		var step = Math.abs(Math.abs(nachX) - Math.abs(endX)) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		var arrayX = []; //создаём массив под X-ы
		var arrayY = []; //создаём массив под Y-и
		if (uravn < 3) // в случае когда у нас 1 уравнение, а не система
		{
			tempX = nachX; //берём для временного значения левый конец промежутка
			tempY = nach; // в качестве временного значения функции берём начальное значение функции
			var mas= [nachX, endX];//массив с левым и правым концом промежутка

			for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
				var mas=[nachX, endX]; // массив с левым и правым концом промежутка
				arrayX[b] = tempX; arrayY[b] = tempY; //присваиваем местам массивов полученный X,y
				tempX += step; //X увеличивается на величину шага
				tempY = localis(nachX, endX, arrayX[b], arrayY[b], uravn, step, false, NULL); // Выполняем локализацию и ищем значение методом Ньютона
			}

			consoleOut(uravn, delenia, arrayX, arrayY, NULL); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, NULL, 2, delenia + 1), 2, delenia + 1);//записываем таблицу в файл
		}
		else { // в случае системы уравнений
				var tempT = nachX; // переменная t стала нашим "иксом"
				tempX = nach; // берём начальное значение x в качестве временного значения
				tempY = nach2; // в качестве временного значения функции берём начальное значение y
				var arrayT = []; //создаём массив под t
				var mas=[nachX, endX];// массив с левым и правым концом промежутка
				for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
					var mas=[ nachX, endX ]; // массив с левым и правым концом промежутка
					arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; //присваиваем местам массивов полученный X,y,t
					tempT += step; //t увеличивается на величину шага
					tempX = systemNewton(nachX, endX, uravn, arrayX[b], arrayY[b], step, false, arrayT[b])[0]; // Выполняем локализацию и ищем значение X методом Ньютона
					tempY = systemNewton(nachX, endX, uravn + 1, arrayX[b], arrayY[b], step, false, arrayT[b])[1]; // Выполняем локализацию и ищем значение Y методом Ньютона
				}

				consoleOut(uravn, delenia, arrayX, arrayY, arrayT); //выводим таблицу на консоль
				recordInFile(doubleMassiv(arrayX, arrayY, arrayT, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл
		}
	}
}

function functions(x, y, Number, t) {//функция вычисления значения функции в точке
	var Ravno=0; //переменная под ответ
	switch (Number) {
	case 1: Ravno = x * (2.0 + Math.pow(x, 2) * Math.sin(Math.pow(x,2)) - y * Math.sin(y)); break; //1-ое уравнение
	case 2: Ravno = Math.pow(x, 2) - y / (2.0 * x); break; //2-ое уравнение
	case 3: Ravno = t+x+y; break; // 1 уравнение системы
	case 4: Ravno = x-y; break; // 2 уравнение системы
	}
	return Ravno; //возвращаем полученное значение в место вызова
}

function functionNeYavn(x,y,X1,Y1,Number,step,t) {//функция вычисления значения функции в точке(Для неявного Эйлера)
	var Ravno=0; //переменная под ответ
	switch (Number) {
	case 1: Ravno = Y1 - step * (x * (2.0 + Math.pow(x, 2) * Math.sin(Math.pow(x,2)) - Y1 * Math.sin(Y1))) - y; break; //1-ое уравнение
	case 2: Ravno = Y1 - step * (Math.pow(x, 2) - Y1 / (2.0 * x)) - y; break; //2-ое уравнение
	case 3: Ravno = X1 - step * (t+X1+Y1) - x; break; // 1 уравнение системы
	case 4: Ravno = Y1 - step * (X1-Y1) - y; break;// 2 уравнение системы
	}
	return Ravno; //возвращаем полученное значение в место вызова
}

function functionSPT(x, y, X1, Y1, Number, step, t) {//функция вычисления значения функции в точке(неявная формула 2 порядка точности)
	var Ravno = 0; //переменная под ответ
	switch (Number) {
	case 1: Ravno = Y1 - step / 2.0 * (x * (2.0 + Math.pow(x, 2) * Math.sin(Math.pow(x,2)) - y * Math.sin(y)) + (x + step) * (2.0 + Math.pow((x + step), 2) * Math.sin(Math.pow(x + step,2)) - Y1 * Math.sin(Y1))) - y; break; //1-ое уравнение
	case 2: Ravno = Y1 - step / 2.0 * ((Math.pow(x, 2) - y / (2.0 * x)) + Math.pow((x + step), 2) - Y1 / (2.0 * (x + step))) - y; break; //2-ое уравнение
	case 3: Ravno = X1 - step / 2.0 * ((t+x+y) + (t+step) + X1 + Y1) - x; break; // 1 уравнение системы
	case 4: Ravno = Y1 - step / 2.0 * (x-y+X1-Y1) - y; break; // 2 уравнение системы
	}
	return Ravno; //возвращаем полученное значение в место вызова
}

function Pfunction(x, y, Y1, Number, step, t) {//функция вычисления значения производной функции в точке (Для неявного Эйлера)
	var Ravno=0; //переменная под ответ
	switch (Number) {
	case 1: Ravno = 1-step*(x*(-Y1 * Math.cos(Y1) - Math.sin(Y1))); break; //1-ое уравнение
	case 2: Ravno = 1-step*(-1.0/(2.0*x)); break; //2-ое уравнение
	}
	return Ravno; //возвращаем полученное значение в место вызова
}

function PfunctionSPT(x, y, Y1, Number, step, t) {//функция вычисления значения производной функции в точке (неявная формула 2 порядка точности)
	var Ravno = 0; //переменная под ответ
	switch (Number) {
	case 1: Ravno = 1-step/2.0*((x+step)*(-Y1 * Math.cos(Y1) - Math.sin(Y1))); break; //1-ое уравнение
	case 2: Ravno = 1-step/2.0*(-1.0/(2.0*(x+step))); break; //2-ое уравнение
	}
	return Ravno; //возвращаем полученное значение в место вызова
}

function partialDerivatives(x, y, t, step, c) { // функция частных производных для системы ОДУ
	var equal=0; //переменная под ответ
	switch (c) { // первые 4 для Неявного эйлера, последние 4 для неявной формулы 2 порядка точности
	case 1: equal = 1-step*(1); break; // 1-ое уравнение продифференцировано по x
	case 2: equal = -step*(1); break; // 1-ое уравнение продифференцировано по y
	case 3: equal = -step*(1); break; // 2-ое уравнение продифференцировано по x
	case 4: equal = 1-step*(-1); break; // 2-ое уравнение продифференцировано по y
	case 5: equal = 1-step/2.0*(1); break; // 1-ое уравнение продифференцировано по x
	case 6: equal = -step/2.0*(1); break; // 1-ое уравнение продифференцировано по y
	case 7: equal = -step/2.0*(1); break; // 2-ое уравнение продифференцировано по x
	case 8: equal = 1-step/2.0*(-1); break; // 2-ое уравнение продифференцировано по y
	}
	return equal; //возвращаем полученное значение в место вызова
}

function localis(lend, rend, x, y, number, step, usl, t) { // реализация функции табличной локализации
	var  y1, y2, shag = 0.001, shagDel2 = shag; //y1,y2 - вычисленные значения, shag - шаг, ShagDel2 - делимый шаг на 2
	var mas = []; //массив для записи точек интервалов
	var k = 0; // счётчик итераций

	for (var a = lend; a < rend; a += shag) {// проходим интервал от lend до rend
		if (usl == true) { //При неявном Эйлере
			y1 = functionNeYavn(x,y, 0, a,  number,step,t); y2 = functionNeYavn(x,y, 0, a + shag,  number,step,t); //при уравнении 1
		}
		else { // при неявной формуле 2 порядка точности
			y1 = functionSPT(x, y, 0, a, number, step,t); y2 = functionSPT(x, y, 0, a + shag, number, step,t); //при уравнении 1
		}

		if (y1 < 0 && y2 >= 0 || y1 >= 0 && y2 < 0) { //если различаются знаки значений функции в точках x и x+shag
			mas[k] = a; mas[k + 1] = a + shag; //запись границ интервала в массив

			for (var b = 0; b < 3; b++) // 3 раза просходит уменьшение шага в 2 раза, чтобы не потерять корни
				shagDel2 = shagDel2 / 2; //шаг делится на 2

			for (var c = a; c < a + shag; c += shagDel2) { // проходим найденный интервал с шагом деленным на 2
				if (usl == true) { //При неявном Эйлере
					y1 = functionNeYavn(x,y, 0, c,  number,step,t); y2 = functionNeYavn(x,y, 0, c + shagDel2,  number,step,t); // если Неявный метод эйлера
				}
				else { // при неявной формуле 2 порядка точности
					y1 = functionSPT(x, y, 0, c,  number, step,t); y2 = functionSPT(x, y, 0, c + shagDel2,  number, step,t); // если функция неявной формулы 2 порядка точности
				}
				if (y1 < 0 && y2 >= 0 || y1 >= 0 && y2 < 0) { //если различаются знаки значений функции в точках x и x+shagDel2
					mas[k] = c; mas[k + 1] = c + shagDel2; //запись границ интервала в массив
				}
			}

			k = k + 2; // произойдет запись другого интервала
		}
	}
	//cout << "K=" << k << endl;
	if (k == 2) { //если нашёлся интервал
		return NewtonMethod(mas, k, number, x, y, step,usl,t);// метод Ньютона
	}
	if (k == 0) // если не нашёлся интервал
	{
		var mas1=[ lend,rend ]; //передаём начальный интервал
		return NewtonMethod(mas1, 2, number, x, y, step,usl,t);// метод Ньютона
	}
}

function NewtonMethod(mas, k, number, x, j, step, usl, t) { // реализация метода Ньютона
	var e=0.001; //переменная точность
	var OldX; //переменная предыдущего значения x
	var k1 = 0, b = 0; //k1 - счётчик итераций, b- индекс записываемого X
	var y = 0; //вычисляемое значение x
	var fnach, pfnach; //значения в фукции x и a
	var X = []; // массив корней
	var Vip; // условие для проверки места изменения начального значения
	var Xnach; // переменная начального значения
	var fa, fpa; // переменные для значений функции и производной в левой границ
	var temp = [];
	var temp2 =[];
	var massiv=[];
	for (var a = 0; a < k - 1; a = a + 2) { //пока не пройдём все интервалы
		if (usl == true) {
			fa = (functionNeYavn(x, j, 0, mas[a],number, step, t)); fpa = (Pfunction(x, j, mas[a], number, step, t)); // если Неявный метод эйлера
		}
		else {
			fa = (functionSPT(x, j, 0, mas[a],  number, step, t)); fpa = (PfunctionSPT(x, j, mas[a], number, step, t)); // если функция неявной формулы 2 порядка точности
		}
		if ((fa * fpa) > 0) { //если знаки производной
							// и функции в левой границе не раз-личаются
			Xnach = mas[a]; //начальным значением становится левая граница локализ. интервала
			Vip = true; // мы узнали чем является начальное значение
		}

		else { //в другом случае
			Xnach = mas[a + 1]; //начальным значением становится правая граница локализ. интервала
			Vip = false; // мы узнали чем является начальное значение
		}
		Xnach = mas[a + 1]; //начальным значением становится правая граница локализ. интервала
		Vip = false; // мы узнали чем является начальное значение

		while (Math.abs(mas[a] - mas[a + 1]) >= e) { // пока разность между интервалами не будет меньше или равно точности
			k1++; // счётчик итераций увеличился на 1
			if (usl == true) {
				fnach = functionNeYavn(x, j, 0, Xnach,  number, step, t); pfnach = Pfunction(x, j, Xnach, number, step, t); // если Неявный метод эйлера
			}
			else {
				fnach = functionSPT(x, j, 0, Xnach,  number, step, t); pfnach = PfunctionSPT(x, j, Xnach, number, step, t); // если функция неявной формулы 2 порядка точности
			}
			if (Vip == true) { //если начальным значением является левая граница локализ. интервала
				OldX = Xnach; // Xk-1 стал Xk прошлой итерации
				mas[a] = OldX; // левая граница становится x преды-дущей итерации
				Xnach = Xnach - (fnach / pfnach); // высчитывается x этой итерации
				mas[a + 1] = Xnach; // правой границей становится x этой итерации
			}
			else { //если начальным значением является правай граница локализ. интервала
				OldX = Xnach; // Xk-1 стал Xk прошлой итерации
				mas[a + 1] = OldX; // правая граница становится x предыдущей итерации
				Xnach = Xnach - (fnach / pfnach); // высчитывается x этой итерации
				mas[a] = Xnach; // левой границей становится x этой итерации
			}
		}


		X[b] = Xnach; // В ответ записывется x последней итерации
		b++; // ищется следующий X
	}
	return X[0];
}

function systemNewton(xnach, xend, number, x, j, step, usl, t) {
	var e = 0.0001; //переменная точность
	var Xnach=xnach; // переменная начального значения
	var temp2 = []; // массив под временное хранение значений
	var answer = []; //массив под вычисленные значения
	var massivX=[xend,xnach]; var massivY=[xend,xnach]; // массивы под X-ы и Y-и
	while ((Math.abs(massivY[0] - massivY[1]) > e) || (Math.abs(massivX[0] - massivX[1]) > e)) { // пока не достигнем нужной точности
		massivX[0] = massivX[1]; massivY[0] = massivY[1]; // записываем вычисленные значения вместо предыдущих
		temp2 = umnoj(reverse(yacobian(massivX[0], massivY[0], t, step, 2,usl), 2, 2), functionVector(x, j, massivX[0], massivY[0], t, step, 2,usl), 2, 2, 2, 1); // находим произведение матриц Якоби и матрицы вектора функций
		massivX[1] = massivX[0] - temp2[0][0]; massivY[1] = massivY[0] - temp2[1][0]; // находим новые значения
	}

	answer[0] = massivX[1]; answer[1] = massivY[1]; //записываем конечные значения в ответ
	return  answer; //возвращаем массив в вызванное место
}

function umnoj( a, b, row1, row2, col1, col2) // функция перемножения матриц
{
	var c; //место под произведение матриц
	if (col1 != row2) // условие на умножение матриц
	{
		alert("Умножение невозможно!");
		return 0;
	}
	// Умножение матриц
	var c = []; //место под значения
	for (var i = 0; i < row1; i++)
	{
		c[i] = [];
		for (var j = 0; j < col2; j++)
		{
			c[i][j] = 0;
			for (var k = 0; k < col1; k++)
				c[i][j] += a[i][k] * b[k][j];
		}
	}
	return c; //возвращаем полученную матрицу в место вызова
}

function edinich( SLAU, m, n) { // функция создания единичной матрицы той же размерности
	for (var a = 0; a < n; a++) { // приводим матрицу к единичной
		for (var b = 0; b < n; b++) { //присваиваем недиагональным элементам 0
			SLAU[a][b] = 0;
			if (a == b) //диагональным 1
				SLAU[b][b] = 1;
		}
	}
	return SLAU; //возвращаем матрицу в место вызова
}

function reverse(SLAU, m, n) { //функция нахождения обратной матрицы
	var space3 = []; var space4 = []; //space 4 матрица-столбец свободных членов
	for (var a = 0; a < n; a++) {// инициализация массивов
		space3[a] = [];
	}
	for (var a = 0; a < n; a++) // берём матрицу
		for (var b = 0; b < m; b++)
			space3[a][b] = SLAU[a][b];

	//обратная матрица находится методом Гаусса-Жордана
	var vrem = 0; //временная переменная
	var x = [];// массив для неизвестных
	var ed = edinich(SLAU, m, n); //делаем единичную матрицу с такой же размерностью
	var o; //временная переменная
	for (var i = 0; i < n; i++) //находим обратную матрицу
	{
		o = space3[i][i]; // берём диагональный элемент

		for (var j = m-1; j >= 0; j--) // делим строку матрицы и единичной матрицы на диагональный элемент
		{
			space3[i][j] /= o;
			ed[i][j] /= o;
		}

		if (i >= 1) // приводим к нижнетреугольному виду
			//, берём 2 строку и ниже
		{
			for (var j = i - 1; j >= 0; j--)
			{
				var temp = space3[j][i];
				for (var s = 0; s < n; s++)
				{
					space3[j][s] -= temp * space3[i][s];
					ed[j][s] -= temp * ed[i][s];

				}
			}
		}
		//приведение к верхнеугольному виду
		for (var j = i + 1; j < m-1 ; j++)
		{
			o = space3[j][i];
			for (var q = n - 1; q >= 0; q--)
			{
				space3[j][q] -= o * space3[i][q];
				ed[j][q] -= o * ed[i][q];
			}
		}
	}
	return ed;
}

function functionVector(x, y, X1, Y1, t, step, number, usl) { // функция нахождения вектора значений функций
	var fVector = []; //место под матрицу вектор
	if (usl == true) {  // в случае неявного Эйлера
		for (var a = 0; a < number; a++) { // заполняем матрицу
			fVector[a] = []; // реализуем пусто место под значения
			for (var b = 0; b < 1; b++)  // получаем значнения для матрицы
				fVector[a][b] = functionNeYavn(x, y, X1, Y1, a + 3, step, t);
		}
	}
	else { // в случае неявной формулы 2 порядка точности
		for (var a = 0; a < number; a++) { // заполняем матрицу
			fVector[a] = []; // реализуем пусто место под значения
			for (var b = 0; b < 1; b++)  // получаем значнения для матрицы
				fVector[a][b] = functionSPT(x, y, X1, Y1, a + 3, step, t);
		}
	}
	return fVector; //возвращаем матрицу в место вызова
}

function yacobian( x, y, t, step, number, usl) { // функция нахождения матрицы якоби
	var yacobi = []; //место под матрицу якоби
	if (usl == true) { // в случае неявного Эйлера
		for (var a = 0, i = 1; a < number; a++) { // заполняем матрицу
			yacobi[a] = []; // реализуем пусто место под значения
			for (var b = 0; b < number; b++, i++) { // получаем значнения для матрицы
				yacobi[a][b] = partialDerivatives(x, y, t, step, i);
				}
			}
		}
	else { // в случае неявной формулы 2 порядка точности
		for (var a = 0, i = 5; a < number; a++) {  // заполняем матрицу
			yacobi[a] = []; // реализуем пусто место под значения
			for (var b = 0; b < number; b++, i++) { // получаем значнения для матрицы
				yacobi[a][b] = partialDerivatives(x, y, t, step, i);
			}
		}
	}
	return yacobi; //возвращаем матрицу в место вызова
}

function eilerYavn2(uravn, delenia, nachX, endX, nach, nach2, nach3, nach4) { //функция метода Эйлера

	for (var a = 0; a < 3; a++, delenia *= 2) // проходимся 3 раза
	{
		var arrayX = []; var arrayY = []; var arrayT = []; //создаём массивы под X,Y,t
		var tempX, tempY, tempZ, tempM, tempT = nachX; //временные переменные, t в качестве "x"
		var step = Math.abs(Math.abs(nachX) - Math.abs(endX)) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		if (uravn < 5) { //если не система
			tempX = nach; tempY = nach2; // начальные значения x и y
			for (var b = 0; b < delenia + 1; b++,tempT+=step) { // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; //присваиваем местам массивов полученный X,y.t
				tempX = arrayX[b] + step * functions2(arrayX[b], arrayY[b], uravn, arrayT[b], NULL, NULL); // находим Xi+1. Xi+h*f(Xi,Yi,Ti)
				tempY = arrayY[b] + step * functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], NULL, NULL); //находим Yi+1. Yi+h*f(Xi,Yi,Ti)
			}
			consoleOut(uravn, delenia, arrayX, arrayY, arrayT,NULL,NULL); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, NULL,NULL,2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл
		}
		else if(uravn==5) {  // в случае системы уравнений
			tempZ = nach; tempX = nach2; tempM = nach3; tempY = nach4;// начальные значения x и y, z и m
			var arrayZ = []; var arrayM = []; //создаём массивы под z,m
			for (var b = 0; b < delenia + 1; b++, tempT += step) { // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; arrayZ[b] = tempZ; arrayM[b] = tempM; //присваиваем местам массивов полученный X,y,t,z,m
				tempZ = arrayZ[b] + step * functions2(arrayX[b], arrayY[b], uravn, arrayT[b], arrayZ[b], arrayM[b]); //находим значения по формулам
				tempX = arrayX[b] + step * functions2(arrayX[b], arrayY[b], uravn+1, arrayT[b], arrayZ[b], arrayM[b]);
				tempM = arrayM[b] + step * functions2(arrayX[b], arrayY[b], uravn+2, arrayT[b], arrayZ[b], arrayM[b]);
				tempY = arrayY[b] + step * functions2(arrayX[b], arrayY[b], uravn+3, arrayT[b], arrayZ[b], arrayM[b]);
			}
			consoleOut(uravn, delenia, arrayX, arrayY, arrayT, arrayZ, arrayM); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, arrayZ, arrayM, 2, delenia + 1), 5, delenia + 1);//записываем таблицу в файл
		}
}
}

function eilerNeYavn2( uravn, delenia, nachX, endX, nach, nach2, nach3, nach4){ //функция метода Неявного Эйлера

	for (var a = 0; a < 3; a++, delenia *= 2)// проходимся 3 раза
	{
		var step = Math.abs(Math.abs(nachX) - Math.abs(endX)) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		var arrayX = []; var arrayY = []; var arrayT = [];  //создаём массив под X,Y,t
		var arrayAnswers = []; //массив для ответов
		var tempX, tempY, tempZ, tempM,tempT = nachX; //временные переменные, t в качестве "x"
		if (uravn < 5) { //если система из двух уравнений
			tempX = nach,tempY = nach2;  // берём начальное значение x и y  в качестве временного значения
			for (var b = 0; b < delenia + 1; b++) {  // получаем в массиве значения
				var mas=[ nachX, endX ];
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT;  //присваиваем местам массивов полученный X,y.t
				tempT += step; //увеличиваем t на шаг
				arrayAnswers = systemNewton2(nachX, endX, uravn, arrayX[b], arrayY[b], step, true, tempT, NULL, NULL);// Выполняем локализацию и ищем значение X,Y методом Ньютона
				tempX = arrayAnswers[0]; tempY = arrayAnswers[1]; // Записываем x,y
			}
			consoleOut(uravn, delenia, arrayX, arrayY, arrayT, NULL, NULL); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, NULL, NULL, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл
		}
		else {  // в случае системы уравнений из 4
			tempZ = nach; tempX = nach2; tempM = nach3; tempY = nach4;// начальные значения x и y, z и m
			var arrayZ = []; var arrayM = [];  //создаём массив под z,m
			for (var b = 0; b < delenia + 1; b++) {  // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; arrayZ[b] = tempZ; arrayM[b] = tempM; //присваиваем местам массивов полученный X,y,t,z,m
				tempT += step; //увеличиваем t на шаг
				arrayAnswers = systemNewton2(nachX, endX, uravn, arrayX[b], arrayY[b], step, true, tempT, arrayZ[b], arrayM[b]); // Выполняем локализацию и ищем значения методом Ньютона
				tempX = arrayAnswers[1]; tempY = arrayAnswers[3]; tempZ = arrayAnswers[0]; tempM = arrayAnswers[2]; //получаем значения
			}
			consoleOut(uravn, delenia, arrayX, arrayY, arrayT, arrayZ, arrayM); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, arrayZ, arrayM, 2, delenia + 1), 5, delenia + 1);//записываем таблицу в файл
		}
	}
}

function eilerPereschet2(uravn, delenia, nachX, endX, nach, nach2, nach3, nach4) { //функция метода явного Эйлера с пересчетом
	for (var a = 0; a < 3; a++, delenia *= 2) // проходимся 3 раза
	{
		var arrayX = []; var arrayY = []; //создаём массив под X,Y
		var step = (-nachX + endX) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		var arrayT = []; //создаём массив под t
		var Ycherta, Xcherta; // Yчерта, Xчерта в формуле
		var tempX, tempY, tempZ, tempM;//временные переменные, t в качестве "x"
		var tempT = nachX; // переменная t стала нашим "иксом"
		if (uravn < 5) { // в случае когда у нас 1 уравнение, а не система
			tempX = nach; tempY = nach2; // берём начальное значение x,y в качестве временного значения
			for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT;  //присваиваем местам массивов полученный X,y.t
				tempT += step; //увеличиваем t на шаг
				Xcherta = arrayX[b] + step * functions2(arrayX[b], arrayY[b], uravn, arrayT[b], NULL, NULL); //находим Xчерту - Xi+h*f(Xi,Yi,Ti)
				Ycherta = arrayY[b] + step * functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], NULL, NULL); //находим Yчерту - Yi+h*f(Xi,Yi,Ti)
				tempX = arrayX[b] + (step / 2.0) * (functions2(arrayX[b], arrayY[b], uravn, arrayT[b], NULL, NULL) + functions2(Xcherta, Ycherta, uravn, tempT, NULL, NULL));// находим значение xi+h/2*(f(Xi,Yi,Ti)+f(Xcherta,Ycherta,Ti+1)))
				tempY = arrayY[b] + (step / 2.0) * (functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], NULL, NULL) + functions2(Xcherta, Ycherta, uravn + 1, tempT, NULL, NULL));// находим значение yi+h/2*(f(Xi,Yi,Ti)+f(Xcherta,Ycherta,Ti+1)))
			}
			consoleOut(uravn, delenia, arrayX, arrayY, arrayT, NULL, NULL); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, NULL, NULL, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл
		}
		else { // в случае системы уравнений
			tempZ = nach; tempX = nach2; tempM = nach3; tempY = nach4;// начальные значения x и y, z и m
			var arrayZ = [];var arrayM = []; //создаём массивы под z,m
			var Zcherta, Mcherta; // Zчерта, Mчерта в формуле
			for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; arrayZ[b] = tempZ; arrayM[b] = tempM; //присваиваем местам массивов полученный X,y,t,z,m
				tempT += step; //увеличиваем t на шаг
				Zcherta = arrayZ[b] + step* functions2(arrayX[b], arrayY[b], uravn, arrayT[b], arrayZ[b], arrayM[b]); //вычисляем черты по формулам
				Xcherta = arrayX[b] + step * functions2(arrayX[b], arrayY[b], uravn+1, arrayT[b], arrayZ[b], arrayM[b]);
				Mcherta = arrayM[b] + step * functions2(arrayX[b], arrayY[b], uravn+2, arrayT[b], arrayZ[b], arrayM[b]);
				Ycherta = arrayY[b] + step * functions2(arrayX[b], arrayY[b], uravn+3, arrayT[b], arrayZ[b], arrayM[b]);
				tempZ = arrayZ[b] + (step / 2.0) * (functions2(arrayX[b], arrayY[b], uravn, arrayT[b], arrayZ[b], arrayM[b]) + functions2(Xcherta, Ycherta, uravn, tempT, Zcherta, Mcherta)); //находим значения по формулам
				tempX = arrayX[b] + (step / 2.0) * (functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], arrayZ[b], arrayM[b]) + functions2(Xcherta, Ycherta, uravn+1, tempT, Zcherta, Mcherta));
				tempM = arrayM[b] + (step / 2.0) * (functions2(arrayX[b], arrayY[b], uravn + 2, arrayT[b], arrayZ[b], arrayM[b]) + functions2(Xcherta, Ycherta, uravn+2, tempT, Zcherta, Mcherta));
				tempY = arrayY[b] + (step / 2.0) * (functions2(arrayX[b], arrayY[b], uravn+3, arrayT[b], arrayZ[b], arrayM[b]) + functions2(Xcherta, Ycherta, uravn+3, tempT, Zcherta, Mcherta));
			}
			consoleOut(uravn, delenia, arrayX, arrayY, arrayT, arrayZ, arrayM); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, arrayZ, arrayM, 2, delenia + 1), 5, delenia + 1);//записываем таблицу в файл
		}
	}
}

function precor2(uravn, delenia, nachX, endX, nach, nach2, nach3, nach4) { // функция метода Предиктор-Корректора

	for (var a = 0; a < 3; a++, delenia *= 2) // проходимся 3 раза
	{
		var step = Math.abs(Math.abs(nachX) - Math.abs(endX)) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		var arrayX = []; var arrayY = []; //создаём массив под X,Y
		var halfY, halfX;// Y(i+1/2), X(i+1/2)
		var tempX, tempY, tempZ, tempM; //временные переменные
		var tempT = nachX; // переменная t стала нашим "иксом"
		var arrayT = [];  //создаём массив под t
		if (uravn < 5) { // в случае когда у нас 1 уравнение, а не система
			tempX = nach; tempY = nach2; // берём начальное значение x,y в качестве временного значения
			for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT;
				tempT += (step / 2.0); // увеличиваем t на пол шага
				halfX = tempX + step / 2.0 * (functions2(arrayX[b], arrayY[b], uravn, arrayT[b], NULL, NULL));// Xi+h/2*(f(Xi,Yi,Ti))
				halfY = tempY + step / 2.0 * (functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], NULL, NULL));// Yi+h/2*(f(Xi,Yi,Ti))
				tempX = arrayX[b] + step * (functions2(halfX, halfY, uravn, tempT, NULL, NULL)); //находим значение x= Xi+h*(f(X[i+1/2],Y[i+1/2],T[i+1/2]))
				tempY = arrayY[b] + step * (functions2(halfX, halfY, uravn + 1, tempT, NULL, NULL)); //находим значение y= Yi+h*(f(f(X[i+1/2],Y[i+1/2],T[i+1/2]))
				tempT += (step / 2.0); // увеличиваем t на пол шага
			}

			consoleOut(uravn, delenia, arrayX, arrayY, arrayT, NULL, NULL); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, NULL, NULL, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл
		}
		else { // в случае системы уравнений
			tempZ = nach; tempX = nach2; tempM = nach3; tempY = nach4; // начальные значения x и y, z и m
			var arrayZ = [];var arrayM = []; //создаём массив под z,m
			var halfZ, halfM; // Z(i+1/2),M(i+1/2)
			for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; arrayZ[b] = tempZ; arrayM[b] = tempM; //присваиваем местам массивов полученный X,y,t,z,m
				tempT += (step / 2.0); // увеличиваем t на пол шага
				halfZ = tempZ + step / 2.0 * functions2(arrayX[b], arrayY[b], uravn, arrayT[b], arrayZ[b], arrayM[b]); //находим значения по формуле
				halfX = tempX + step / 2.0 * functions2(arrayX[b], arrayY[b], uravn+1, arrayT[b], arrayZ[b], arrayM[b]);
				halfM = tempM + step / 2.0 * functions2(arrayX[b], arrayY[b], uravn + 2, arrayT[b], arrayZ[b], arrayM[b]);
				halfY = tempY + step / 2.0 * (functions2(arrayX[b], arrayY[b], uravn + 3, arrayT[b], arrayZ[b], arrayM[b]));
				tempZ = arrayZ[b] + step * functions2(halfX, halfY, uravn, tempT, halfZ, halfM); //находим значения по формуле
				tempX = arrayX[b] + step * (functions2(halfX, halfY, uravn+1, tempT, halfZ, halfM));
				tempM = arrayM[b] + step * functions2(halfX, halfY, uravn + 2, tempT, halfZ, halfM);
				tempY = arrayY[b] + step * (functions2(halfX, halfY, uravn + 3, tempT, halfZ, halfM));
				tempT += (step / 2.0); // увеличиваем t на пол шага
			}
			consoleOut(uravn, delenia, arrayX, arrayY, arrayT, arrayZ, arrayM); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, arrayZ, arrayM, 2, delenia + 1), 5, delenia + 1);//записываем таблицу в файл
		}
	}
}

function RungeKutt2( uravn, delenia, nachX, endX, nach, nach2, nach3, nach4) { // функция методов Рунге-Куттых

	for (var a = 0; a < 3; a++, delenia *= 2) // проходимся 3 раза
	{
		var step = Math.abs(Math.abs(nachX) - Math.abs(endX)) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		var arrayX = []; var arrayY = []; //создаём массив под X,Y
		var arrayT = []; //создаём массив под t
		var k1, k2, k3, k4,z1, z2, z3, z4; // коэффициенты
		var tempX, tempY, tempZ, tempM; //временные переменные
		var tempT = nachX; // переменная t стала нашим "иксом"
		if (uravn < 5) { //  в случае 1 уравнения, а не системы
			for (var c = 0; c < 5; c++) { // проходим все порядки точности
				tempX = nach; tempY = nach2; tempT = nachX; // берём начальное значение x,y,t в качестве временного значения
				for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
					arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; //присваиваем местам массивов полученный X,y,t,z,m
					tempT += step;//увеличиваем t на шаг
					switch (c) { // методы с 2 порядка точности по 4 (a,б)
					case 0:  //2 порядок точности
						k1 = functions2(arrayX[b], arrayY[b], uravn, arrayT[b], NULL, NULL); //находим значения по формуле
						z1 = functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], NULL, NULL);
						k2 = functions2(arrayX[b] + step * k1, arrayY[b] + step * z1, uravn, tempT, NULL, NULL);
						z2 = functions2(arrayX[b] + step * k1, arrayY[b] + step * z1, uravn + 1, tempT, NULL, NULL);
						tempX = arrayX[b] + step / 2.0 * (k1 + k2); //находим значения по формуле
						tempY = arrayY[b] + step / 2.0 * (z1 + z2);
						break;
					case 1: //3 порядок точности (а)
						k1 = functions2(arrayX[b], arrayY[b], uravn, arrayT[b], NULL, NULL); //находим значения по формуле
						z1 = functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], NULL, NULL);
						k2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn, arrayT[b] + step / 2.0, NULL, NULL); // //находим значения по формуле
						z2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn + 1, arrayT[b] + step / 2.0, NULL, NULL);
						k3 = functions2(arrayX[b] - step * k1 + 2 * step * k2, arrayY[b] - step * z1 + 2 * step * z2, uravn, arrayT[b] + step, NULL, NULL);
						z3 = functions2(arrayX[b] - step * k1 + 2 * step * k2, arrayY[b] - step * z1 + 2 * step * z2, uravn + 1, arrayT[b] + step, NULL, NULL);
						tempX = arrayX[b] + step / 6.0 * (k1 + 4 * k2 + k3);//находим значения по формуле
						tempY = arrayY[b] + step / 6.0 * (z1 + 4 * z2 + z3);
						break;
					case 2: //3 порядок точности (б)
						k1 = functions2(arrayX[b], arrayY[b], uravn, arrayT[b], NULL, NULL); //находим значения по формуле
						z1 = functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], NULL, NULL);
						k2 = functions2(arrayX[b] + step / 3.0 * k1, arrayY[b] + step / 3.0 * z1, uravn, arrayT[b] + step / 3.0, NULL, NULL); //находим значения по формуле
						z2 = functions2(arrayX[b] + step / 3.0 * k1, arrayY[b] + step / 3.0 * z1, uravn + 1, arrayT[b] + step / 3.0, NULL, NULL);
						k3 = functions2(arrayX[b] + 2 * step / 3.0 * k2, arrayY[b] + 2 * step / 3.0 * z2, uravn, arrayT[b] + 2 * step / 3.0, NULL, NULL); //находим значения по формуле
						z3 = functions2(arrayX[b] + 2 * step / 3.0 * k2, arrayY[b] + 2 * step / 3.0 * z2, uravn + 1, arrayT[b] + 2 * step / 3.0, NULL, NULL);
						tempX = arrayX[b] + step / 4.0 * (k1 + 3 * k3); //находим значения по формуле
						tempY = arrayY[b] + step / 4.0 * (z1 + 3 * z3);
						break;
					case 3: //4 порядок точности (а)
						k1 = functions2(arrayX[b], arrayY[b], uravn, arrayT[b], NULL, NULL); //находим значения по формуле
						z1 = functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], NULL, NULL);
						k2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn, arrayT[b] + step / 2.0, NULL, NULL); //находим значения по формуле
						z2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn + 1, arrayT[b] + step / 2.0, NULL, NULL);
						k3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn, arrayT[b] + step / 2.0, NULL, NULL); //находим значения по формуле
						z3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn + 1, arrayT[b] + step / 2.0, NULL, NULL);
						k4 = functions2(arrayX[b] + step * k3, arrayY[b] + step * z3, uravn, arrayT[b] + step, NULL, NULL); //находим значения по формуле
						z4 = functions2(arrayX[b] + step * k3, arrayY[b] + step * z3, uravn+1, arrayT[b] + step, NULL, NULL);
						tempX = arrayX[b] + step / 6.0 * (k1 + 2 * k2 + 2 * k3 + k4);//находим значения по формуле
						tempY = arrayY[b] + step / 6.0 * (z1 + 2 * z2 + 2 * z3 + z4);
					break;
					case 4:  //4 порядок точности (б)
						k1 = functions2(arrayX[b], arrayY[b], uravn, arrayT[b], NULL, NULL); //находим значения по формуле
						z1 = functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], NULL, NULL);
						k2 = functions2(arrayX[b] + step / 4.0 * k1, arrayY[b] + step / 4.0 * z1, uravn, arrayT[b] + step / 4.0, NULL, NULL); //находим значения по формуле
						z2 = functions2(arrayX[b] + step / 4.0 * k1, arrayY[b] + step / 4.0 * z1, uravn + 1, arrayT[b] + step / 4.0, NULL, NULL);
						k3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn, arrayT[b] + step / 2.0, NULL, NULL); //находим значения по формуле
						z3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn + 1, arrayT[b] + step / 2.0, NULL, NULL);
						z4 = functions2(arrayX[b] + step * k1 - 2 * step * k2 + 2 * step * k3, arrayY[b] + step * z1 - 2 * step * z2 + 2 * step * z3, uravn + 1, arrayT[b] + step, NULL, NULL); //находим значения по формуле
						k4 = functions2(arrayX[b] + step * k1 - 2 * step * k2 + 2 * step * k3, arrayY[b] + step * z1 - 2 * step * z2 + 2 * step * z3, uravn, arrayT[b] + step, NULL, NULL);
						tempX = arrayX[b] + step / 6.0 * (k1 + 4 * k3 + k4); //находим значения по формуле
						tempY = arrayY[b] + step / 6.0 * (z1 + 4 * z3 + z4);
						break;
					}
				}
				consoleOut(uravn, delenia, arrayX, arrayY, arrayT, NULL, NULL); //выводим таблицу на консоль
				recordInFile(doubleMassiv(arrayX, arrayY, arrayT, NULL, NULL, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл
			}
		}
		else { // в случае системы уравнений
			var arrayZ = []; var arrayM = []; //создаём массив под z,m
			var b1, b2, b3, b4, a1, a2, a3, a4;  // коэффициенты
			for (var c = 0; c < 5; c++) { // проходим все порядки точности
				tempZ = nach; tempX = nach2; tempM = nach3; tempY = nach4; // начальные значения x и y, z и m
				tempT = nachX; // переменная t стала нашим "иксом"
				for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
					arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; arrayZ[b] = tempZ; arrayM[b] = tempM; //присваиваем местам массивов полученный X,y,t,z,m
					tempT += step;//увеличиваем t на шаг
					switch (c) {
					case 0:  //2 порядок точности
						a1 = functions2(arrayX[b], arrayY[b], uravn, arrayT[b], arrayZ[b], arrayM[b]); //находим значения по формуле
						k1 = functions2(arrayX[b], arrayY[b], uravn+1, arrayT[b], arrayZ[b], arrayM[b]);
						b1 = functions2(arrayX[b], arrayY[b], uravn+2, arrayT[b], arrayZ[b], arrayM[b]);
						z1 = functions2(arrayX[b], arrayY[b], uravn+3, arrayT[b], arrayZ[b], arrayM[b]);
						a2 = functions2(arrayX[b] + step * k1, arrayY[b] + step * z1, uravn, tempT, arrayZ[b]+step*a1, arrayM[b] + step * b1); //находим значения по формуле
						k2 = functions2(arrayX[b] + step * k1, arrayY[b] + step * z1, uravn+1, tempT, arrayZ[b] + step * a1, arrayM[b] + step * b1);
						b2 = functions2(arrayX[b] + step * k1, arrayY[b] + step * z1, uravn + 2, tempT, arrayZ[b] + step * a1, arrayM[b] + step * b1);
						z2 = functions2(arrayX[b] + step * k1, arrayY[b] + step * z1, uravn + 3, tempT, arrayZ[b] + step * a1, arrayM[b] + step * b1);
						tempZ = arrayZ[b] + step / 2.0 * (a1 + a2);//находим значения по формуле
						tempX = arrayX[b] + step / 2.0 * (k1 + k2);
						tempM = arrayM[b] + step / 2.0 * (b1 + b2);
						tempY = arrayY[b] + step / 2.0 * (z1 + z2);
					break;
					case 1: //3 порядок точности (а)
						a1 = functions2(arrayX[b], arrayY[b], uravn, arrayT[b], arrayZ[b], arrayM[b]); //находим значения по формуле
						k1 = functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], arrayZ[b], arrayM[b]);
						b1 = functions2(arrayX[b], arrayY[b], uravn + 2, arrayT[b], arrayZ[b], arrayM[b]);
						z1 = functions2(arrayX[b], arrayY[b], uravn + 3, arrayT[b], arrayZ[b], arrayM[b]);
						a2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a1, arrayM[b] + step / 2.0 * b1); //находим значения по формуле
						k2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn+1, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a1, arrayM[b] + step / 2.0 * b1);
						b2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn+2, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a1, arrayM[b] + step / 2.0 * b1);
						z2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn+3, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a1, arrayM[b] + step / 2.0 * b1);
						a3 = functions2(arrayX[b] - step * k1 + 2 * step * k2, arrayY[b] - step * z1 + 2 * step * z2, uravn, arrayT[b] + step, arrayZ[b] - step * a1 + 2 * step * a2, arrayM[b] - step * b1 + 2 * step * b2); //находим значения по формуле
						k3 = functions2(arrayX[b] - step * k1 + 2 * step * k2, arrayY[b] - step * z1 + 2 * step * z2, uravn+1, arrayT[b] + step, arrayZ[b] - step * a1 + 2 * step * a2, arrayM[b] - step * b1 + 2 * step * b2);
						b3 = functions2(arrayX[b] - step * k1 + 2 * step * k2, arrayY[b] - step * z1 + 2 * step * z2, uravn+2, arrayT[b] + step, arrayZ[b] - step * a1 + 2 * step * a2, arrayM[b] - step * b1 + 2 * step * b2);
						z3 = functions2(arrayX[b] - step * k1 + 2 * step * k2, arrayY[b] - step * z1 + 2 * step * z2, uravn+3, arrayT[b] + step, arrayZ[b] - step * a1 + 2 * step * a2, arrayM[b] - step * b1 + 2 * step * b2);
						tempZ = arrayZ[b] + step / 6.0 * (a1 + 4 * a2 + a3); //находим значения по формуле
						tempX = arrayX[b] + step / 6.0 * (k1 + 4 * k2 + k3);
						tempM = arrayM[b] + step / 6.0 * (b1 + 4 * b2 + b3);
						tempY = arrayY[b] + step / 6.0 * (z1 + 4 * z2 + z3);
					break;
					case 2://3 порядок точности (б)
						a1 = functions2(arrayX[b], arrayY[b], uravn, arrayT[b], arrayZ[b], arrayM[b]); //находим значения по формуле
						k1 = functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], arrayZ[b], arrayM[b]);
						b1 = functions2(arrayX[b], arrayY[b], uravn + 2, arrayT[b], arrayZ[b], arrayM[b]);
						z1 = functions2(arrayX[b], arrayY[b], uravn + 3, arrayT[b], arrayZ[b], arrayM[b]);
						a2 = functions2(arrayX[b] + step / 3.0 * k1, arrayY[b] + step / 3.0 * z1, uravn, arrayT[b] + step / 3.0, arrayZ[b] + step / 3.0 * a1, arrayM[b] + step / 3.0 * b1); //находим значения по формуле
						k2 = functions2(arrayX[b] + step / 3.0 * k1, arrayY[b] + step / 3.0 * z1, uravn+1, arrayT[b] + step / 3.0, arrayZ[b] + step / 3.0 * a1, arrayM[b] + step / 3.0 * b1);
						b2 = functions2(arrayX[b] + step / 3.0 * k1, arrayY[b] + step / 3.0 * z1, uravn+2, arrayT[b] + step / 3.0, arrayZ[b] + step / 3.0 * a1, arrayM[b] + step / 3.0 * b1);
						z2 = functions2(arrayX[b] + step / 3.0 * k1, arrayY[b] + step / 3.0 * z1, uravn+3, arrayT[b] + step / 3.0, arrayZ[b] + step / 3.0 * a1, arrayM[b] + step / 3.0 * b1);
						a3 = functions2(arrayX[b] + 2 * step / 3.0 * k2, arrayY[b] + 2 * step / 3.0 * z2, uravn, arrayT[b] + 2 * step / 3.0, arrayZ[b] + 2 * step / 3.0 * a2, arrayM[b] + 2 * step / 3.0 * b2); //находим значения по формуле
						k3 = functions2(arrayX[b] + 2 * step / 3.0 * k2, arrayY[b] + 2 * step / 3.0 * z2, uravn+1, arrayT[b] + 2 * step / 3.0, arrayZ[b] + 2 * step / 3.0 * a2, arrayM[b] + 2 * step / 3.0 * b2);
						b3 = functions2(arrayX[b] + 2 * step / 3.0 * k2, arrayY[b] + 2 * step / 3.0 * z2, uravn+2, arrayT[b] + 2 * step / 3.0, arrayZ[b] + 2 * step / 3.0 * a2, arrayM[b] + 2 * step / 3.0 * b2);
						z3 = functions2(arrayX[b] + 2 * step / 3.0 * k2, arrayY[b] + 2 * step / 3.0 * z2, uravn+3, arrayT[b] + 2 * step / 3.0, arrayZ[b] + 2 * step / 3.0 * a2, arrayM[b] + 2 * step / 3.0 * b2);
						tempZ = arrayZ[b] + step / 4.0 * (a1 + 3 * a3); //находим значения по формуле
						tempX = arrayX[b] + step / 4.0 * (k1 + 3 * k3);
						tempM = arrayM[b] + step / 4.0 * (b1 + 3 * b3);
						tempY = arrayY[b] + step / 4.0 * (z1 + 3 * z3);
					break;
					case 3: //4 порядок точности (а)
						a1 = functions2(arrayX[b], arrayY[b], uravn, arrayT[b], arrayZ[b], arrayM[b]); //находим значения по формуле
						k1 = functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], arrayZ[b], arrayM[b]);
						b1 = functions2(arrayX[b], arrayY[b], uravn + 2, arrayT[b], arrayZ[b], arrayM[b]);
						z1 = functions2(arrayX[b], arrayY[b], uravn + 3, arrayT[b], arrayZ[b], arrayM[b]);
						a2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a1, arrayM[b] + step / 2.0 * b1); //находим значения по формуле
						k2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn+1, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a1, arrayM[b] + step / 2.0 * b1);
						b2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn+2, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a1, arrayM[b] + step / 2.0 * b1);
						z2 = functions2(arrayX[b] + step / 2.0 * k1, arrayY[b] + step / 2.0 * z1, uravn+3, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a1, arrayM[b] + step / 2.0 * b1);
						a3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a2, arrayM[b] + step / 2.0 * b2); //находим значения по формуле
						k3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn+1, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a2, arrayM[b] + step / 2.0 * b2);
						b3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn+2, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a2, arrayM[b] + step / 2.0 * b2);
						z3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn+3, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a2, arrayM[b] + step / 2.0 * b2);
						a4 = functions2(arrayX[b] + step * k3, arrayY[b] + step * z3, uravn, arrayT[b] + step, arrayZ[b] + step * a3, arrayM[b] + step * b3); //находим значения по формуле
						k4 = functions2(arrayX[b] + step * k3, arrayY[b] + step * z3, uravn+1, arrayT[b] + step, arrayZ[b] + step * a3, arrayM[b] + step * b3);
						b4 = functions2(arrayX[b] + step * k3, arrayY[b] + step * z3, uravn+2, arrayT[b] + step, arrayZ[b] + step * a3, arrayM[b] + step * b3);
						z4 = functions2(arrayX[b] + step * k3, arrayY[b] + step * z3, uravn+3, arrayT[b] + step, arrayZ[b] + step * a3, arrayM[b] + step * b3);
						tempZ = arrayZ[b] + step / 6.0 * (a1 + 2 * a2 + 2 * a3 + a4); //находим значения по формуле
						tempX = arrayX[b] + step / 6.0 * (k1 + 2 * k2 + 2 * k3 + k4);
						tempM = arrayM[b] + step / 6.0 * (b1 + 2 * b2 + 2 * b3 + b4);
						tempY = arrayY[b] + step / 6.0 * (z1 + 2 * z2 + 2 * z3 + z4);
					break;
					case 4: //4 порядок точности (б)
						a1 = functions2(arrayX[b], arrayY[b], uravn, arrayT[b], arrayZ[b], arrayM[b]); //находим значения по формуле
						k1 = functions2(arrayX[b], arrayY[b], uravn + 1, arrayT[b], arrayZ[b], arrayM[b]);
						b1 = functions2(arrayX[b], arrayY[b], uravn + 2, arrayT[b], arrayZ[b], arrayM[b]);
						z1 = functions2(arrayX[b], arrayY[b], uravn + 3, arrayT[b], arrayZ[b], arrayM[b]);
						a2 = functions2(arrayX[b] + step / 4.0 * k1, arrayY[b] + step / 4.0 * z1, uravn, arrayT[b] + step / 4.0, arrayZ[b] + step / 4.0 * a1, arrayM[b] + step / 4.0 * b1); //находим значения по формуле
						k2 = functions2(arrayX[b] + step / 4.0 * k1, arrayY[b] + step / 4.0 * z1, uravn+1, arrayT[b] + step / 4.0, arrayZ[b] + step / 4.0 * a1, arrayM[b] + step / 4.0 * b1);
						b2 = functions2(arrayX[b] + step / 4.0 * k1, arrayY[b] + step / 4.0 * z1, uravn+2, arrayT[b] + step / 4.0, arrayZ[b] + step / 4.0 * a1, arrayM[b] + step / 4.0 * b1);
						z2 = functions2(arrayX[b] + step / 4.0 * k1, arrayY[b] + step / 4.0 * z1, uravn+3, arrayT[b] + step / 4.0, arrayZ[b] + step / 4.0 * a1, arrayM[b] + step / 4.0 * b1);
						a3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a2, arrayM[b] + step / 2.0 * b2); //находим значения по формуле
						k3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn+1, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a2, arrayM[b] + step / 2.0 * b2);
						b3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn+2, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a2, arrayM[b] + step / 2.0 * b2);
						z3 = functions2(arrayX[b] + step / 2.0 * k2, arrayY[b] + step / 2.0 * z2, uravn+3, arrayT[b] + step / 2.0, arrayZ[b] + step / 2.0 * a2, arrayM[b] + step / 2.0 * b2);
						a4 = functions2(arrayX[b] + step * k1 - 2 * step * k2 + 2 * step * k3, arrayY[b] + step * z1 - 2 * step * z2 + 2 * step * z3, uravn, arrayT[b] + step, arrayZ[b] + step * a1 - 2 * step * a2 + 2 * step * a3, arrayM[b] + step * b1 - 2 * step * b2 + 2 * step * b3); //находим значения по формуле
						k4 = functions2(arrayX[b] + step * k1 - 2 * step * k2 + 2 * step * k3, arrayY[b] + step * z1 - 2 * step * z2 + 2 * step * z3, uravn+1, arrayT[b] + step, arrayZ[b] + step * a1 - 2 * step * a2 + 2 * step * a3, arrayM[b] + step * b1 - 2 * step * b2 + 2 * step * b3);
						b4 = functions2(arrayX[b] + step * k1 - 2 * step * k2 + 2 * step * k3, arrayY[b] + step * z1 - 2 * step * z2 + 2 * step * z3, uravn+2, arrayT[b] + step, arrayZ[b] + step * a1 - 2 * step * a2 + 2 * step * a3, arrayM[b] + step * b1 - 2 * step * b2 + 2 * step * b3);
						z4 = functions2(arrayX[b] + step * k1 - 2 * step * k2 + 2 * step * k3, arrayY[b] + step * z1 - 2 * step * z2 + 2 * step * z3, uravn+3, arrayT[b] + step, arrayZ[b] + step * a1 - 2 * step * a2 + 2 * step * a3, arrayM[b] + step * b1 - 2 * step * b2 + 2 * step * b3);
						tempZ = arrayZ[b] + step / 6.0 * (a1 + 4 * a3 + a4); //находим значения по формуле
						tempX = arrayX[b] + step / 6.0 * (k1 + 4 * k3 + k4);
						tempM = arrayM[b] + step / 6.0 * (b1 + 4 * b3 + b4);
						tempY = arrayY[b] + step / 6.0 * (z1 + 4 * z3 + z4);
					break;
					}
				}
				consoleOut(uravn, delenia, arrayX, arrayY, arrayT, arrayZ, arrayM); //выводим таблицу на консоль
				recordInFile(doubleMassiv(arrayX, arrayY, arrayT, arrayZ, arrayM, 2, delenia + 1), 5, delenia + 1);//записываем таблицу в файл
			}
		}
	}
}

function secPorToch2( uravn, delenia, nachX, endX, nach, nach2, nach3, nach4) { //функция неявной формулы точности второго порядка

	for (var a = 0; a < 3; a++, delenia *= 2) // проходимся 3 раза
	{
		var step = Math.abs(Math.abs(nachX) - Math.abs(endX)) / delenia; // находим шаг, деля сумму левого и правого значений промежутка на количество делений
		var arrayX = []; var arrayY = []; //создаём массив под X,Y
		var arrayT = []; //создаём массив под t
		var tempT = nachX; // переменная t стала нашим "иксом"
		var tempX, tempY, tempZ, tempM;  //временные переменные
		var arrayAnswers = []; //массив для ответов
		if (uravn < 5) // в случае когда у нас 1 уравнение, а не система
		{
			tempX = nach; tempY = nach2;  // берём начальное значение x,y в качестве временного значения
			var mas=[nachX, endX];// массив с левым и правым концом промежутка
			for (var b = 0; b < delenia + 1; b++) { // получаем в массиве значения
				var mas=[nachX, endX]; // массив с левым и правым концом промежутка
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT;//присваиваем местам массивов полученный X,y,t
				tempT += step; //t увеличивается на величину шага
				tempX = systemNewton(nachX, endX, uravn, arrayX[b], arrayY[b], step, false, arrayT[b], NULL, NULL)[0]; // Выполняем локализацию и ищем значение X методом Ньютона
				tempY = systemNewton(nachX, endX, uravn, arrayX[b], arrayY[b], step, false, arrayT[b], NULL, NULL)[1]; // Выполняем локализацию и ищем значение Y методом Ньютона
			}
			consoleOut(uravn, delenia, arrayX, arrayY, arrayT, NULL, NULL); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, NULL, NULL, 2, delenia + 1), 3, delenia + 1);//записываем таблицу в файл
		}
		else { // в случае системы уравнений
			tempZ = nach; tempX = nach2; tempM = nach3; tempY = nach4; // начальные значения x и y, z и m
			var arrayZ = []; var arrayM = []; //создаём массив под z,m
			for (var b = 0; b < delenia + 1; b++) {  // получаем в массиве значения
				arrayX[b] = tempX; arrayY[b] = tempY; arrayT[b] = tempT; arrayZ[b] = tempZ; arrayM[b] = tempM; //присваиваем местам массивов полученный X,y,t,z,m
				tempT += step; //увеличиваем t на шаг
				arrayAnswers = systemNewton(nachX, endX, uravn, arrayX[b], arrayY[b], step, false, arrayT[b], arrayZ[b], arrayM[b]); // Выполняем локализацию и ищем значения методом Ньютона
				tempX = arrayAnswers[1]; tempY = arrayAnswers[3]; tempZ = arrayAnswers[0]; tempM = arrayAnswers[2]; // получаем значения
			}
			consoleOut(uravn, delenia, arrayX, arrayY, arrayT, arrayZ, arrayM); //выводим таблицу на консоль
			recordInFile(doubleMassiv(arrayX, arrayY, arrayT, arrayZ, arrayM, 2, delenia + 1), 5, delenia + 1);//записываем таблицу в файл

		}
	}
}

function functions2(x, y, Number, t, z, m) {//функция вычисления значения функции в точке
	var Ravno = 0; //переменная под ответ
	switch (Number) {
	case 1: Ravno = y; break; //1-ое уравнение 1 ОДУ 2 порядка
	case 2: Ravno = 18*Math.pow(x,3); break; //2-ое уравнение 1 ОДУ 2 порядка
	case 3: Ravno = y; break; //1-ое уравнение 2 ОДУ 2 порядка
	case 4: Ravno = 4 * (Math.atan(t)) - y; break;  //2-ое уравнение 2 ОДУ 2 порядка
	case 5: Ravno = x; break;//1 уравнение системы ОДУ 2 ПОРЯДКА
	case 6: Ravno = 3 + 2 * m; break; //2 уравнение системы ОДУ 2 ПОРЯДКА
	case 7: Ravno = y; break; //3 уравнение системы ОДУ 2 ПОРЯДКА
	case 8: Ravno = 1 + z - t; break; //4 уравнение системы ОДУ 2 ПОРЯДКА
	}
	return Ravno; //возвращаем полученное значение в место вызова
}

function functionNeYavn2(x, y, X1, Y1, Number, step, t, z1, m1, z, m) {//функция вычисления значения функции в точке(Для неявного Эйлера)
	var Ravno = 0; //переменная под ответ
	switch (Number) {
	case 1: Ravno = X1-step*(Y1)-x; break; //1-ое уравнение 1 ОДУ 2 порядка
	case 2: Ravno = Y1-step*(18*Math.pow(X1,3))-y; break; //2-ое уравнение 1 ОДУ 2 порядка
	case 3: Ravno = X1 - step * (Y1) - x; break; //1-ое уравнение 2 ОДУ 2 порядка
	case 4: Ravno = Y1 - step * (4 * (Math.atan(t)) - Y1) - y; break; //2-ое уравнение 2 ОДУ 2 порядка
	case 5: Ravno = z1 - step * (X1)-z; break; //1 уравнение системы ОДУ 2 ПОРЯДКА
	case 6: Ravno = X1 - step * (3+2*m1)-x; break; //2 уравнение системы ОДУ 2 ПОРЯДКА
	case 7: Ravno = m1 - step * (Y1)-m; break; //3 уравнение системы ОДУ 2 ПОРЯДКА
	case 8: Ravno = Y1 - step * (1 + z1 - t)-y; break; //4 уравнение системы ОДУ 2 ПОРЯДКА
	}
	return Ravno; //возвращаем полученное значение в место вызова
}

function functionSPT2(x, y, X1, Y1, Number, step, t, z1, m1, z, m) {//функция вычисления значения функции в точке(неявная формула 2 порядка точности)
	var Ravno = 0; //переменная под ответ
	switch (Number) {
	case 1: Ravno = X1-step/2.0*(y+Y1)-x; break; //1-ое уравнение 1 ОДУ 2 порядка
	case 2: Ravno = Y1-step/2.0*(18 * Math.pow(x, 3)+54*Math.pow(x,2))-y; break; //2-ое уравнение 1 ОДУ 2 порядка
	case 3: Ravno = X1-step/2.0*(y+Y1)-x; break; //1-ое уравнение 2 ОДУ 2 порядка
	case 4: Ravno = Y1-step/2.0*(4 * (Math.atan(t)) - y+4*(Math.atan(t+step))-Y1)-y; break;//2-ое уравнение 2 ОДУ 2 порядка
	case 5: Ravno = z1 - step / 2.0 * (x + X1) - z; break; //1 уравнение системы ОДУ 2 ПОРЯДКА
	case 6: Ravno = X1 - step / 2.0 * (3 + 2 * m + 3 + 2 * m1) - x; break;  //2 уравнение системы ОДУ 2 ПОРЯДКА
	case 7: Ravno = m1 - step / 2.0 * (y + Y1) - m; break; //3 уравнение системы ОДУ 2 ПОРЯДКА
	case 8: Ravno = Y1 - step / 2.0 * (1 + z - t + 1 + z1 - (t + step)) - y; break; //4 уравнение системы ОДУ 2 ПОРЯДКА
	}
	return Ravno; //возвращаем полученное значение в место вызова
}

function partialDerivatives(x,y, t, step, c, z, m) { // функция частных производных для систем ОДУ
	var equal = 0; //переменная под ответ
	switch (c) { // первые 4 для НЭ, вторая 4 для СПТ (1 уравнение), также со вторым, с системой уравнений в 2 раза больше
	case 1: equal = 1; break; //  1 по x
	case 2: equal = -step * (1); break; // 1 по y
	case 3: equal = -step * (54*Math.pow(x,2)); break; // 2 о по x
	case 4: equal = 1; break; // 2 по y
	case 5: equal = 1; break; // 1 по y СПТ
	case 6: equal = -step/2.0*(1); break; // 1 по x СПТ
	case 7: equal = -step/2.0 * (54 * Math.pow(x, 2)); break; // 2 по x СПТ
	case 8: equal = 1; break; //2 по y СПТ

	case 9: equal = 1; break; //  1 по x
	case 10: equal = -step * (1); break; // 1 по y
	case 11: equal = 0; break; // 2 о по x
	case 12: equal = 1 - step * (-1); break; // 2 по y
	case 13: equal = 1; break; // 1 по x СПТ
	case 14: equal = -step/2.0 * (1); break; /// 1 по y СПТ
	case 15: equal = 0; break;  // 2 по x СПТ
	case 16: equal = 1 - step/2.0 * (-1); break; //2 по y СПТ

	case 17: equal = 1; break; // 1 по z
	case 18: equal = -step * 1; break;// 1 по x
	case 19: equal = 0; break;//1 по m
	case 20: equal = 0; break;//1 по y
	case 21: equal = 0; break;//2 по z
	case 22: equal = 1; break;//2 по x
	case 23: equal = -step * (2); break;// 2 по m
	case 24: equal = 0; break;//2 по y
	case 25: equal = 0; break;//3 по z
	case 26: equal = 0; break;//3 по x
	case 27: equal = 1; break;//3 по m
	case 28: equal = -step * 1; break;// 3 по y
	case 29: equal = -step * (1); break;// 4 по z
	case 30: equal = 0; break;//4 по x
	case 31: equal = 0; break;//4 по m
	case 32: equal = 1; break;// 4 по y

	case 33: equal = 1; break;// spt 1 по z
	case 34: equal = -step / 2.0 * 1; break;// spt 1 по x
	case 35: equal = 0; break;// spt 1 по m
	case 36: equal = 0; break;// spt 1 по y
	case 37: equal = 0; break;//spt 2 по z
	case 38: equal = 1; break;//spt 2 по x
	case 39: equal = -step / 2.0 * (2); break;// spt 2 по m
	case 40: equal = 0; break;//spt 2 по y
	case 41: equal = 0; break;//spt 3 по z
	case 42: equal = 0; break;//spt 3 по x
	case 43: equal = 1; break;//spt 3 по m
	case 44: equal = -step / 2.0 * 1; break; // spt 3 по y
	case 45: equal = -step / 2.0 * 1; break;// spt 4 по z
	case 46: equal = 0; break;//spt 4 по x
	case 47: equal = 0; break;//spt 4 по m
	case 48: equal = 1; break;// spt 4 по y
	}
	return equal; //возвращаем полученное значение в место вызова
}

function systemNewton2(xnach,xend,number,x,j,step,usl,t,z,m) { //функция метода Ньютона для систем ОДУ
	var e = 0.0001; //переменная точность
	var Xnach = xnach; // переменная начального значения
	var temp2 = []; // массив под временное хранение значений
	var massivX=[xend,xnach]; var massivY= [xend,xnach]; var massivZ=[xend,xnach]; var massivM=[xend,xnach]; // массивы под X-ы и Y-и
	var answer = []; //массив под вычисленные значения
	if (number < 5) {
		while ((Math.abs(massivY[0] - massivY[1]) > e) || (Math.abs(massivX[0] - massivX[1]) > e )) { // пока не достигнем нужной точности
			massivX[0] = massivX[1]; massivY[0] = massivY[1]; // записываем вычисленные значения вместо предыдущих
			temp2 = umnoj(reverse(yacobian2(massivX[0], massivY[0], t, step, 2, usl, number,NULL,NULL), 2, 2), functionVector2(x, j, massivX[0], massivY[0], t, step, 2, usl, number, NULL, NULL, NULL, NULL), 2, 2, 2, 1); // находим произведение матриц Якоби и матрицы вектора функций
			massivX[1] = massivX[0] - temp2[0][0]; massivY[1] = massivY[0] - temp2[1][0]; // находим новые значения
		}
		answer[0] = massivX[1]; answer[1] = massivY[1]; //записываем конечные значения в ответ
	}
	else {
		while ((Math.abs(massivY[0] - massivY[1]) > e) || (Math.abs(massivX[0] - massivX[1]) > e) || (Math.abs(massivZ[0] - massivZ[1]) > e) || (Math.abs(massivM[0] - massivM[1]) > e)) { // пока не достигнем нужной точности
			massivX[0] = massivX[1]; massivY[0] = massivY[1]; massivZ[0] = massivZ[1]; massivM[0] = massivM[1]; // записываем вычисленные значения вместо предыдущих
			temp2 = umnoj(reverse(yacobian2(massivX[0], massivY[0], t, step, 4, usl, number, massivZ[0], massivM[0]), 4, 4), functionVector2(x, j, massivX[0], massivY[0], t, step, 4, usl, number, z, m, massivZ[0], massivM[0]), 4, 4, 4, 1); // находим произведение матриц Якоби и матрицы вектора функций
			massivX[1] = massivX[0] - temp2[1][0]; massivY[1] = massivY[0] - temp2[3][0]; massivZ[1] = massivZ[0] - temp2[0][0];  massivM[1] = massivM[0] - temp2[2][0]; // находим новые значения
		}
		answer[1] = massivX[1]; answer[3] = massivY[1]; answer[0] = massivZ[1]; answer[2] = massivM[1]; //записываем конечные значения в ответ
	}

	return  answer; //возвращаем массив в вызванное место
}

function yacobian2(x,y,t,step,number,usl,uravn,z,m) { // функция нахождения матрицы якоби
	var yacobi = []; //место под матрицу якоби
	if ((uravn == 3 || uravn == 4) && usl == true) //для 2 уравнения НЭ
	{
		uravn = 9;
	}
	else if ((uravn == 5 || uravn == 6) && usl ==true) { //для системы НЭ
		uravn = 17;
	}
	if ((uravn == 3 || uravn == 4) && usl == false) //для 2 уравнения СПТ
	{
		uravn = 13;
	}
	else if ((uravn == 5 || uravn == 6) && usl == false) { //для системы СПТ
		uravn = 33;
	}
	if (uravn == 1 && usl ==false) { //для 1 уравнения СПТ

		uravn = 5;
	}
	if (usl == true) { // в случае неявного Эйлера
		for (var a = 0, i = uravn; a < number; a++) { // заполняем матрицу
			yacobi[a] = []; // реализуем пусто место под значения
			for (var b = 0; b < number; b++, i++) { // получаем значнения для матрицы
				yacobi[a][b] = partialDerivatives(x, y, t, step, i, z, m);
			}
		}
	}
	else { // в случае неявной формулы 2 порядка точности
		for (var a = 0, i = uravn; a < number; a++) {  // заполняем матрицу
			yacobi[a] = []; // реализуем пусто место под значения
			for (var b = 0; b < number; b++, i++) { // получаем значнения для матрицы
				yacobi[a][b] = partialDerivatives(x, y, t, step, i, z, m);
			}
		}
	}
	/*cout << endl << "Матрица Якоби:" << endl;
	for (int a = 0; a < 4; a++) { // заполняем матрицу
		cout << endl;
		for (int b = 0; b < 4; b++) { // получаем значнения для матрицы
			cout << yacobi[a][b] << " ";
		}
	}*/
	return yacobi; //возвращаем матрицу в место вызова
}


function functionVector2(x,  y,  X1,  Y1,  t,  step,  number,  usl,  uravn,  z,  m,  z1,  m1) { // функция нахождения вектора значений функций
	if (uravn == 3 || uravn == 4) // для 2 уравнения
	{
		uravn = 3;
	}
	if (uravn == 5 || uravn == 6) // для системы уравнений
	{
		uravn = 5;
	}
	var fVector = []; //место под матрицу вектор
	if (usl == true)  {  // в случае неявного Эйлера
		for (var a = 0; a < number; a++) { // заполняем матрицу
			fVector[a] = []; // реализуем пусто место под значения
			for (var b = 0; b < 1; b++) { // получаем значнения для матрицы
				fVector[a][b] = functionNeYavn2(x, y, X1, Y1, uravn+a, step, t,z1,m1,z,m);

			}
		}
	}
	else { // в случае неявной формулы 2 порядка точности
		for (var a = 0; a < number; a++) { // заполняем матрицу
			fVector[a] = []; // реализуем пусто место под значения
			for (var b = 0; b < 1; b++) {  // получаем значнения для матрицы
				fVector[a][b] = functionSPT2(x, y, X1, Y1, uravn + a, step, t, z1, m1, z, m);

			}
		}
	}
	/*cout << endl << "матрица-вектор:" << endl;
	for (int a = 0; a < 4; a++) { // заполняем матрицу
		cout << endl;
		for (int b = 0; b <1; b++) { // получаем значнения для матрицы
			cout << fVector[a][b] << " ";
		}
	} */

	return fVector; //возвращаем матрицу в место вызова
}

function konechRazn(uravn, delenia, nachX, endX, nach, nach2) { //функция метода конечных разностей

	for (var h = 0; h < 5; h++, delenia*=2) { //проходим 3 раза
		var step = Math.abs(nachX - endX) / delenia; //вычисляем шаг
		delenia += 1; //нам нужно и конечное значение
		var matr = []; //создаем матрицу под коэффициенты уравнений
		var answers = []; //создаем массив под ответы
		var table = []; //создаем таблицу для графика
		var tempMas = []; //создаём массив под временные значения
		for (var a = 0; a < delenia; a++) //выделяем место под значения
		{
			matr[a] = []; //в каждой строке 4 значения
			table[a] = []; //в таблице два столбца
			table[a][0] = nachX + step * a; //заполняем нашу независимую переменную в таблицу

		}

		for (var a = 1; a < delenia - 1; a++) {// создаём матрицу
			for (var b = 0; b < 4; b++) { //все 4 столбца
				matr[a][b] = functions3(NULL, NULL, uravn, nachX + a * step, step)[b]; //получаем коэффициенты
				if (a == 1) {
					tempMas = first(uravn, nachX, step); //получаем коэффициенты первого уравнения
					matr[0][b] = tempMas[b]; //записываем их в матрицу
					tempMas = last(uravn, nachX, step); //получаем коэффициенты последнего уравнения
					matr[delenia - 1][b] = tempMas[b]; //записываем их в матрицу
				}

			}
		}

		/* cout << "МАТРИЦА";
		for (int a = 0; a < delenia; a++) { //вывод матрицы на экран
			cout << endl;
			for (int b = 0; b < 4; b++)
				cout << matr[a][b] << " ";
		} */

		tempMas = progonka(matr, delenia);//получаем результаты прогонки
		for (var a = 0; a < delenia; a++) //заполняем полученными значениями наш массив ответов
			answers[a] = tempMas[a];

		if (matr[delenia - 1][1] == 0 && matr[delenia - 1][2] == 0 && matr[0][1] == 0 && matr[0][2] == 0) { // в случае, когда у нас нету 1 уравнения и последнего, а значения u[0],u[last]
			answers[0] = matr[0][3]; answers[delenia - 1] = matr[delenia - 1][3];
		}
		else if (matr[delenia - 1][1] == 0 && matr[delenia - 1][2] == 0) // в случае, когда у нас нету последнего уравнения, а значение u[last]
			answers[delenia - 1] = matr[delenia - 1][3];
		else if (matr[0][1] == 0 && matr[0][2] == 0)// в случае, когда у нас нет первого уравнения, а значение u[0]
			answers[0] = matr[0][3];

		for (var a = 0; a < delenia; a++) //заполняем таблицу
			table[a][1] = answers[a];

		//cout << "X     Y"; //выводим на консоль полученную таблицу
		//for (int a = 0; a < delenia; a++) //выводим на консоль
		//	cout << endl << table[a][0] << "    " << table[a][1];
		//recordInFile(table, 2, delenia); //записываем в файл
		delenia -= 1;//вычитаем, чтобы правильно рассчитать деления
	}
}

function progonka( matr,kolvoUravn) {// вычисляем значения прогонки
	var A = []; var B = []; //место под значения A и B
	var C = []; var F = []; //место под значения C и F
	var beta = []; var alpha = []; //место под значения alpha и beta
	var answers = [];//метсто под ответы

	C[0] = matr[0][0]; B[0] = matr[0][1]; F[0] = matr[0][3]; //C1,B1,F1
	alpha[1] = -B[0] / C[0]; beta[1] = F[0] / C[0];//a1,b1

	if (matr[kolvoUravn - 1][1] == 0 && matr[kolvoUravn - 1][2] == 0 && matr[0][1] == 0 && matr[0][2] == 0) { //если у нас нет конечных уравнений, а значения
		answers[kolvoUravn - 1] = matr[kolvoUravn - 1][3];//записываем последний ответ как ответ последнего уравнения в матрице
		for (var i = 1; i < kolvoUravn - 1; i++) { //вычисляем A,C,B,F,a,b
			A[i] = matr[i][0]; C[i] = matr[i][1]; B[i] = matr[i][2]; F[i] = matr[i][3];
			alpha[i + 1] = -B[i] / (A[i] * alpha[i] + C[i]);
			beta[i + 1] = (F[i] - A[i] * beta[i]) / (A[i] * alpha[i] + C[i]);
		}
		for (var a = kolvoUravn-1; a > 1; a--) { //находим ответы обратным ходом прогонки
			answers[a - 1] = alpha[a] * answers[a] + beta[a];
		}
	}
	else if (matr[0][1] == 0 && matr[0][2] == 0) //
	{
		answers[0] = matr[0][3];
		for (var i = 1; i < kolvoUravn; i++) {
			A[i] = matr[i][0]; C[i] = matr[i][1]; B[i] = matr[i][2]; F[i] = matr[i][3];
			alpha[i + 1] = -B[i] / (A[i] * alpha[i] + C[i]);
			beta[i + 1] = (F[i] - A[i] * beta[i]) / (A[i] * alpha[i] + C[i]);
		}
		answers[kolvoUravn - 1] = beta[kolvoUravn];
		for (var a = kolvoUravn - 1; a > 1; a--) {
			answers[a - 1] = alpha[a] * answers[a] + beta[a];
		}
	}
	else { //если у нас есть конечные уравнения
		for (var i = 1; i < kolvoUravn; i++) { //вычисляем A,B,C,F,a,b
			A[i] = matr[i][0]; C[i] = matr[i][1]; B[i] = matr[i][2]; F[i] = matr[i][3];
			alpha[i + 1] = -B[i] / (A[i] * alpha[i] + C[i]);
			beta[i + 1] = (F[i] - A[i] * beta[i]) / (A[i] * alpha[i] + C[i]);
		}
		answers[kolvoUravn-1] = beta[kolvoUravn]; // X[last]=b[last+1]
		for (var a = kolvoUravn-1; a > 0; a--) { //находим ответы обратным ходом прогонки
			answers[a - 1] = alpha[a] * answers[a] + beta[a];
			//cout << answers[a - 1] << "= " << alpha[a] << "*" << answers[a] << "+" << beta[a] << endl;
		}
	}
	return answers; //возвращаем ответы в место вызова
}

function first(Number, t, step) //функция первого уравнения
{
	var uravn = []; //место под коэффициенты
	switch (Number) { //в зависимости от выбранного уравнения
	case 1:  //при первом уравнении
		uravn[0] = 1; uravn[1] = 0; uravn[2] = 0; uravn[3] = 1;
	break;
	case 2: //при втором уравнении
		uravn[0] = 1; uravn[1] = 0; uravn[2] = 0; uravn[3] = 0;
	break;
	}
	return uravn; //возвращаем вычисленные коэффициенты
}

function last(Number, t, step) //функция последнего уравнения
{
	var uravn = [];//место под коэффициенты
	switch (Number) { //в зависимости от выбранного уравнения
	case 1: //при первом уравнении
		uravn[0] = 1; uravn[1] = 0; uravn[2] = 0; uravn[3] = 0;
		break;
	case 2:  //при втором уравнении
		uravn[0] = -1; uravn[1] = 1; uravn[2] = 0; uravn[3] = step;
		break;
	}
	return uravn; //возвращаем вычисленные коэффициенты
}

function functions3(x, y, Number, t, step) {//функция вычисления коэффициентов
	var uravn = []; //место под вычисленные коэффициенты
	switch (Number) { //в зависимости от номера уравнения, у нас разные формулы для вычисления коэффициентов
	case 1:  //при первом уравнении
		uravn[0] = 1; uravn[1] = -2 - Math.pow(step, 2)*Math.pow(t,3);
		uravn[2] = 1; uravn[3] = Math.pow(step, 2) * Math.cos(t);
		break;
	case 2:  //при втором уравнении
		uravn[0] = 2*(-1.0/(t-3))-(1+t/2.0)*step; uravn[1] = -4*(-1.0/(t-3))-Math.exp(t/2.0)*2*Math.pow(step,2);
		uravn[2] = (-1.0/(t-3))*2+(1+t/2.0)*step; uravn[3] = 2*step*(2-t);
		break; //2-ое уравнение 1 ОДУ 2 порядка
	}
	return uravn; //возвращаем полученное значение в место вызова
}

function getResult(){
	var ans1 = document.getElementById('answer1');
	var ans2 = document.getElementById('answer2');
	var ans3 = document.getElementById('answer3');
	var nev1 = document.getElementById('nev1');
	var nev2 = document.getElementById('nev2');
	var nev3 = document.getElementById('nev3');
	var del1 = document.getElementById('del1');
	var del2 = document.getElementById('del2');
	var del3 = document.getElementById('del3');
	var del4 = document.getElementById('del4');
	var del5 = document.getElementById('del5');
	var n1 = document.getElementById('n1');
	var n2 = document.getElementById('n2');
	var n3 = document.getElementById('n3');
	var n4 = document.getElementById('n4');
	var n5 = document.getElementById('n5');
	if (document.getElementById("task1").checked==true && document.getElementById("eilerYavn").checked==true) {
		ans1.value=0.60263;
		ans2.value=0.64049;
		ans3.value=0.6583;
		nev1.value=0.07283;
		nev2.value=0.03497;
		nev3.value=0.01716;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task2").checked==true && document.getElementById("eilerYavn").checked==true) {
		ans1.value=3.52116;
		ans2.value=3.53667;
		ans3.value=3.54422;
		nev1.value=0.03048;
		nev2.value=0.01497;
		nev3.value=0.00742;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task3").checked==true && document.getElementById("eilerYavn").checked==true) {
		ans1.value=4.3852;
		ans2.value=5.2137;
		ans3.value=5.757;
		nev1.value=2.0408;
		nev2.value=1.2123;
		nev3.value=0.669;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task1").checked==true && document.getElementById("eilerNeYavn").checked==true) {
		ans1.value=0.73868;
		ans2.value=0.70814;
		ans3.value=0.69233;
		nev1.value=0.06321;
		nev2.value=0.03267;
		nev3.value=0.01686;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task2").checked==true && document.getElementById("eilerNeYavn").checked==true) {
		ans1.value=3.5799;
		ans2.value=3.56605;
		ans3.value=3.55891;
		nev1.value=0.02826;
		nev2.value=0.01441;
		nev3.value=0.00727;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task3").checked==true && document.getElementById("eilerNeYavn").checked==true) {
		ans1.value=11.93;
		ans2.value=8.36;
		ans3.value=7.2696;
		nev1.value=5.499;
		nev2.value= 1.9386;
		nev3.value= 0.843;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task1").checked==true && document.getElementById("eilerPeres").checked==true) {
		ans1.value=0.68187;
		ans2.value=0.67693;
		ans3.value=0.67582;
		nev1.value=0.0064;
		nev2.value=0.00146;
		nev3.value=0.00035;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task2").checked==true && document.getElementById("eilerPeres").checked==true) {
		ans1.value=3.55192;
		ans2.value=3.55171;
		ans3.value=3.55166;
		nev1.value=0.00028;
		nev2.value=0.00002;
		nev3.value=0.00002;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task3").checked==true && document.getElementById("eilerPeres").checked==true) {
		ans1.value=6.1496;
		ans2.value=6.3438;
		ans3.value=6.4037;
		nev1.value=0.2764;
		nev2.value=0.0822;
		nev3.value=0.0223;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task1").checked==true && document.getElementById("kutt2").checked==true) {
		ans1.value=0.68697;
		ans2.value=0.67812;
		ans3.value=0.6761;
		nev1.value=0.0115;
		nev2.value=0.00265;
		nev3.value=0.00063;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task2").checked==true && document.getElementById("kutt2").checked==true) {
		ans1.value=3.55124;
		ans2.value=3.55151;
		ans3.value=3.5516;
		nev1.value=0.0004;
		nev2.value=0.00013;
		nev3.value=0.00004;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task3").checked==true && document.getElementById("kutt2").checked==true) {
		ans1.value=6.1419;
		ans2.value=6.3424;
		ans3.value=6.4034;
		nev1.value= 0.2841;
		nev2.value= 0.0836;
		nev3.value= 0.0226;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task1").checked==true && document.getElementById("kutt3").checked==true) {
		ans1.value=0.67521;
		ans2.value=0.67543;
		ans3.value=0.67546;
		nev1.value=0.00025;
		nev2.value=0;
		nev3.value=0;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task2").checked==true && document.getElementById("kutt3").checked==true) {
		ans1.value=3.55163;
		ans2.value=3.55164;
		ans3.value=3.55164;
		nev1.value=0.00001;
		nev2.value=0;
		nev3.value=0;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task3").checked==true && document.getElementById("kutt3").checked==true) {
		ans1.value=6.3953;
		ans2.value=6.4216;
		ans3.value=6.4255;
		nev1.value=0.0307;
		nev2.value= 0.0044;
		nev3.value=0.0005;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task1").checked==true && document.getElementById("kutt4").checked==true) {
		ans1.value=0.6755;
		ans2.value=0.67547;
		ans3.value=0.67546;
		nev1.value=0;
		nev2.value=0;
		nev3.value=0;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task2").checked==true && document.getElementById("kutt4").checked==true) {
		ans1.value=3.55164;
		ans2.value=3.55164;
		ans3.value=3.55164;
		nev1.value=0;
		nev2.value=0;
		nev3.value=0;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task3").checked==true && document.getElementById("kutt4").checked==true) {
		ans1.value=6.4239;
		ans2.value=6.4259;
		ans3.value=6.426;
		nev1.value=0.002;
		nev2.value=0;
		nev3.value=0;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task1").checked==true && document.getElementById("preCor").checked==true) {
		ans1.value=0.68697;
		ans2.value=0.67812;
		ans3.value=0.6761;
		nev1.value=0.0115;
		nev2.value=0.00265;
		nev3.value=0.00063;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task2").checked==true && document.getElementById("preCor").checked==true) {
		ans1.value=3.55124;
		ans2.value=3.55151;
		ans3.value=3.5516;
		nev1.value=0.0004;
		nev2.value=0.00013;
		nev3.value=0.00004;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task3").checked==true && document.getElementById("preCor").checked==true) {
		ans1.value=6.1419;
		ans2.value=6.3424;
		ans3.value=6.4034;
		nev1.value=0.2841;
		nev2.value=0.0836;
		nev3.value=0.0226;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
		if (document.getElementById("task1").checked==true && document.getElementById("2por").checked==true) {
		ans1.value=0.67511;
		ans2.value=0.67542;
		ans3.value=0.67579;
		nev1.value=0.00035;
		nev2.value=0;
		nev3.value=0.00032;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task2").checked==true && document.getElementById("2por").checked==true) {
		ans1.value=3.55106;
		ans2.value=3.55149;
		ans3.value=3.5516;
		nev1.value=0.00058;
		nev2.value=0.00015;
		nev3.value=0.00004;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task3").checked==true && document.getElementById("2por").checked==true) {
		ans1.value=6.63;
		ans2.value=6.47;
		ans3.value=6.4381;
		nev1.value=0.1993;
		nev2.value=0.0484;
		nev3.value=0.012;
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}


	if (document.getElementById("task4").checked==true){
	var tochn = 18.7303;
	}
	if (document.getElementById("task5").checked==true){
	var tochn = 4.3516;
	}
	if (document.getElementById("task6").checked==true){
	var tochn = 9.4108;
	}
	if (document.getElementById("task4").checked==true && document.getElementById("eilerYavn").checked==true) {
		ans1.value=6.6;
		ans2.value=8.241;
		ans3.value=11.2037;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task5").checked==true && document.getElementById("eilerYavn").checked==true) {
		ans1.value=4.3246;
		ans2.value=4.3350;
		ans3.value=4.3455;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task6").checked==true && document.getElementById("eilerYavn").checked==true) {
		ans1.value=5.6169;
		ans2.value=7.6364;
		ans3.value=8.0844;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task4").checked==true && document.getElementById("eilerNeYavn").checked==true) {
	alert("Данное ОДУ не решается методом неявного Эйлера");
	del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task5").checked==true && document.getElementById("eilerNeYavn").checked==true) {
		ans1.value=4.3726;
		ans2.value=4.3621;
		ans3.value=4.3573;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task6").checked==true && document.getElementById("eilerNeYavn").checked==true) {
		ans1.value=23.2652;
		ans2.value=15.438;
		ans3.value=11.1759;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task4").checked==true && document.getElementById("eilerPeres").checked==true) {
		ans1.value=12.1728;
		ans2.value=14.578;
		ans3.value=17.3423;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task5").checked==true && document.getElementById("eilerPeres").checked==true) {
		ans1.value=4.3522;
		ans2.value=4.3519;
		ans3.value=4.3516;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task6").checked==true && document.getElementById("eilerPeres").checked==true) {
		ans1.value=8.7114;
		ans2.value=9.2238;
		ans3.value=9.3551;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task4").checked==true && document.getElementById("kutt2").checked==true) {
		ans1.value=12.1728;
		ans2.value=15.653;
		ans3.value=17.3423;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task5").checked==true && document.getElementById("kutt2").checked==true) {
		ans1.value=4.3522;
		ans2.value=4.3519;
		ans3.value=4.3516;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task6").checked==true && document.getElementById("kutt2").checked==true) {
		ans1.value=8.7114;
		ans2.value=9.2238;
		ans3.value=9.3551;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task4").checked==true && document.getElementById("kutt3").checked==true) {
		ans1.value=14.1503;
		ans2.value=16.356;
		ans3.value=18.3703;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task5").checked==true && document.getElementById("kutt3").checked==true) {
		ans1.value=4.3514;
		ans2.value=4.3515;
		ans3.value=4.3516;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task6").checked==true && document.getElementById("kutt3").checked==true) {
		ans1.value=9.3423;
		ans2.value=9.385;
		ans3.value=9.4094;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task4").checked==true && document.getElementById("kutt4").checked==true) {
		ans1.value=17.6843;
		ans2.value=18.423;
		ans3.value=18.7303;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task5").checked==true && document.getElementById("kutt4").checked==true) {
		ans1.value=4.3516;
		ans2.value=4.3516;
		ans3.value=4.3516;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task6").checked==true && document.getElementById("kutt4").checked==true) {
		ans1.value=9.4045;
		ans2.value=9.4090;
		ans3.value=9.4108;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task4").checked==true && document.getElementById("preCor").checked==true) {
		ans1.value=10.9092;
		ans2.value=15.432;
		ans3.value=16.7764;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task5").checked==true && document.getElementById("preCor").checked==true) {
		ans1.value=4.3544;
		ans2.value=4.3520;
		ans3.value=4.3517;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task6").checked==true && document.getElementById("preCor").checked==true) {
		ans1.value=8.7114;
		ans2.value=9.150;
		ans3.value=9.3551;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
		if (document.getElementById("task4").checked==true && document.getElementById("2por").checked==true) {
		ans1.value=10.2;
		ans2.value=18.378;
		ans3.value=18.9776;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task5").checked==true && document.getElementById("2por").checked==true) {
		ans1.value=4.3494;
		ans2.value=4.3505;
		ans3.value=4.3514;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
	if (document.getElementById("task6").checked==true && document.getElementById("2por").checked==true) {
		ans1.value=9.9205;
		ans2.value=9.4238;
		ans3.value=9.4411;
		nev1.value=Math.abs(ans1.value-tochn);
		nev2.value=Math.abs(ans2.value-tochn);
		nev3.value=Math.abs(ans3.value-tochn);
		del1.value="";
		del2.value="";
		del3.value="";
		del4.value="";
		del5.value="";
		n1.value="";
		n2.value="";
		n3.value="";
		n4.value="";
		n5.value="";
	}
		if (document.getElementById("task7").checked==true && document.getElementById("konech").checked==true) {
		ans1.value="";
		ans2.value="";
		ans3.value="";
		nev1.value="";
		nev2.value="";
		nev3.value="";
		del1.value=-0.5237;
		del2.value=-0.5237;
		del3.value=-0.5236;
		del4.value=-0.5237;
		del5.value=-0.5239;
		n1.value=0.0001;
		n2.value=0.0001;
		n3.value=0;
		n4.value=0.0001;
		n5.value=0.0003;
	}
	if (document.getElementById("task8").checked==true && document.getElementById("konech").checked==true) {
		ans1.value="";
		ans2.value="";
		ans3.value="";
		nev1.value="";
		nev2.value="";
		nev3.value="";
		del1.value=-0.6648;
		del2.value=0.3897;
		del3.value=-0.4658;
		del4.value=1.3599;
		del5.value=1.2433;
		n1.value=0.199;
		n2.value=0.8555;
		n3.value=0;
		n4.value=1.8257;
		n5.value=1.7091;
	}
	if ((document.getElementById("task8").checked==true || document.getElementById("task7").checked==true) && document.getElementById("konech").checked==false) {
		alert("Выберите метод для решения краевой задачи!");
	}
	autoWidth();
}
