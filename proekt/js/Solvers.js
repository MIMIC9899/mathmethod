function formatMatrix(mat, b = null) {
    const n = mat.length;
    let result = '';
    for (let i = 0; i < n; i++) {
        const row = mat[i].map(val => val.toFixed(4)).join('  ');
        result += b ? `${row} | ${b[i].toFixed(4)}\n` : `${row}\n`;
    }
    return result;
}

function detMatrix(math, logOutput = []) {
    const rows = math.length;
    if (rows === 0) {
        logOutput.push(`<p style="color:red">Ошибка: матрица пуста.</p>`);
        throw new Error("Матрица пуста");
    }
    if (rows !== math[0].length) {
        logOutput.push(`<p style="color:red">Ошибка: матрица не квадратная.</p>`);
        throw new Error("Матрица не квадратная");
    }
    let deter = 0;
    if (rows > 2) {
        logOutput.push(`<p>Вычисляем детерминант матрицы порядка ${rows}:</p>`);
        logOutput.push(`<pre>${formatMatrix(math)}</pre>`);
        for (let k = 0; k < rows; k++) {
            let mathNew = new Array(rows - 1);
            for (let i = 1; i < rows; i++) {
                mathNew[i - 1] = new Array(rows - 1);
                let jNew = 0;
                for (let j = 0; j < rows; j++) {
                    if (j !== k) {
                        mathNew[i - 1][jNew] = math[i][j];
                        jNew++;
                    }
                }
            }
            const pow = Math.pow(-1, k);
            const subDet = detMatrix(mathNew, logOutput);
            deter += pow * math[0][k] * subDet;
            logOutput.push(`<p>Младший минор для элемента a[0][${k}]: ${subDet.toFixed(4)}</p>`);
        }
    } else {
        deter = math[0][0] * math[1][1] - math[0][1] * math[1][0];
        logOutput.push(`<p>Детерминант матрицы 2x2: ${deter.toFixed(4)}</p>`);
    }
    if (Math.abs(deter) < 1e-10) {
        logOutput.push(`<p style="color:red">Ошибка: матрица вырожденная (детерминант ≈ 0).</p>`);
        throw new Error("Матрица вырожденная");
    }
    logOutput.push(`<p>Детерминант матрицы порядка ${rows}: ${deter.toFixed(4)}</p>`);
    return deter;
}

function tranMatrix(math, logOutput = []) {
    logOutput.push(`<p>Транспонируем матрицу:</p>`);
    const rows = math.length;
    const columns = math[0].length;
    const tranM = new Array(columns);
    for (let j = 0; j < columns; j++) {
        tranM[j] = new Array(rows);
        for (let i = 0; i < rows; i++) {
            tranM[j][i] = math[i][j];
        }
    }
    logOutput.push(`<pre>${formatMatrix(tranM)}</pre>`);
    return tranM;
}

function compMatrix(math, logOutput = []) {
    logOutput.push(`<p>Находим обратную матрицу:</p>`);
    const rows = math.length;
    if (rows !== math[0].length) {
        logOutput.push(`<p style="color:red">Ошибка: матрица не квадратная.</p>`);
        throw new Error("Матрица не квадратная");
    }
    const dM = detMatrix(math, logOutput);
    let cMath = new Array(rows);
    if (rows === 2) {
        cMath[0] = new Array(2);
        cMath[1] = new Array(2);
        cMath[0][0] = math[1][1];
        cMath[0][1] = -math[1][0];
        cMath[1][0] = -math[0][1];
        cMath[1][1] = math[0][0];
        logOutput.push(`<p>Матрица алгебраических дополнений (2x2):</p>`);
        logOutput.push(`<pre>${formatMatrix(cMath)}</pre>`);
    } else {
        for (let lin = 0; lin < rows; lin++) {
            cMath[lin] = new Array(rows);
            for (let col = 0; col < rows; col++) {
                let newMath = new Array(rows - 1);
                let iComp = -1;
                for (let i = 0; i < rows; i++) {
                    if (lin !== i) {
                        iComp++;
                        newMath[iComp] = new Array(rows - 1);
                        let jComp = 0;
                        for (let j = 0; j < rows; j++) {
                            if (col !== j) {
                                newMath[iComp][jComp] = math[i][j];
                                jComp++;
                            }
                        }
                    }
                }
                const pow = Math.pow(-1, lin + col);
                cMath[lin][col] = pow * detMatrix(newMath, logOutput);
                logOutput.push(`<p>Алгебраическое дополнение A[${lin}][${col}]: ${cMath[lin][col].toFixed(4)}</p>`);
            }
        }
    }
    cMath = tranMatrix(cMath, logOutput);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            cMath[i][j] /= dM;
        }
    }
    logOutput.push(`<p>Обратная матрица:</p>`);
    logOutput.push(`<pre>${formatMatrix(cMath)}</pre>`);
    return cMath;
}

function multMatrix(A, B, logOutput = []) {
    logOutput.push(`<p>Умножаем матрицу на вектор:</p>`);
    logOutput.push(`<pre>Матрица A:\n${formatMatrix(A)}</pre>`);
    logOutput.push(`<pre>Вектор B:\n${B.map(val => val.toFixed(4)).join('\n')}</pre>`);
    const rowsA = A.length;
    const col = A[0].length;
    if (col !== B.length) {
        logOutput.push(`<p style="color:red">Ошибка: размеры матрицы и вектора несовместимы.</p>`);
        throw new Error("Несовместимые размеры матрицы и вектора");
    }
    const C = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
        let tmp = 0;
        for (let k = 0; k < col; k++) {
            tmp += A[i][k] * B[k];
        }
        C[i] = tmp;
    }
    logOutput.push(`<p>Результат умножения:</p>`);
    logOutput.push(`<pre>${C.map(val => val.toFixed(4)).join('\n')}</pre>`);
    return C;
}

function extMatrix(A, b, logOutput = []) {
    logOutput.push(`<p>Создаем расширенную матрицу:</p>`);
    const n = A.length;
    if (n !== b.length) {
        logOutput.push(`<p style="color:red">Ошибка: размеры матрицы и вектора свободных членов несовместимы.</p>`);
        throw new Error("Несовместимые размеры матрицы и вектора");
    }
    const B = [];
    for (let i = 0; i < n; i++) {
        B[i] = [];
        for (let j = 0; j < n + 1; j++) {
            B[i][j] = j < n ? A[i][j] : b[i];
        }
    }
    logOutput.push(`<pre>${formatMatrix(B)}</pre>`);
    return B;
}

