export function sum(a: number, b: number) {
    return a + b
}


export function restParams(...numbers: Array<number>) {
    return numbers.reduce((acc, el) => acc + el)
}

const addFriends = (students:Array<StudentType>) => students.map(st => ({...st, friends: students.map(s => s.name).filter(n => n !== st.name)}))
//tdd

// export const student = {
//     name: 'Alex',
//     isStudent: true,
//     friends: ['Bob', 'Maik', 'Roma']
// }
export type StudentType = {
    name: string
    isStudent: boolean
    friends: Array<string>
}
//
// export function copyStudent(st: StudentType) {
//     return {...st}
//
// }
//
// export function deepCopyStudent(st: StudentType) {
//     return {...st, friends: [...st.friends]}
//
// }

//'sum','mult','div','sub'
export function calc(a: number, b: number, action: string) {
    if (action === 'sum') {
        return a + b
    } else if (action === 'mult') {
        return a * b
    } else if (action === 'div') {
        return a / b
    } else if (action === 'mult') {
        return a * b
    }
    switch (action) {
        case 'sum':
            return a + b
        case 'mult':
            return a * b
        case 'div':
            return a / b
        case 'sub':
            return a - b
        default:
            return 'Unknown type action!'
    }

}

