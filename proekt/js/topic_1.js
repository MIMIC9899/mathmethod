//извлечение иксов
function extract_x_n(){
    var x = document.getElementsByClassName("x");
    var n = document.getElementsByClassName("n");

    var listX = new Array();
    var listN = new Array();

    for (let i = 0; i < Math.sqrt(x.length); i++){
        listX[i] = new Array();
        for (let j = 0; j < Math.sqrt(x.length); j++){
            listX[i][j] = parseFloat(x[Math.sqrt(x.length) * i + j].value);
        }
        listN[i] = parseFloat(n[i].value);
    }

    return [listX, listN];
};


function methods(){
    var lst = extract_x_n();

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
            case "kramer":
                printResults("kramer", CramerIsMethod(lst[0], lst[1]), residuals(lst[0], lst[1], CramerIsMethod(lst[0], lst[1])));  
                break;
            case "gauss":
                printResults("gauss", GaussIsMethod(lst[0], lst[1], extMatrix(lst[0], lst[1])), residuals(lst[0], lst[1], GaussIsMethod(lst[0], lst[1], extMatrix(lst[0], lst[1]))));
                break;
            case "gauss-jordan":
                printResults("gauss-jordan", GaussJordanIsMethod(lst[0], lst[1], extMatrix(lst[0], lst[1])), residuals(lst[0], lst[1], GaussJordanIsMethod(lst[0], lst[1], extMatrix(lst[0], lst[1]))));
                break;
            case "inverse_matrix_method":
                printResults("inverse_matrix_method", MatrixIsMethod(lst[0], lst[1]), residuals(lst[0], lst[1], MatrixIsMethod(lst[0], lst[1])));
                break;
            case "jacobi":
                printResults("jacobi", Jacobi(lst[0], lst[1], eps), residuals(lst[0], lst[1], Jacobi(lst[0], lst[1], eps)));
                break;
            case "gauss-seidel":
                printResults("jacobi", Seidel(lst[0], lst[1], eps), residuals(lst[0], lst[1], Seidel(lst[0], lst[1], eps)));
                break;
            case "relaxation":
                printResults("jacobi", Relax(lst[0], lst[1], eps), residuals(lst[0], lst[1], Relax(lst[0], lst[1], eps)));
                break;
        }
    });
};

function printResults(title_meth, result_meth, resid_meth){
    var select = document.getElementById('results');

    print_mess = '<table>';

    for (let i = 1; i <= result_meth.length; i++){
        print_mess += ("<tr><td>" + "x<sub>" + i + "</sub> = " + result_meth[i-1] + "</td><td>"  + "res<sub>" + i + "</sub> = "  + resid_meth[i-1] + "</td></tr>");
    }
    print_mess += '</table>';
    select.innerHTML = print_mess;
}

//метод Крамера
function CramerIsMethod(A, b){
    var n = A.length; //показывает порядок матрицы
    var x = new Array(n); //вектор-столбец неизвестных
    var detMain = detMatrix(A); //находим детерминант основной матрицы

    for (let j = 0; j < n; j++){ //проходит по столбцам
        var B = new Array(n);

        for (let k = 0; k < n; k++) {//создаём дополнительную матрицу
            B[k] = A[k].slice();
        }
         
        for (let i = 0; i < n; i++){ //проходит по строкам
            B[i][j] = b[i]; //заменяет столбец на векто-свободных членов
            
        } 

        x[j] = detMatrix(B); //находим детерминант дополнительной матрицы
    }

    for (let i = 0; i < n; i++) { //заполняем вектор-столбец неизвестных
        x[i] = x[i] / detMain; //находим неизвестные
    }
    
    return x;
}

//метод Гаусса
function GaussIsMethod(A, b, B){
    var n = A.length; //показывает порядок матрицы
    var x = new Array(n); //вектор-столбец неизвестных
    var detMain = detMatrix(A); //находим детерминант основной матрицы

    for (let k = 0; k < n - 1; k++){ //проходит по столбцам
        for (let i = k + 1; i < n; i++){ //проходит по строкам
            var t = B[i][k] / B[k][k]; //нахождение коэффициента
            
            for (let j = 0; j < n + 1; j++){ //проходит по столбцам
                B[i][j] = (B[i][j] - B[k][j] * t); //обнуляем коэффиценты столбца
            }
        }
    }
                                //обратный ход
    for (let i = n - 1; i > -1; i--){ //проходит по строкам
        var tmp = B[i][n]; //нахождение коэффициента
        
        for (let j = n - 1; j > i; j--){ //проходит по столбцам
            tmp -= B[i][j] * x[j]; //обнуляем коэффиценты столбца
        }

        x[i] = tmp / B[i][i]; //находим неизвестные
    }

    return x;
}