function gaussSolve(matrix, freeTerms, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Начинаем метод Гаусса.</p>`);
    const n = matrix.length;
    if (n !== freeTerms.length || n !== matrix[0].length) {
        logOutput.push(`<p style="color:red">Ошибка: некорректные размеры матрицы или вектора.</p>`);
        throw new Error("Некорректные размеры матрицы или вектора");
    }
    const solution = new Array(n);
    const mat = matrix.map(row => [...row]);
    const b = [...freeTerms];
    for (let i = 0; i < n; i++) {
        let maxRow = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(mat[k][i]) > Math.abs(mat[maxRow][i])) {
                maxRow = k;
            }
        }
        if (maxRow !== i) {
            [mat[i], mat[maxRow]] = [mat[maxRow], mat[i]];
            [b[i], b[maxRow]] = [b[maxRow], b[i]];
            logOutput.push(`<p>Перестановка строк ${i + 1} и ${maxRow + 1}:</p>`);
            logOutput.push(`<pre>${formatMatrix(mat, b)}</pre>`);
        }
        if (Math.abs(mat[i][i]) < 1e-10) {
            logOutput.push(`<p style="color:red">Ошибка: матрица вырожденная (ведущий элемент ≈ 0).</p>`);
            throw new Error("Матрица вырожденная");
        }
        const pivot = mat[i][i];
        for (let j = i; j < n; j++) {
            mat[i][j] /= pivot;
        }
        b[i] /= pivot;
        logOutput.push(`<p>Нормализация строки ${i + 1}:</p>`);
        logOutput.push(`<pre>${formatMatrix(mat, b)}</pre>`);
        for (let k = i + 1; k < n; k++) {
            const factor = mat[k][i];
            for (let j = i; j < n; j++) {
                mat[k][j] -= factor * mat[i][j];
            }
            b[k] -= factor * b[i];
            logOutput.push(`<p>Исключение переменной из строки ${k + 1}:</p>`);
            logOutput.push(`<pre>${formatMatrix(mat, b)}</pre>`);
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        solution[i] = b[i];
        for (let j = i + 1; j < n; j++) {
            solution[i] -= mat[i][j] * solution[j];
        }
        logOutput.push(`<p>Найдено значение x${i + 1} = ${solution[i].toFixed(4)}</p>`);
    }
    logOutput.push(`<p>Решение системы: [${solution.map(val => val.toFixed(4)).join(', ')}]</p>`);
    return solution;
}

function solveKramer(A, b, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Начинаем решение системы методом Крамера.</p>`);
    const n = A.length;
    if (n !== b.length || n !== A[0].length) {
        logOutput.push(`<p style="color:red">Ошибка: некорректные размеры матрицы или вектора.</p>`);
        throw new Error("Некорректные размеры матрицы или вектора");
    }
    const x = new Array(n);
    const detMain = detMatrix(A, logOutput);
    for (let j = 0; j < n; j++) {
        const B = A.map(row => [...row]);
        for (let i = 0; i < n; i++) {
            B[i][j] = b[i];
        }
        logOutput.push(`<p>Матрица с заменённым столбцом ${j + 1}:</p>`);
        logOutput.push(`<pre>${formatMatrix(B)}</pre>`);
        x[j] = detMatrix(B, logOutput);
        x[j] /= detMain;
        logOutput.push(`<p>x${j + 1} = ${x[j].toFixed(4)}</p>`);
    }
    logOutput.push(`<p>Решение системы: [${x.map(val => val.toFixed(4)).join(', ')}]</p>`);
    return x;
}

function solveMatrix(A, b, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Начинаем решение методом обратной матрицы.</p>`);
    const n = A.length;
    if (n !== b.length || n !== A[0].length) {
        logOutput.push(`<p style="color:red">Ошибка: некорректные размеры матрицы или вектора.</p>`);
        throw new Error("Некорректные размеры матрицы или вектора");
    }
    const detMain = detMatrix(A, logOutput);
    const newA = compMatrix(A, logOutput);
    const x = multMatrix(newA, b, logOutput);
    logOutput.push(`<p>Решение системы: [${x.map(val => val.toFixed(4)).join(', ')}]</p>`);
    return x;
}

function solveGaussJordan(A, b, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Начинаем метод Гаусса-Жордана.</p>`);
    const n = A.length;
    if (n !== b.length || n !== A[0].length) {
        logOutput.push(`<p style="color:red">Ошибка: некорректные размеры матрицы или вектора.</p>`);
        throw new Error("Некорректные размеры матрицы или вектора");
    }
    const B = extMatrix(A, b, logOutput);
    const detMain = detMatrix(A, logOutput);
    for (let k = 0; k < n; k++) {
        let maxRow = k;
        for (let i = k + 1; i < n; i++) {
            if (Math.abs(B[i][k]) > Math.abs(B[maxRow][k])) {
                maxRow = i;
            }
        }
        if (maxRow !== k) {
            [B[k], B[maxRow]] = [B[maxRow], B[k]];
            logOutput.push(`<p>Перестановка строк ${k + 1} и ${maxRow + 1}:</p>`);
            logOutput.push(`<pre>${formatMatrix(B)}</pre>`);
        }
        const pivot = B[k][k];
        if (Math.abs(pivot) < 1e-10) {
            logOutput.push(`<p style="color:red">Ошибка: матрица вырожденная (ведущий элемент ≈ 0).</p>`);
            throw new Error("Матрица вырожденная");
        }
        for (let j = k; j < n + 1; j++) {
            B[k][j] /= pivot;
        }
        logOutput.push(`<p>Нормализация строки ${k + 1}:</p>`);
        logOutput.push(`<pre>${formatMatrix(B)}</pre>`);
        for (let i = 0; i < n; i++) {
            if (i !== k) {
                const factor = B[i][k];
                for (let j = k; j < n + 1; j++) {
                    B[i][j] -= factor * B[k][j];
                }
            }
        }
        logOutput.push(`<p>Исключение переменной из всех строк для столбца ${k + 1}:</p>`);
        logOutput.push(`<pre>${formatMatrix(B)}</pre>`);
    }
    const x = new Array(n);
    for (let i = 0; i < n; i++) {
        x[i] = B[i][n];
        logOutput.push(`<p>Найдено значение x${i + 1} = ${x[i].toFixed(4)}</p>`);
    }
    logOutput.push(`<p>Решение системы: [${x.map(val => val.toFixed(4)).join(', ')}]</p>`);
    return x;
}

