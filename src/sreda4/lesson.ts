// 1. Функция принимает параметром целые положительные числа и возвращает их сумму.
export function sum(...numbers: Array<number>) {
    return numbers.reduce((acc, el) => acc + el)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && b + c > a && c + a > b) {
        if (a === b && b === c) {
            return '10'
        } else if (a === b || b === c || c === a) {
            return '01'
        }else {
            return '11'
        }
    } else {
        return '00'
    }
}

// export function getSum(num:number):number{
//     return num.toString().split('').reduce((acc,el)=>acc +Number(el),0)
// }
//export const  getSum = (num:number) => num.toString().split('').reduce((a, b) => a + +b,0)

export function getSum(a: number) {
    let temp = a.toString();
    let sum = 0;

    for(let i = 0; i < temp.length; i++) {
        const res = temp.charAt(i);
        sum += +res;
    }
    return sum
}
// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётным индексом (0 как чётный индекс) больше суммы чисел с нечётными индексами,
// то функция возвращает true. В противном случае - false.
export const isEvenIndexSumGreater = (arr: Array<number>) => {
    let even = 0
    let odd = 0
    arr.reduce((acc, el, index) => index % 2 === 0 ? even += el : odd += el)
    return even > odd
}
// numbers = numbers.map(function(x) {
//     n = 0;
//     while (n < numbers.length) {
//         if (n % 2 == 0) {
//             return x * 2;
//         }
//         else {
//             return x * 3;
//         }
//         n++;
//     }});
// return numbers;

// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае.

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]