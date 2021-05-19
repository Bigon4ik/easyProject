import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'UseEffect / UseEffect stories',

}


export const SimpleExample1 = () => {

    const [hours, setHours] = useState(0)
    const [min, setMin] = useState(0)
    const [second, setSecond] = useState(0)


    useEffect(() => {

        setInterval(() => {
            setHours((state) => state + 1)
        }, 6000000)
        setInterval(() => {
            setMin((state) => state + 1)
        }, 60000)
        setInterval(() => {
            setSecond((state) => state + 1)
        }, 1000)

    }, [])
    const clock = new Date()
    return <>
        {hours}:{min}:{second}
        <br/>
        {clock.getHours()}:{clock.getMinutes()}:{clock.getSeconds()}
    </>

}
export const ResetEffectExample1 = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log('dsfsd')

    }, [])
    let increase = () => {
        setCount(count + 1)
    }

    return <>
        Hello, counter: {count}
        <button onClick={increase}></button>
    </>

}
export const KeysTrackerExample = () => {

    const [text, setText] = useState('')


    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setText(text + e.key)
        };
        window.addEventListener('keypress', handler);
        return () => {
            window.removeEventListener('keypress', handler);
        }
    }, [text])

    return <>
        Typed text: {text}
    </>

}
export const SetTimeOutExample = () => {

    const [text, setText] = useState('')


    useEffect(() => {

        let timeOutId=setTimeout(()=>{
           setText('3 second')
        },3000)
        return () => {
            clearTimeout(timeOutId)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>

}