function solveJacobi(A, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Начинаем метод Якоби с точностью ε = ${eps.toFixed(6)}.</p>`);
    const n = A.length;
    if (n !== b.length || n !== A[0].length) {
        logOutput.push(`<p style="color:red">Ошибка: некорректные размеры матрицы или вектора.</p>`);
        throw new Error("Некорректные размеры матрицы или вектора");
    }
    const detMain = detMatrix(A, logOutput);
    let x = b.slice();
    let xTmp = b.slice();
    let norm;
    let count = 0;
    const maxIterations = 1000;
    do {
        count++;
        logOutput.push(`<p>Итерация ${count}:</p>`);
        for (let i = 0; i < n; i++) {
            if (Math.abs(A[i][i]) < 1e-10) {
                logOutput.push(`<p style="color:red">Ошибка: диагональный элемент A[${i}][${i}] ≈ 0.</p>`);
                throw new Error("Диагональный элемент равен нулю");
            }
            xTmp[i] = b[i];
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    xTmp[i] -= A[i][j] * x[j];
                }
            }
            xTmp[i] /= A[i][i];
        }
        norm = Math.abs(x[0] - xTmp[0]);
        for (let i = 0; i < n; i++) {
            if (Math.abs(x[i] - xTmp[i]) > norm) {
                norm = Math.abs(x[i] - xTmp[i]);
            }
            x[i] = xTmp[i];
        }
        logOutput.push(`<p>Текущие значения: [${x.map(val => val.toFixed(4)).join(', ')}], норма: ${norm.toFixed(6)}</p>`);
        if (count > maxIterations) {
            logOutput.push(`<p style="color:red">Ошибка: превышено максимальное количество итераций (${maxIterations}).</p>`);
            throw new Error("Метод не сошёлся");
        }
    } while (norm > eps);
    logOutput.push(`<p>Решение системы после ${count} итераций: [${x.map(val => val.toFixed(4)).join(', ')}]</p>`);
    return x;
}

function solveSeidel(A, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Начинаем метод Гаусса-Зейделя с точностью ε = ${eps.toFixed(6)}.</p>`);
    const n = A.length;
    if (n !== b.length || n !== A[0].length) {
        logOutput.push(`<p style="color:red">Ошибка: некорректные размеры матрицы или вектора.</p>`);
        throw new Error("Некорректные размеры матрицы или вектора");
    }
    const detMain = detMatrix(A, logOutput);
    let x = b.slice();
    let norm;
    let count = 0;
    const maxIterations = 1000;
    do {
        norm = 0;
        count++;
        logOutput.push(`<p>Итерация ${count}:</p>`);
        for (let i = 0; i < n; i++) {
            if (Math.abs(A[i][i]) < 1e-10) {
                logOutput.push(`<p style="color:red">Ошибка: диагональный элемент A[${i}][${i}] ≈ 0.</p>`);
                throw new Error("Диагональный элемент равен нулю");
            }
            let tmp = b[i];
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    tmp -= A[i][j] * x[j];
                }
            }
            tmp /= A[i][i];
            const nTmp = Math.abs(x[i] - tmp);
            if (nTmp > norm) {
                norm = nTmp;
            }
            x[i] = tmp;
        }
        logOutput.push(`<p>Текущие значения: [${x.map(val => val.toFixed(4)).join(', ')}], норма: ${norm.toFixed(6)}</p>`);
        if (count > maxIterations) {
            logOutput.push(`<p style="color:red">Ошибка: превышено максимальное количество итераций (${maxIterations}).</p>`);
            throw new Error("Метод не сошёлся");
        }
    } while (norm > eps);
    logOutput.push(`<p>Решение системы после ${count} итераций: [${x.map(val => val.toFixed(4)).join(', ')}]</p>`);
    return x;
}