//метод Гаусса-Жордана
function GaussJordanIsMethod(A, b, B){
    var n = A.length; //показывает порядок матрицы
    var x = new Array(n); //вектор-столбец неизвестных
    var detMain = detMatrix(A); //находим детерминант основной матрицыцу

    for (let k = 0; k < n; k++){ //проходит по столбцам
        var m = B[k][k]; //коэффициент

        for (let i = k; i < n + 1; i++){ //проходит по столбцам
            B[k][i] = B[k][i] / m; //превращет диагональный индекс в единицу
        }

        for (let i = k + 1; i < n; i++){ //проходит по строкам
            var t = B[i][k] / B[k][k]; //нахождение коэффициента

            for (let j = k; j < n + 1; j++){ //проходит по столбцам
                B[i][j] = (B[i][j] - B[k][j] * t); //обнуляем коэффициенты столбца
            }
        }
    }
    //обратный ход
    for (let k = n - 1; k > 0; k--){ //проходит по столбцам
        for (let i = k - 1; i > -1; i--){ //проходит по строкам
            for (let j = n; j > k - 1; j--){ //проходит по столбцам
                B[i][j] = B[i][j] - B[k][j] * B[i][k]; //обнуляем коэффиценты столбцца
            }
        }
    }

    for (let i = 0; i < n; i++){ //проходит по строкам
        x[i] = B[i][n]; //заполняем вектор-столбец неизвестных
    }
    
    return x;
}

//матричный метод
function MatrixIsMethod(A, b){
    var n = A.length; //показывает порядок матрицы
    var x = new Array(n); //вектор-столбец неизвестных
    var detMain = detMatrix(A); //находим детерминант основной матрицы
    
    var newA = compMatrix(A); //находим оbратную матрицу

    x = multMatrix(newA, b); //надим вектор-столбец неизвестных
    
    return x;
}

//метод Якоби
function Jacobi(A, b, eps){
    var n = A.length; //показывает порядок матрицы
    var x = b.slice(); //вектор-столбец неизвестных
    var xTmp = b.slice();
    var detMain = detMatrix(A); //находим детерминант основной матрицы
    var norm;
    var count = 0;

    do{
        for (let i = 0; i < n; i++){
            xTmp[i] = b[i];

            for (let j = 0; j < n; j++){
                if (i != j){
                    xTmp[i] -= A[i][j] * x[j];
                }
            }

            xTmp[i] /= A[i][i];
        }

        norm = Math.abs(x[0] - xTmp[0]);

        for (let i = 0; i < n; i++)
        {
            if (Math.abs(x[i] - xTmp[i]) > norm){
                norm = Math.abs(x[i] - xTmp[i]);
            }

            x[i] = xTmp[i];
        }

        count++;

    } while (norm > eps);
        
    return x;
}

//метод Гаусса-Зейделя
function Seidel(A, b, eps){
    var n = A.length;
    var x = b.slice();
    var tmp, nTmp, norm;
    var count = 0;
    var detMain = detMatrix(A); //находим детерминант основной матрицы
    do
    {
        norm = 0;
        for (let i = 0; i < n; i++)
        {
            tmp = b[i];
            for (let j = 0; j < n; j++){
                if (i != j){
                    tmp -= A[i][j] * x[j];
                }
            }
                
            tmp /= A[i][i];
            nTmp = Math.abs(x[i] - tmp);
            if (nTmp > norm){
                norm = nTmp;
            }
            x[i] = tmp;
            
        }
        count++;
    } while (norm > eps);

    return x;
}

//метод Релаксации
function Relax(A, b, eps){
    var n = A.length;
    var x = new Array(n);
    for (let i = 0; i < n; i++){
        x[i] = 0;
    }
    var tmpA = new Array(n);
    for (let i = 0; i < n; i++){
        tmpA[i] = A[i].slice();
    }
    var count = 0;
    var tmpB = b.slice();
    var detMain = detMatrix(A); //находим детерминант основной матрицы


    for (let i = 0; i < n; i++){
        var tmp = -tmpA[i][i];
        for (let j = 0; j < n; j++){
            tmpA[i][j] /= tmp;
        }
        tmpB[i] /= (-tmp);
    }
    var mst = tmpB.slice();
    var norm;
    do{
        count++;
        
        var max = mst[0];
        var k = 0;
        norm = 0;

        for (let i = 1; i < n; i++){
            if (Math.abs(max) <= Math.abs(mst[i])){
                max = mst[i];
                k = i;
            }
        }
        
        x[k] += mst[k];
        for (let i = 0; i < n; i++){
            mst[i] += tmpA[i][k] * max;
            if (Math.abs(norm) < Math.abs(mst[i])){
                norm = Math.abs(mst[i]);
            }
        }
    } while (eps < norm);
    return x;
}

