import {getSum, getTriangleType, isEvenIndexSumGreater, sum} from './lesson';


test('sum of some numbers', () => {
    //1.тестовые данные
    const a: number = 6
    const b: number = 8
    const c: number = 10
    const d: number = 2

    //2.выполнение тестируемого кода с тестовыми данными
    const result1 = sum(a,b,c)
    const result2 = sum(c,d)
    const result3 = sum(a,b,c,d)
    //3.Проверка ожидаемого результата
    expect(sum(1,2,3)).toBe(6)
    expect(sum(c,d)).toBe(12)
    expect(result3).toBe(26)
})
test("get Triangle Type", ()=> {
    expect(getTriangleType(1, 1, 1)).toBe("10")
    expect(getTriangleType(3, 3, 2)).toBe("01")
    expect(getTriangleType(5, 4, 3)).toBe("11")
    expect(getTriangleType(10, 5, 5)).toBe("00")
})

test("get Sum ", ()=> {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})
test("is Even Sum Greater", ()=> {
    expect(isEvenIndexSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenIndexSumGreater([100, 1, 200, 2])).toBe(true)
})

test("is Square Greater Than Circle", ()=> {
    const sCr = 3.14
    const sSq = 4
    const result = isSquareGreater(sCr, sSq)
    expect(result).toBe(true)
})

test("get banknote list", ()=> {
    const result1500 = getBanknoteList(1500)
    const result23 = getBanknoteList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)

})