function solveRelax(A, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Начинаем метод релаксации с точностью ε = ${eps.toFixed(6)}.</p>`);
    const n = A.length;
    if (n !== b.length || n !== A[0].length) {
        logOutput.push(`<p style="color:red">Ошибка: некорректные размеры матрицы или вектора.</p>`);
        throw new Error("Некорректные размеры матрицы или вектора");
    }
    const detMain = detMatrix(A, logOutput);
    let x = new Array(n).fill(0);
    let tmpA = A.map(row => [...row]);
    let tmpB = b.slice();
    let count = 0;
    const maxIterations = 1000;
    for (let i = 0; i < n; i++) {
        if (Math.abs(tmpA[i][i]) < 1e-10) {
            logOutput.push(`<p style="color:red">Ошибка: диагональный элемент A[${i}][${i}] ≈ 0.</p>`);
            throw new Error("Диагональный элемент равен нулю");
        }
        const tmp = -tmpA[i][i];
        for (let j = 0; j < n; j++) {
            tmpA[i][j] /= tmp;
        }
        tmpB[i] /= -tmp;
    }
    let mst = tmpB.slice();
    let norm;
    do {
        count++;
        let max = mst[0];
        let k = 0;
        norm = 0;
        for (let i = 1; i < n; i++) {
            if (Math.abs(max) <= Math.abs(mst[i])) {
                max = mst[i];
                k = i;
            }
        }
        x[k] += mst[k];
        for (let i = 0; i < n; i++) {
            mst[i] += tmpA[i][k] * max;
            if (Math.abs(norm) < Math.abs(mst[i])) {
                norm = Math.abs(mst[i]);
            }
        }
        logOutput.push(`<p>Итерация ${count}: x${k + 1} += ${max.toFixed(4)}, норма: ${norm.toFixed(6)}</p>`);
        logOutput.push(`<p>Текущие значения: [${x.map(val => val.toFixed(4)).join(', ')}]</p>`);
        if (count > maxIterations) {
            logOutput.push(`<p style="color:red">Ошибка: превышено максимальное количество итераций (${maxIterations}).</p>`);
            throw new Error("Метод не сошёлся");
        }
    } while (eps < norm);
    logOutput.push(`<p>Решение системы после ${count} итераций: [${x.map(val => val.toFixed(4)).join(', ')}]</p>`);
    return x;
}

// Nonlinear equation functions from topic_2.js
function getFunction() {
    const funcType = document.querySelector('input[name="funcType"]:checked')?.value;
    const coeffs = {
        poly: [
            parseFloat(document.getElementById('poly_a')?.value) || 0,
            parseFloat(document.getElementById('poly_b')?.value) || 0,
            parseFloat(document.getElementById('poly_c')?.value) || 0,
            parseFloat(document.getElementById('poly_d')?.value) || 0
        ],
        trig: [
            parseFloat(document.getElementById('trig_a')?.value) || 0,
            parseFloat(document.getElementById('trig_b')?.value) || 0,
            parseFloat(document.getElementById('trig_c')?.value) || 0
        ],
        logcos: [
            parseFloat(document.getElementById('logcos_a')?.value) || 0,
            parseFloat(document.getElementById('logcos_b')?.value) || 0,
            parseFloat(document.getElementById('logcos_c')?.value) || 0
        ]
    };
    switch (funcType) {
        case 'poly':
            return {
                f: x => coeffs.poly[0] * Math.pow(x, 3) + coeffs.poly[1] * Math.pow(x, 2) + coeffs.poly[2] * x + coeffs.poly[3],
                f1: x => 3 * coeffs.poly[0] * Math.pow(x, 2) + 2 * coeffs.poly[1] * x + coeffs.poly[2],
                f2: x => 6 * coeffs.poly[0] * x + 2 * coeffs.poly[1]
            };
        case 'trig':
            return {
                f: x => coeffs.trig[0] * x + coeffs.trig[1] * Math.sin(x) + coeffs.trig[2],
                f1: x => coeffs.trig[0] + coeffs.trig[1] * Math.cos(x),
                f2: x => -coeffs.trig[1] * Math.sin(x)
            };
        case 'logcos':
            return {
                f: x => coeffs.logcos[0] + coeffs.logcos[1] * Math.log(x) + coeffs.logcos[2] * Math.cos(2 * x),
                f1: x => coeffs.logcos[1] / x - 2 * coeffs.logcos[2] * Math.sin(2 * x),
                f2: x => -coeffs.logcos[1] / (x * x) - 4 * coeffs.logcos[2] * Math.cos(2 * x)
            };
        default:
            throw new Error("Не выбрана функция");
    }
}

function tableLocalization(a, b, logOutput = []) {
    let step = 2;
    let numRoot2 = 0;
    let X = [], Y = [];
    const { f } = getFunction();
    do {
        let numRoot1 = 0;
        let tmp = a;
        X = [];
        Y = [];
        step /= 2;
        while (tmp <= b) {
            X.push(tmp);
            Y.push(f(tmp));
            if (f(tmp) * f(tmp - step) < 0) {
                numRoot1++;
            }
            tmp += step;
        }
        logOutput.push(`<p>Шаг ${step.toFixed(4)}: найдено ${numRoot1} корней</p>`);
        logOutput.push(`<table><tr><th>X</th><th>f(X)</th></tr>${X.map((x, i) => `<tr><td>${x.toFixed(4)}</td><td>${Y[i].toFixed(4)}</td></tr>`).join('')}</table>`);
        if (numRoot1 === numRoot2) break;
        numRoot2 = numRoot1;
    } while (true);
    return [X, Y];
}

function halfDivision(a, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Метод половинного деления, ε = ${eps.toFixed(6)}</p>`);
    const { f } = getFunction();
    let x, count = 0;
    const history = [];
    do {
        x = (a + b) / 2;
        history.push([count, a, b, f(a), f(b), x, f(x)]);
        logOutput.push(`<p>Итерация ${count}: a=${a.toFixed(4)}, b=${b.toFixed(4)}, x=${x.toFixed(4)}, f(x)=${f(x).toFixed(4)}</p>`);
        if (f(x) * f(a) < 0) {
            b = x;
        } else {
            a = x;
        }
        count++;
    } while (Math.abs(f(x)) > eps || Math.abs(b - a) > 2 * eps);
    logOutput.push(`<p>Найден корень: x=${x.toFixed(4)} после ${count} итераций</p>`);
    return [history, x];
}

function chord(a, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Метод хорд, ε = ${eps.toFixed(6)}</p>`);
    const { f } = getFunction();
    let xTmp, x = 0, count = 0;
    const history = [];
    do {
        xTmp = x;
        x = a - (b - a) / (f(b) - f(a)) * f(a);
        history.push([count, a, b, f(a), f(b), x, f(x)]);
        logOutput.push(`<p>Итерация ${count}: a=${a.toFixed(4)}, b=${b.toFixed(4)}, x=${x.toFixed(4)}, f(x)=${f(x).toFixed(4)}</p>`);
        if (f(x) * f(a) < 0) {
            b = x;
        } else {
            a = x;
        }
        count++;
    } while (Math.abs(f(x)) > eps || Math.abs(x - xTmp) > eps);
    logOutput.push(`<p>Найден корень: x=${x.toFixed(4)} после ${count} итераций</p>`);
    return [history, x];
}

function goldenRatio(a, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Метод золотого сечения, ε = ${eps.toFixed(6)}</p>`);
    const { f } = getFunction();
    let x1, x2, count = 0;
    const history = [];
    const fi = 0.5 * (1.0 + Math.sqrt(5));
    do {
        x1 = b - (b - a) / fi;
        x2 = a + (b - a) / fi;
        history.push([count, a, b, f(a), f(b), x1, x2, f(x1), f(x2)]);
        logOutput.push(`<p>Итерация ${count}: a=${a.toFixed(4)}, b=${b.toFixed(4)}, x1=${x1.toFixed(4)}, x2=${x2.toFixed(4)}</p>`);
        if (f(a) * f(x1) < 0) {
            b = x1;
        } else if (f(x1) * f(x2) < 0) {
            a = x1;
            b = x2;
        } else {
            a = x2;
        }
        count++;
    } while (Math.abs(f((a + b) / 2)) > eps || Math.abs(b - a) > 2 * eps);
    logOutput.push(`<p>Найден корень: x=${x2.toFixed(4)} после ${count} итераций</p>`);
    return [history, x2];
}

