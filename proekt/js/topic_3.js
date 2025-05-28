$(document).ready(function() {
	window.active_page = 1;
	active(active_page);
});


function pushGraph(title, graphic, seriesGraph, prom) { //построение граика
	document.getElementById('chart').innerHTML = '';

	var plot1 = $.jqplot('chart', graphic,    //опции графика
		{
			title:{
				text: title,
				textColor: '#000'
			},
			series:seriesGraph,
			axes:{
				rendererOptions:{
					textColor: '#fff'
				},
				useSeriesColor: '#fff',
				xaxis:{
					min: prom.minX,
					max: prom.maxX,
					label:'X'
				},
				yaxis:{
					min: prom.minY - 0.5,
					max: prom.maxY + 0.5,
					label:'Y'
				}
			}
		}
	);
}
function roundPlus(x, n) { //округление числа
	if(isNaN(x) || isNaN(n)) return false;
	var m = Math.pow(10, n);
	return Math.round(x * m) / m;
}
function aproxim() {  //аппроксимация

	var m = {  // исходные точки для аппроксимации
		x : [0.1, 0.7, 0.9, 1.7, 1.9, 2.9, 3.7, 4.6],
		y : [0.0, 0.6, 1.4, 3.2, 2.7, 2.1, 2.8, 1.0]
	};

	var gApr = [], graphic = [], seriesGraph = [], prom = {};   // массивы

	prom.minX = m.x[0];
	prom.maxX = m.x[m.x.length - 1];
	prom.minY = m.y[0];
	prom.maxY = m.y[0];
	for (var i = 0; i < m.y.length ; i++) {
		var y = m.y[i];
		if (prom.minY > y) prom.minY = y;
		if (prom.maxY < y) prom.maxY = y;
	}

	var getGraph = function(){};
	var title = '';

	if ($('.metodLinApr').is(':checked')) { //Линейная аппроксимация
		var sX = 0, sY = 0, sXX = 0, sXY = 0;
		for (var i = 0; i < m.x.length; i++) {
			sX += m.x[i];
			sY += m.y[i];
			sXX += m.x[i] * m.x[i];
			sXY += m.x[i] * m.y[i];
			graphic.push([[m.x[i], m.y[i]]]);
			seriesGraph.push({showMarker:true, color:'orange'}); //отмечаем полученные точки в графике
		}
		var det = sXX * m.x.length - sX * sX; // детерминант
		var detK = sXY * m.x.length - sX * sY; // детерминант с замененными значениями
		var detB = sXX * sY - sX * sXY; // детерминант с замененными значениями
		var k = detK / det;  // назодим коэффициент для уравнения
		var b = detB / det;   // назодим коэффициент для уравнения

		getGraph = function(x) { // точки для построения полученной функции
			y = k*x + b; // полученная функция
			if (prom.minY > y) prom.minY = y; // находим минимальный у
			if (prom.maxY < y) prom.maxY = y; // находим максимальный у
			return y;
		}

		title = 'Линейная аппроксимация';

		var res = title + '</br>y = ' + roundPlus(k, 4) + ' * x';
		res += (b > 0) ? ' + ' + roundPlus(b, 4) : ' - ' + (roundPlus(b, 4) * -1);
		message(res, 0); // выводим уравнение

	}
	else if ($('.stepenApr').is(':checked')) { //степенная аппроксимации

		var sX = 0, sY = 0, sXX = 0, sXY = 0;
		for (var i = 0; i < m.x.length; i++) {
			graphic.push([[m.x[i], m.y[i]]]);
			m.x[i] = (m.x[i] !== 0) ? Math.log(m.x[i]) : 0;
			m.y[i] = (m.y[i] !== 0) ? Math.log(m.y[i]) : 0;
			sX += m.x[i];
			sY += m.y[i];
			sXX += m.x[i] * m.x[i];
			sXY += m.x[i] * m.y[i];
			seriesGraph.push({showMarker:true, color:'orange'});
		}
		var det = sXX * m.x.length - sX * sX;
		var detA = sXY * m.x.length - sX * sY;
		var detB = sXX * sY - sX * sXY;
		var a = detA / det;
		var b = Math.exp(detB / det);

		getGraph = function(x) {
			y = b * Math.pow(x, a);
			if (prom.minY > y) prom.minY = y;
			if (prom.maxY < y) prom.maxY = y;
			return y;
		}

		title = 'Степенная аппроксимация';

		var res = title + '</br>y = ' + roundPlus(b, 4) + ' * x^' + roundPlus(a, 4);
		message(res, 0);

	}
	else if ($('.pokazatApr').is(':checked')) { // показательная аппроксимации

		var sX = 0, sY = 0;
		for (var i = 0; i < m.x.length; i++) {
			sX += m.x[i];
			m.y[i] = (m.y[i] !== 0) ? Math.log(m.y[i]) : 0;
			sX += m.x[i];
			sY += m.y[i];
			sXX += m.x[i] * m.x[i];
			sXY += m.x[i] * m.y[i];
			seriesGraph.push({showMarker:true, color:'orange'});
		}

		var det = sXX * m.x.length - sX * sX;
		var detA = sXY * m.x.length - sX * sY;
		var detB = sXX * sY - sX * sXY;
		var a = detA / det;
		var b = Math.exp(detB / det);

		getGraph = function(x) {
			y = a*Math.exp(b*x);
			if (prom.minY > y) prom.minY = y;
			if (prom.maxY < y) prom.maxY = y;
			return y;
		}

		title = 'Показательная аппроксимация';

		var res = title + '</br>y = ' + roundPlus(a, 4)+ '*e^' + Math.log(roundPlus(b, 4) +'x';
		message(res, 0);

	}
	else if ($('.giperbApr').is(':checked')) { // Гиперболическая аппроксимация

		var sX = 0, sY = 0, sXX = 0, sXY = 0;
		for (var i = 0; i < m.x.length; i++) {
			graphic.push([[m.x[i], m.y[i]]]);
			m.x[i] = 1/m.x[i];
			sX += m.x[i];
			sY += m.y[i];
			sXX += m.x[i] * m.x[i];
			sXY += m.x[i] * m.y[i];
			seriesGraph.push({showMarker:true, color:'orange'});
		}
		var det = sXX * m.x.length - sX * sX;
		var detA = sXY * m.x.length - sX * sY;
		var detB = sXX * sY - sX * sXY;
		var a = detA / det;
		var b = detB / det;

		getGraph = function(x) {
			y = a/x + b;
			if (prom.minY > y) prom.minY = y;
			if (prom.maxY < y) prom.maxY = y;
			return y;
		}

		title = 'Гиперболическая аппроксимация';

		var res = title + '</br>y = ' + roundPlus(a, 4) + ' / x ' + ((b > 0) ? '+ ' + roundPlus(b, 4) : '- ' + (roundPlus(b, 4) * -1));
		message(res, 0);

	}
	else if ($('.drobnlinApr').is(':checked')) { //Дробно-линейная аппроксимация

		var sX = 0, sY = 0, sXX = 0, sXY = 0;
		for (var i = 0; i < m.x.length; i++) {
			graphic.push([[m.x[i], m.y[i]]]);
			m.y[i] = (m.y[i] !== 0) ? 1 / m.y[i] : 0;
			sX += m.x[i];
			sY += m.y[i];
			sXX += m.x[i] * m.x[i];
			sXY += m.x[i] * m.y[i];
			seriesGraph.push({showMarker:true, color:'orange'});
		}
		var det = sXX * m.x.length - sX * sX;
		var detA = sXY * m.x.length - sX * sY;
		var detB = sXX * sY - sX * sXY;
		var a = detA / det;
		var b = detB / det;

		getGraph = function(x) {
			y = 1 / (a * x + b);
			if (prom.minY > y) prom.minY = y;
			if (prom.maxY < y) prom.maxY = y;
			return y;
		}

		title = 'Дробно-линейная аппроксимация';

		var res = title + '</br>y = 1 / (' + roundPlus(a, 4) + ' * x ' + ((b > 0) ? '+ ' + roundPlus(b, 4) : '- ' + (roundPlus(b, 4) * -1)) + ')';
		message(res, 0);

	}
	else if ($('.drobnracnApr').is(':checked')) { //Дробно-рациональная аппроксимация

		var sX = 0, sY = 0, sXX = 0, sXY = 0;
		for (var i = 0; i < m.x.length; i++) {
			graphic.push([[m.x[i], m.y[i]]]);
			m.y[i] = (m.y[i] !== 0) ? 1 / m.y[i] : 0;
			m.x[i] = (m.x[i] !== 0) ? 1 / m.x[i] : 0;
			sX += m.x[i];
			sY += m.y[i];
			sXX += m.x[i] * m.x[i];
			sXY += m.x[i] * m.y[i];
			seriesGraph.push({showMarker:true, color:'orange'});
		}
		var det = sXX * m.x.length - sX * sX;
		var detA = sXY * m.x.length - sX * sY;
		var detB = sXX * sY - sX * sXY;
		var a = detA / det;
		var b = detB / det;

		getGraph = function(x) {
			y = x / (a * x + b);
			if (prom.minY > y) prom.minY = y;
			if (prom.maxY < y) prom.maxY = y;
			return y;
		}

		title = 'Дробно-рациональная аппроксимация';

		var res = title + '</br>y = x / (' + roundPlus(a, 4) + ' * x ' + ((b > 0) ? '+ ' + roundPlus(b, 4) : '- ' + (roundPlus(b, 4) * -1)) + ')';
		message(res, 0);

	}
	else if ($('.logorifmApr').is(':checked')) {//Логaрифмическая аппроксимация

		var sX = 0, sY = 0, sXX = 0, sXY = 0;
		for (var i = 0; i < m.x.length; i++) {
			graphic.push([[m.x[i], m.y[i]]]);
			m.x[i] = (m.x[i] !== 0) ? Math.log(m.x[i]) : 0;
			sX += m.x[i];
			sY += m.y[i];
			sXX += m.x[i] * m.x[i];
			sXY += m.x[i] * m.y[i];
			seriesGraph.push({showMarker:true, color:'orange'});
		}
		var det = sXX * m.x.length - sX * sX;
		var detA = sXY * m.x.length - sX * sY;
		var detB = sXX * sY - sX * sXY;
		var a = detA / det;
		var b = detB / det;

		getGraph = function(x) {
			y = a * Math.log(x) + b;
			if (prom.minY > y) prom.minY = y;
			if (prom.maxY < y) prom.maxY = y;
			return y;
		}

		title = 'Логaрифмическая аппроксимация';

		var res = title + '</br>y = ' + roundPlus(a, 4) + ' * ln(x) ' + ((b > 0) ? '+ ' + roundPlus(b, 4) : '- ' + (roundPlus(b, 4) * -1));
		message(res, 0);

	}
	else if ($('.metodParabApr').is(':checked')) { //Параболическая аппроксимация

		var sX = 0, sY = 0, sXX = 0, sXXX = 0, sXXXX = 0, sXY = 0, sXXY = 0;
		for (var i = 0; i < m.x.length; i++) {
			sX += m.x[i];
			sXX += m.x[i]*m.x[i];
			sXXX += m.x[i]*m.x[i]*m.x[i];
			sXXXX += m.x[i]*m.x[i]*m.x[i]*m.x[i];
			sY += m.y[i];
			sXY += m.y[i]*m.x[i];
			sXXY += m.y[i]*m.x[i]*m.x[i];
			graphic.push([[m.x[i], m.y[i]]]);
			seriesGraph.push({showMarker:true, color:'orange'});
		}

		var ravno = [sXXY, sXY, sY];
		var matr = [
			[sXXXX, sXXX, sXX],
			[sXXX, sXX, sX],
			[sXX, sX, m.x.length]
		];

		var res = resSlauGaus(matr, ravno);

		var a = res[0];
		var b = res[1];
		var c = res[2];

		getGraph = function(x) {
			y = a*x*x + b*x + c;
			if (prom.minY > y) prom.minY = y;
			if (prom.maxY < y) prom.maxY = y;
			return y;
		}

		title = 'Параболическая аппроксимация';

		var res = title + '</br>y = ' + roundPlus(a, 4) + ' * x^2 + ' + roundPlus(b, 4) + ' * x ' + ((c > 0) ? '+ ' + roundPlus(c, 4) : '- ' + (roundPlus(c, 4) * -1));
		message(res, 0);

	}

	graphic.push([[prom.minX, 0], [prom.maxX, 0]]); //опции графика
	seriesGraph.push({showMarker:false, color:'black', shadow: false, lineWidth: 1});

	graphic.push([[0, prom.minY - 0.5], [0, prom.maxY + 0.5]]);
	seriesGraph.push({showMarker:false, color:'black', shadow: false, lineWidth: 1});

	for (var x = prom.minX; x <= prom.maxX; x += 0.1) {
		gApr.push([x, getGraph(x)]);
	}

	graphic.push(gApr);
	seriesGraph.push({showMarker:false, color: '#1224A1'});

	pushGraph(title, graphic, seriesGraph, prom); // построение графика
}
function interpol() {  //интерполяция

	var m = {
		x : [0.38 , 0.4  , 0.81 , 1.25, 1.59 , 1.86 , 1.98 , 2.36 , 2.37 , 2.76   , 3.16 ],
		y : [1.462, 1.491, 2.247, 3.49, 4.903, 6.423, 7.242, 10.59, 10.697, 15.799, 23.57]
	};

	var gInt = [], graphic = [], seriesGraph = [], prom = {};

	prom.minX = m.x[0];
	prom.maxX = m.x[m.x.length - 1];
	prom.minY = m.y[0];
	prom.maxY = m.y[0];
	for (var i = 0; i < m.y.length ; i++) {
		var y = m.y[i];
		if (prom.minY > y) prom.minY = y;
		if (prom.maxY < y) prom.maxY = y;
	}

	var getGraph = function(){};
	var title = '';

	if ($('.metodLinInterp').is(':checked')) {  // Линейная интерполяция
		getGraph = function(x, r) {  //  построение графика
			if (r !== undefined) {
				var arr = {x: [], y: []};
				for (var i = 0; i < m.x.length; i++) {
					arr.x.push(m.y[i]);
					arr.y.push(m.x[i]);
				}
			} else var arr = m;
			var y0 = false, y1, y2, x0, x1, x2;
			var n = arr.x.length;
			for (var i = 0; i < n; i++) {
				if (arr.x[i] >= x) {
					if (i == 0) {
						x0 = arr.x[0]; x1 = arr.x[1];
						y0 = arr.y[0]; y1 = arr.y[1];
					}
					else if (i == n - 1) {
						x0 = arr.x[n - 2]; x1 = arr.x[n - 1];
						y0 = arr.y[n - 2]; y1 = arr.y[n - 1];
					} else {
						x0 = arr.x[i - 1]; x1 = arr.x[i];
						y0 = arr.y[i - 1]; y1 = arr.y[i];
					}
					return y0 * (x - x1) / (x0 - x1) + y1 * (x - x0) / (x1 - x0);
				}
			}
		}
		title = 'Линейная интерполяция';
	}
	else if ($('.metodParabInterp').is(':checked')) { //Параболическая интерполяция

		getGraph = function(x, r) {
			if (r !== undefined) {
				var arr = {x: [], y: []};
				for (var i = 0; i < m.x.length; i++) {
					arr.x.push(m.y[i]);
					arr.y.push(m.x[i]);
				}
			} else var arr = m;
			var y0 = false, y1, y2, x0, x1, x2;
			var n = arr.x.length;
			for (var i = 0; i < n; i++) {
				if (arr.x[i] >= x) {
					if (i == 0) {
						x0 = arr.x[0]; x1 = arr.x[1]; x2 = arr.x[2];
						y0 = arr.y[0]; y1 = arr.y[1]; y2 = arr.y[2];
					}
					else if (i == n - 1) {
						x0 = arr.x[n - 3]; x1 = arr.x[n - 2]; x2 = arr.x[n - 1];
						y0 = arr.y[n - 3]; y1 = arr.y[n - 2]; y2 = arr.y[n - 1];
					} else {
						x0 = arr.x[i - 1]; x1 = arr.x[i]; x2 = arr.x[i + 1];
						y0 = arr.y[i - 1]; y1 = arr.y[i]; y2 = arr.y[i + 1];
					}
					return y0 * (x - x1) * (x - x2) / ((x0 - x1) * (x0 - x2)) + y1 * (x - x0) * (x - x2) / ((x1 - x0) * (x1 - x2)) + y2 * (x - x0) * (x - x1) / ((x2 - x0) * (x2 - x1));
				}
			}
		}
		title = 'Параболическая интерполяция';
	}

	for (var x = prom.minX; x <= prom.maxX; x += 0.02) {
		gInt.push([x, getGraph(x)]);
	}
	graphic.push(gInt);
	seriesGraph.push({showMarker:false, color: '#1224A1'});

	for (var i = 0; i < m.x.length; i++) {
		graphic.push([[m.x[i], m.y[i]]]);
		seriesGraph.push({showMarker:true, color:'orange'});
	}

	var f172 = roundPlus(getGraph(1.72), 1);
	var f304 = roundPlus(getGraph(3.04), 1);
	var y20 = roundPlus(getGraph(20.001, true), 1);
	var y19 = roundPlus(getGraph(1.966, true), 1);
	graphic.push([[1.72, f172]]);
	graphic.push([[3.04, f304]]);
	graphic.push([[y20, 20.001]]);
	graphic.push([[y19, 1.966]]);
	seriesGraph.push({showMarker:true, color:'red'});
	seriesGraph.push({showMarker:true, color:'red'});
	seriesGraph.push({showMarker:true, color:'red'});
	seriesGraph.push({showMarker:true, color:'red'});

	var res = title + '</br>f(1.72) = ' + f172 + '</br>f(3.04) = ' + f304;
	res += '</br>При y = 20.001 x = ' + y20;
	res += '</br>При y = 1.966 x = ' + y19;
	message(res, 0);

	pushGraph(title, graphic, seriesGraph, prom);
}
