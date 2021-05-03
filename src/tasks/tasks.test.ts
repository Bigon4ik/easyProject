import {calc, restParams, sum} from './task';

test('sum of two numbers', () => {
    //1.тестовые данные
    const a: number = 6
    const b: number = 8
    //2.выполнение тестируемого кода с тестовыми данными
    const result = sum(a,b)
    //3.Проверка ожидаемого результата
    expect(result).toBe(14)
})
test('sum of some numbers', () => {
    //1.тестовые данные
    const a: number = 6
    const b: number = 8
    const c: number = 10
    const d: number = 2

    //2.выполнение тестируемого кода с тестовыми данными
    const result1 = restParams(a,b,c)
    const result2 = restParams(c,d)
    const result3 = restParams(a,b,c,d)
    //3.Проверка ожидаемого результата
    expect(restParams(6,8,10)).toBe(24)
    expect(restParams(c,d)).toBe(12)
    expect(result3).toBe(26)
})
// beforeEach(()=>{
//      student={
//         name:'Alex',
//         isStudent: true,
//         friends: ["Bob",'Maik','Roma']
//     }
//
// })
//
// test('copy student', () => {
//    let copy = copyStudent(student)
//
//     expect(copy===student).toBe(false)
//     expect(copy.name===student.name).toBe(true)
//     expect(copy.isStudent===student.isStudent).toBe(true)
//     expect(copy.friends===student.friends).toBe(true)
//
// })
//
// test('deepcopy student', () => {
//     let deep = deepCopyStudent(student)
//
//     expect(deep===student).toBe({...student})
//     expect(deep==student.).toBe({...student, name: [...student.friends]})
//
// })

test('calc test',()=>{
    expect(calc(4,2,'sum')).toBe(6)
    expect(calc(4,2,'mult')).toBe(8)
    expect(calc(4,2,'div')).toBe(2)
    expect(calc(4,2,'sub')).toBe(2)
})