function ridder(a, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Метод Риддера, ε = ${eps.toFixed(6)}</p>`);
    const { f } = getFunction();
    let xTmp, c, x = 0, count = 0;
    const history = [];
    do {
        xTmp = x;
        c = (a + b) / 2;
        x = c + (c - a) * Math.sign(f(a) - f(b)) * f(c) / Math.sqrt(f(c) ** 2 - f(a) * f(b));
        history.push([count, a, b, c, f(a), f(b), f(c), x, f(x)]);
        logOutput.push(`<p>Итерация ${count}: a=${a.toFixed(4)}, b=${b.toFixed(4)}, c=${c.toFixed(4)}, x=${x.toFixed(4)}</p>`);
        if (f(a) * f(x) < 0) {
            b = x;
        } else {
            a = x;
        }
        count++;
    } while (Math.abs(f(x)) > eps || Math.abs(x - xTmp) > eps);
    logOutput.push(`<p>Найден корень: x=${x.toFixed(4)} после ${count} итераций</p>`);
    return [history, x];
}

function newton(a, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Метод Ньютона, ε = ${eps.toFixed(6)}</p>`);
    const { f, f1, f2 } = getFunction();
    let x1, x2, count = 0;
    const history = [];
    if (f(a) * f2(a) < 0) {
        x2 = b;
    } else if (f(b) * f2(b) < 0) {
        x2 = a;
    } else {
        x2 = (a + b) / 2;
    }
    do {
        x1 = x2;
        history.push([count, x1, f(x1), f1(x1)]);
        x2 = x1 - f(x1) / f1(x1);
        logOutput.push(`<p>Итерация ${count}: x=${x1.toFixed(4)}, f(x)=${f(x1).toFixed(4)}, f'(x)=${f1(x1).toFixed(4)}</p>`);
        count++;
    } while (Math.abs(x2 - x1) > eps || Math.abs(f(x1)) > eps);
    logOutput.push(`<p>Найден корень: x=${x2.toFixed(4)} после ${count} итераций</p>`);
    return [history, x2];
}

function modNewton(a, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Модифицированный метод Ньютона, ε = ${eps.toFixed(6)}</p>`);
    const { f, f1, f2 } = getFunction();
    let x1, x2, x0F, count = 0;
    const history = [];
    if (f(a) * f2(a) < 0) {
        x2 = b;
    } else if (f(b) * f2(b) < 0) {
        x2 = a;
    } else {
        x2 = (a + b) / 2;
    }
    x0F = f1(x2);
    do {
        x1 = x2;
        history.push([count, x1, f(x1), f1(x1)]);
        x2 = x1 - f(x1) / x0F;
        logOutput.push(`<p>Итерация ${count}: x=${x1.toFixed(4)}, f(x)=${f(x1).toFixed(4)}, f'(x0)=${x0F.toFixed(4)}</p>`);
        count++;
    } while (Math.abs(x2 - x1) > eps || Math.abs(f(x1)) > eps);
    logOutput.push(`<p>Найден корень: x=${x2.toFixed(4)} после ${count} итераций</p>`);
    return [history, x2];
}

function secant(a, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Метод секущих, ε = ${eps.toFixed(6)}</p>`);
    const { f, f2 } = getFunction();
    let x1, x, x0, count = 0;
    const history = [];
    if (f(a) * f2(a) < 0) {
        x = b;
    } else if (f(b) * f2(b) < 0) {
        x = a;
    } else {
        x = (a + b) / 2;
    }
    x0 = x - Math.sign(x) * eps;
    do {
        x1 = x;
        history.push([count, x1, x0, f(x1), f(x0)]);
        x = x1 - (x1 - x0) / (f(x1) - f(x0)) * f(x1);
        logOutput.push(`<p>Итерация ${count}: x1=${x1.toFixed(4)}, x0=${x0.toFixed(4)}, f(x1)=${f(x1).toFixed(4)}</p>`);
        count++;
        x0 = x1;
    } while (Math.abs(x - x1) > eps || Math.abs(f(x1)) > eps);
    logOutput.push(`<p>Найден корень: x=${x.toFixed(4)} после ${count} итераций</p>`);
    return [history, x];
}

function muller(a, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Метод Мюллера, ε = ${eps.toFixed(6)}</p>`);
    const { f, f2 } = getFunction();
    let x1, x, x2, x3, A, B, C, q, x_tmp_1, x_tmp_2, count = 0;
    const history = [];
    if (f(a) * f2(a) < 0) {
        x = b;
    } else if (f(b) * f2(b) < 0) {
        x = a;
    } else {
        x = (a + b) / 2;
    }
    x3 = x;
    x2 = x - Math.sign(x) * eps;
    x1 = x - 2 * Math.sign(x) * eps;
    do {
        q = (x3 - x2) / (x2 - x1);
        history.push([count, x3, x2, x1, f(x3), f(x2), f(x1), q]);
        A = q * f(x3) - q * (1 + q) * f(x2) + q ** 2 * f(x1);
        B = (2 * q + 1) * f(x3) - (1 + q) ** 2 * f(x2) + q ** 2 * f(x1);
        C = (1 + q) * f(x3);
        x_tmp_1 = x3 - (x3 - x2) * (2 * C) / (B - Math.sqrt(B ** 2 - 4 * A * C));
        x_tmp_2 = x3 - (x3 - x2) * (2 * C) / (B + Math.sqrt(B ** 2 - 4 * A * C));
        if (a <= x_tmp_1 && x_tmp_1 <= b) {
            x = x_tmp_1;
        } else {
            x = x_tmp_2;
        }
        logOutput.push(`<p>Итерация ${count}: x3=${x3.toFixed(4)}, x=${x.toFixed(4)}, q=${q.toFixed(4)}</p>`);
        x1 = x2;
        x2 = x3;
        x3 = x;
        count++;
    } while (Math.abs(x - x1) > eps || Math.abs(f(x1)) > eps);
    logOutput.push(`<p>Найден корень: x=${x3.toFixed(4)} после ${count} итераций</p>`);
    return [history, x3];
}

