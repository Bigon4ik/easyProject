import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'UseEffect / UseEffect stories',

}


export const SimpleExample1 = () => {

    const [counter, setCounter] = useState(1)


    useEffect(() => {

        setInterval(() => {setCounter((state)=>state+1)
        }, 1000)

    }, [])

    return <>
        Hello,{counter}

    </>

}

