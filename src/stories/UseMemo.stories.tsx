import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo',

}


export const DifficultCounterExample = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    resultB = useMemo(() => {
        for (let i = 1; i <= b; i++) {
            resultB = resultB * i
        }
        return resultB
    }, [b])


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>result for a:{resultA}</div>
        <div>result for b:{resultB}</div>
    </>

}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)


export const HelpsReactMemo = () => {
    const addUser=()=>{
        const newUsers=[...users,'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dima', 'valera', 'artem'])
    let newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add</button>
        {counter}
        <Users users={newArray}/>
    </>

}