function simpleIteration(a, b, eps, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Метод простой итерации, ε = ${eps.toFixed(6)}</p>`);
    const { f, f1, f2 } = getFunction();
    let x, x0, xTmp, dX = 1e10, count = 0;
    const history = [];
    if (f(a) * f2(a) < 0) {
        x = b;
    } else if (f(b) * f2(b) < 0) {
        x = a;
    } else {
        x = (a + b) / 2;
    }
    x0 = x;
    do {
        xTmp = x;
        x = xTmp - f(xTmp) / f1(x0);
        history.push([count, xTmp, x]);
        dX = x - xTmp;
        logOutput.push(`<p>Итерация ${count}: x=${xTmp.toFixed(4)}, x_new=${x.toFixed(4)}</p>`);
        count++;
    } while (dX ** 2 > eps);
    logOutput.push(`<p>Найден корень: x=${x.toFixed(4)} после ${count} итераций</p>`);
    return [history, x];
}

// Interpolation and Approximation from topic_3.js
function lagrangeInterpolation(points, x, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Интерполяция Лагранжа</p>`);
    let y = 0;
    const n = points.length;
    for (let i = 0; i < n; i++) {
        let term = points[i].y;
        let termStr = `${points[i].y.toFixed(4)}`;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                term *= (x - points[j].x) / (points[i].x - points[j].x);
                termStr += ` * (${x.toFixed(4)} - ${points[j].x.toFixed(4)}) / (${points[i].x.toFixed(4)} - ${points[j].x.toFixed(4)})`;
            }
        }
        y += term;
        logOutput.push(`<p>Слагаемое ${i + 1}: ${termStr} = ${term.toFixed(4)}</p>`);
    }
    logOutput.push(`<p>Значение в x=${x.toFixed(4)}: y=${y.toFixed(4)}</p>`);
    return y;
}

function linearInterpolation(points, x, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Линейная интерполяция</p>`);
    const n = points.length;
    for (let i = 0; i < n - 1; i++) {
        if (points[i].x <= x && x <= points[i + 1].x) {
            const y = points[i].y * (x - points[i + 1].x) / (points[i].x - points[i + 1].x) +
                      points[i + 1].y * (x - points[i].x) / (points[i + 1].x - points[i].x);
            logOutput.push(`<p>Интерполяция между (${points[i].x.toFixed(4)}, ${points[i].y.toFixed(4)}) и (${points[i + 1].x.toFixed(4)}, ${points[i + 1].y.toFixed(4)})</p>`);
            logOutput.push(`<p>y = ${points[i].y.toFixed(4)} * (${x.toFixed(4)} - ${points[i + 1].x.toFixed(4)}) / (${points[i].x.toFixed(4)} - ${points[i + 1].x.toFixed(4)}) + ... = ${y.toFixed(4)}</p>`);
            return y;
        }
    }
    throw new Error("Точка x вне диапазона точек");
}

function linearApproximation(points, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Линейная аппроксимация</p>`);
    let sX = 0, sY = 0, sXX = 0, sXY = 0, n = points.length;
    for (let i = 0; i < n; i++) {
        sX += points[i].x;
        sY += points[i].y;
        sXX += points[i].x * points[i].x;
        sXY += points[i].x * points[i].y;
    }
    const det = sXX * n - sX * sX;
    const detK = sXY * n - sX * sY;
    const detB = sXX * sY - sX * sXY;
    const k = detK / det;
    const b = detB / det;
    logOutput.push(`<p>Коэффициенты: k=${k.toFixed(4)}, b=${b.toFixed(4)}</p>`);
    logOutput.push(`<p>Уравнение: y = ${k.toFixed(4)} * x + ${b.toFixed(4)}</p>`);
    return { k, b };
}

// Numerical Integration
function rectangleMethod(a, b, n, logOutput = []) {
    logOutput.length = 0;
    logOutput.push(`<p>Метод прямоугольников, n=${n}</p>`);
    const { f } = getFunction();
    const h = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        const x = a + i * h;
        sum += f(x);
        logOutput.push(`<p>Прямоугольник ${i + 1}: x=${x.toFixed(4)}, f(x)=${f(x).toFixed(4)}</p>`);
    }
    const integral = h * sum;
    logOutput.push(`<p>Интеграл: ${integral.toFixed(4)}</p>`);
    return integral;
}

function generateMatrixInputs(n) {
    const container = document.getElementById('matrix-input');
    container.innerHTML = '';
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.className = 'form-row d-flex align-items-center mb-2';
        for (let j = 0; j < n; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'form-control mx-1';
            input.style.width = '80px';
            input.placeholder = `a${i+1}${j+1}`;
            input.id = `coeff-${i}-${j}`;
            row.appendChild(input);
        }
        const freeInput = document.createElement('input');
        freeInput.type = 'number';
        freeInput.className = 'form-control mx-1';
        freeInput.style.width = '80px';
        freeInput.placeholder = `b${i+1}`;
        freeInput.id = `free-${i}`;
        row.appendChild(document.createTextNode(' = '));
        row.appendChild(freeInput);
        container.appendChild(row);
    }
    const method = document.getElementById('method').value;
    document.getElementById('eps-input').style.display = (['jacobi', 'seidel', 'relax', 'IMHalfDivision', 'IMChord', 'IMGoldenRatio', 'IMRidder', 'IMNewton', 'IMModNewton', 'IMSecant', 'IMMuller', 'IMSimpleIteration'].includes(method)) ? 'block' : 'none';
}

