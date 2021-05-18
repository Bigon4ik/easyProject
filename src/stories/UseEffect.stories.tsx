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
            setSecond((state) => state +1)
        }, 1000)

    }, [])
    const clock = new Date()
    return <>
        {hours}:{min}:{second}
        <br/>
        {clock.getHours()}:{clock.getMinutes()}:{clock.getSeconds()}
    </>

}