//поиск невязок
function residuals(A, b, x){
    var k = A.length;
    var rsdRow = new Array(k);

    for (let i = 0; i < k; i++){
        rsdRow[i] = 0;
        for (let j = 0; j < k + 1; j++){
            if (j < k){
                rsdRow[i] += A[i][j] * x[j];
            }
            else{
                rsdRow[i] -= b[i];
            }
        }
        rsdRow[i] = Math.abs(rsdRow[i]);
    }

    return rsdRow;
}

//находит детерминант матрицы
function detMatrix(math){
    var deter = 0; //переменная в которой будет храниться детерминант
    var rows = math.length; //показывает порядок матрицы
    if (rows > 2) { //если матрица выше второго порядка
        for (let k = 0; k < rows; k++){ //проходит по столбцам
            var mathNew = new Array(rows-1); //матрица на порядок ниже
            for (let i = 1; i < rows; i++){ //проходит по строкам
                mathNew[i-1] = new Array(rows-1); //матрица на порядок ниже
                var jNew = 0; //переменная хранящаяя индекс столбца новой матрицы
                for (let j = 0; j < rows; j++){ //проходит по столбцам
                    if (j != k){
                        mathNew[i - 1][jNew] = math[i][j];
                        jNew++;
                    }
                }
            }
            var pow = Math.pow(-1, k); //-1 в степени k
            deter += (pow * math[0][k] * detMatrix(mathNew)); //нахождение детерминанта
        }
    }
    else{//детерминант матрицы второго порядка
        var tmp = math[0][0] * math[1][1] - math[0][1] * math[1][0]; 
        return tmp;
    }
    return deter;
}

//транспонирует матрицу
function tranMatrix(math){
    var rows = math.length; //находит количество строк
    var columns = math[0].length; //находит количество столбцов
    var tranM = new Array(rows); //создает новую матрицу
    for (let j = 0; j < rows; j++){ //проходит по столбцам
        tranM[j] = new Array(rows);
        for (let i = 0; i < columns; i++) //проходит по строкам
            tranM[j][i] = math[i][j];
    }
    return tranM;
}

//находит обратную матрицу
function compMatrix(math){
    var rows = math.length; //показывает порядок матрицы
    var cMath = new Array(rows);
    var newMath = new Array(rows-1);
    if (rows == 2){
        cMath[0] = new Array(rows);
        cMath[1] = new Array();
        cMath[0][0] = math[1][1];
        cMath[0][1] = -1 * math[1][0];
        cMath[1][0] = -1 * math[0][1];
        cMath[1][1] = math[0][0];
    }
    else{
        for (let lin = 0; lin < rows; lin++){ //проходит по строкам
            cMath[lin] = new Array(rows);
            for (let col = 0; col < rows; col++){ //проходит по столбцам
                var iComp = -1;
                for (let i = 0; i < rows; i++){ //проходит по строкам
                    var jComp = 0;
                    if (lin != i){
                        iComp++;
                        newMath[iComp] = new Array(rows-1);
                    }
                    for (let j = 0; j < rows; j++){ //проходит по столбцам
                        if (col != j && lin != i){
                            newMath[iComp][jComp] = math[i][j];
                            jComp++;
                        }
                    }
                    
                }
                var pow = Math.pow(-1, lin + col);
                cMath[lin][col] = pow * detMatrix(newMath);
            }
        }
    }
    cMath = tranMatrix(cMath);
    var dM = detMatrix(math);
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < rows; j++){
            cMath[i][j] /= dM;
        }
    }
    return cMath;
}

//умножение матриц
function multMatrix(A, B){
    var col = A.length;
    var rowsA = A.length;
    var rowsB = B.length;
    var C = new Array(rowsA);
    for (let i = 0; i < rowsA; i++){
        var tmp = 0;
        for (let k = 0; k < col; k++){
            tmp += (A[i][k] * B[k]);
        }
        C[i] = tmp;
    }
    return C;
}

//создаем расширенную матрицу
function extMatrix(A, b){
    var n = A.length; //
    var B = []; //расширенная матрица
    for (let i = 0; i < n; i++){ //проходит по строкам
        B[i] = [];
        for (let j = 0; j < n + 1; j++){ //проходит по столбцам
            if (j < n){ //пока j меренише n в матрицу B переписывается A
                B[i][j] = A[i][j];}
            else{ //если j равен n в матрицу B переписывается b
                B[i][j] = b[i];}
        }
    }
    return B;}