function generateNonlinearInputs() {
    const container = document.getElementById('matrix-input');
    container.innerHTML = `
        <div class="form-group">
            <label>Выберите функцию:</label>
            <div>
                <input type="radio" name="funcType" value="poly" id="func_poly" checked>
                <label for="func_poly">ax³ + bx² + cx + d</label>
                <input type="number" id="poly_a" class="form-control d-inline-block mx-1" style="width:80px" placeholder="a" value="1">
                <input type="number" id="poly_b" class="form-control d-inline-block mx-1" style="width:80px" placeholder="b" value="-3">
                <input type="number" id="poly_c" class="form-control d-inline-block mx-1" style="width:80px" placeholder="c" value="0">
                <input type="number" id="poly_d" class="form-control d-inline-block mx-1" style="width:80px" placeholder="d" value="0">
            </div>
            <div>
                <input type="radio" name="funcType" value="trig" id="func_trig">
                <label for="func_trig">ax + b*sin(x) + c</label>
                <input type="number" id="trig_a" class="form-control d-inline-block mx-1" style="width:80px" placeholder="a" value="1">
                <input type="number" id="trig_b" class="form-control d-inline-block mx-1" style="width:80px" placeholder="b" value="1">
                <input type="number" id="trig_c" class="form-control d-inline-block mx-1" style="width:80px" placeholder="c" value="0">
            </div>
            <div>
                <input type="radio" name="funcType" value="logcos" id="func_logcos">
                <label for="func_logcos">a + b*ln(x) + c*cos(2x)</label>
                <input type="number" id="logcos_a" class="form-control d-inline-block mx-1" style="width:80px" placeholder="a" value="0">
                <input type="number" id="logcos_b" class="form-control d-inline-block mx-1" style="width:80px" placeholder="b" value="1">
                <input type="number" id="logcos_c" class="form-control d-inline-block mx-1" style="width:80px" placeholder="c" value="1">
            </div>
        </div>
        <div class="form-group mt-3">
            <label for="interval_a">Левая граница (a):</label>
            <input type="number" id="interval_a" class="form-control" value="0.5">
            <label for="interval_b">Правая граница (b):</label>
            <input type="number" id="interval_b" class="form-control" value="1">
        </div>
    `;
}

function generateInterpolationInputs() {
    const container = document.getElementById('matrix-input');
    container.innerHTML = `
        <div class="form-group">
            <label for="points_count">Количество точек:</label>
            <input type="number" id="points_count" class="form-control" min="2" max="10" value="4" oninput="generatePointsInputs(this.value)">
        </div>
        <div id="points-input"></div>
        <div class="form-group mt-3">
            <label for="interp_x">Точка интерполяции (x):</label>
            <input type="number" id="interp_x" class="form-control" value="1.5">
        </div>
    `;
    generatePointsInputs(4);
}

function generatePointsInputs(n) {
    const container = document.getElementById('points-input');
    container.innerHTML = '';
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.className = 'form-row d-flex align-items-center mb-2';
        const xInput = document.createElement('input');
        xInput.type = 'number';
        xInput.className = 'form-control mx-1';
        xInput.style.width = '80px';
        xInput.placeholder = `x${i+1}`;
        xInput.id = `point_x_${i}`;
        const yInput = document.createElement('input');
        yInput.type = 'number';
        yInput.className = 'form-control mx-1';
        yInput.style.width = '80px';
        yInput.placeholder = `y${i+1}`;
        yInput.id = `point_y_${i}`;
        row.appendChild(xInput);
        row.appendChild(yInput);
        container.appendChild(row);
    }
}

function generateApproximationInputs() {
    const container = document.getElementById('matrix-input');
    container.innerHTML = `
        <div class="form-group">
            <label for="points_count">Количество точек:</label>
            <input type="number" id="points_count" class="form-control" min="2" max="10" value="4" oninput="generatePointsInputs(this.value)">
        </div>
        <div id="points-input"></div>
    `;
    generatePointsInputs(4);
}

function generateIntegrationInputs() {
    const container = document.getElementById('matrix-input');
    container.innerHTML = `
        <div class="form-group">
            <label>Выберите функцию:</label>
            <div>
                <input type="radio" name="funcType" value="poly" id="func_poly" checked>
                <label for="func_poly">ax³ + bx² + cx + d</label>
                <input type="number" id="poly_a" class="form-control d-inline-block mx-1" style="width:80px" placeholder="a" value="1">
                <input type="number" id="poly_b" class="form-control d-inline-block mx-1" style="width:80px" placeholder="b" value="-3">
                <input type="number" id="poly_c" class="form-control d-inline-block mx-1" style="width:80px" placeholder="c" value="0">
                <input type="number" id="poly_d" class="form-control d-inline-block mx-1" style="width:80px" placeholder="d" value="0">
            </div>
            <div>
                <input type="radio" name="funcType" value="trig" id="func_trig">
                <label for="func_trig">ax + b*sin(x) + c</label>
                <input type="number" id="trig_a" class="form-control d-inline-block mx-1" style="width:80px" placeholder="a" value="1">
                <input type="number" id="trig_b" class="form-control d-inline-block mx-1" style="width:80px" placeholder="b" value="1">
                <input type="number" id="trig_c" class="form-control d-inline-block mx-1" style="width:80px" placeholder="c" value="0">
            </div>
            <div>
                <input type="radio" name="funcType" value="logcos" id="func_logcos">
                <label for="func_logcos">a + b*ln(x) + c*cos(2x)</label>
                <input type="number" id="logcos_a" class="form-control d-inline-block mx-1" style="width:80px" placeholder="a" value="0">
                <input type="number" id="logcos_b" class="form-control d-inline-block mx-1" style="width:80px" placeholder="b" value="1">
                <input type="number" id="logcos_c" class="form-control d-inline-block mx-1" style="width:80px" placeholder="c" value="1">
            </div>
        </div>
        <div class="form-group mt-3">
            <label for="interval_a">Левая граница (a):</label>
            <input type="number" id="interval_a" class="form-control" value="0">
            <label for="interval_b">Правая граница (b):</label>
            <input type="number" id="interval_b" class="form-control" value="1">
            <label for="n_intervals">Количество интервалов (n):</label>
            <input type="number" id="n_intervals" class="form-control" value="100">
        </div>
    `;
}

function solveSystem() {
    const method = document.getElementById('method').value;
    const logOutput = [];

    try {
        let solution;
        const eps = parseFloat(document.getElementById('eps')?.value) || 0.0001;

        if (['gauss', 'kramer', 'matrix', 'gauss-jordan', 'jacobi', 'seidel', 'relax'].includes(method)) {
            const count = parseInt(document.getElementById('equations').value);
            const matrix = [];
            const freeTerms = [];
            for (let i = 0; i < count; i++) {
                matrix[i] = [];
                for (let j = 0; j < count; j++) {
                    const val = parseFloat(document.getElementById(`coeff-${i}-${j}`).value);
                    if (isNaN(val)) throw new Error("Заполните все поля матрицы");
                    matrix[i][j] = val;
                }
                const ft = parseFloat(document.getElementById(`free-${i}`).value);
                if (isNaN(ft)) throw new Error("Заполните все свободные члены");
                freeTerms[i] = ft;
            }
            switch (method) {
                case 'gauss': solution = gaussSolve(matrix, freeTerms, logOutput); break;
                case 'kramer': solution = solveKramer(matrix, freeTerms, logOutput); break;
                case 'matrix': solution = solveMatrix(matrix, freeTerms, logOutput); break;
                case 'gauss-jordan': solution = solveGaussJordan(matrix, freeTerms, logOutput); break;
                case 'jacobi': solution = solveJacobi(matrix, freeTerms, eps, logOutput); break;
                case 'seidel': solution = solveSeidel(matrix, freeTerms, eps, logOutput); break;
                case 'relax': solution = solveRelax(matrix, freeTerms, eps, logOutput); break;
            }
            displaySteps(logOutput, solution);
            displaySolution(solution);
        } else if (['RLTabular', 'IMHalfDivision', 'IMChord', 'IMGoldenRatio', 'IMRidder', 'IMNewton', 'IMModNewton', 'IMSecant', 'IMMuller', 'IMSimpleIteration'].includes(method)) {
            const a = parseFloat(document.getElementById('interval_a').value);
            const b = parseFloat(document.getElementById('interval_b').value);
            if (isNaN(a) || isNaN(b)) throw new Error("Заполните границы интервала");
            switch (method) {
                case 'RLTabular':
                    solution = tableLocalization(a, b, logOutput);
                    document.getElementById('steps-output').innerHTML = logOutput.join('<br>');
                    document.getElementById('solution-result').innerHTML = `<h3>Результат:</h3><p>Таблица локализации корней выведена выше</p>`;
                    break;
                case 'IMHalfDivision': solution = halfDivision(a, b, eps, logOutput)[1]; break;
                case 'IMChord': solution = chord(a, b, eps, logOutput)[1]; break;
                case 'IMGoldenRatio': solution = goldenRatio(a, b, eps, logOutput)[1]; break;
                case 'IMRidder': solution = ridder(a, b, eps, logOutput)[1]; break;
                case 'IMNewton': solution = newton(a, b, eps, logOutput)[1]; break;
                case 'IMModNewton': solution = modNewton(a, b, eps, logOutput)[1]; break;
                case 'IMSecant': solution = secant(a, b, eps, logOutput)[1]; break;
                case 'IMMuller': solution = muller(a, b, eps, logOutput)[1]; break;
                case 'IMSimpleIteration': solution = simpleIteration(a, b, eps, logOutput)[1]; break;
            }
            if (method !== 'RLTabular') {
                displaySteps(logOutput, [solution]);
                document.getElementById('solution-result').innerHTML = `<h3>Результат:</h3><p>Корень: x = ${solution.toFixed(4)}</p>`;
            }
        } else if (['GILagrange', 'ISSLinear'].includes(method)) {
            const count = parseInt(document.getElementById('points_count').value);
            const points = [];
            for (let i = 0; i < count; i++) {
                const x = parseFloat(document.getElementById(`point_x_${i}`).value);
                const y = parseFloat(document.getElementById(`point_y_${i}`).value);
                if (isNaN(x) || isNaN(y)) throw new Error("Заполните все координаты точек");
                points.push({ x, y });
            }
            const xVal = parseFloat(document.getElementById('interp_x').value);
            if (isNaN(xVal)) throw new Error("Укажите точку интерполяции");
            switch (method) {
                case 'GILagrange': solution = lagrangeInterpolation(points, xVal, logOutput); break;
                case 'ISSLinear': solution = linearInterpolation(points, xVal, logOutput); break;
            }
            document.getElementById('steps-output').innerHTML = logOutput.join('<br>');
            document.getElementById('solution-result').innerHTML = `<h3>Результат:</h3><p>y(${xVal.toFixed(4)}) = ${solution.toFixed(4)}</p>`;
        } else if (['AMLeastSquares'].includes(method)) {
            const count = parseInt(document.getElementById('points_count').value);
            const points = [];
            for (let i = 0; i < count; i++) {
                const x = parseFloat(document.getElementById(`point_x_${i}`).value);
                const y = parseFloat(document.getElementById(`point_y_${i}`).value);
                if (isNaN(x) || isNaN(y)) throw new Error("Заполните все координаты точек");
                points.push({ x, y });
            }
            solution = linearApproximation(points, logOutput);
            document.getElementById('steps-output').innerHTML = logOutput.join('<br>');
            document.getElementById('solution-result').innerHTML = `<h3>Результат:</h3><p>y = ${solution.k.toFixed(4)} * x + ${solution.b.toFixed(4)}</p>`;
        } else if (['NIRectangle'].includes(method)) {
            const a = parseFloat(document.getElementById('interval_a').value);
            const b = parseFloat(document.getElementById('interval_b').value);
            const n = parseInt(document.getElementById('n_intervals').value);
            if (isNaN(a) || isNaN(b) || isNaN(n)) throw new Error("Заполните границы и количество интервалов");
            solution = rectangleMethod(a, b, n, logOutput);
            document.getElementById('steps-output').innerHTML = logOutput.join('<br>');
            document.getElementById('solution-result').innerHTML = `<h3>Результат:</h3><p>Интеграл = ${solution.toFixed(4)}</p>`;
        } else {
            throw new Error("Метод не реализован");
        }
    } catch (e) {
        document.getElementById('solution-result').innerHTML = `<span style="color:red">Ошибка: ${e.message}</span>`;
        document.getElementById('steps-output').innerHTML = logOutput.join('<br>');
    }
}

function displaySteps(log, solution, containerId = 'steps-output') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '<h4>Шаги решения:</h4>';
    log.forEach(line => {
        container.innerHTML += line + '<br>';
    });
}

function displaySolution(solution) {
    let html = '<h3>Решение:</h3><ul>';
    solution.forEach((val, i) => {
        html += `<li>x<sub>${i+1}</sub> = ${val.toFixed(4)}</li>`;
    });
    html += '</ul>';
    document.getElementById('solution-result').innerHTML = html;
}