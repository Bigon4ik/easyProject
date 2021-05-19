import React, {useEffect, useState} from 'react';


type PropsType = {
    mode?: 'digital' | 'analog'
}

const getDigital = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)


        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }
    return <div>
        {view}

    </div>
}

type ClockViewPropsType={
    date:Date
}
export const DigitalClockView:React.FC<ClockViewPropsType>=({date})=>{
    return<>
        <span>{getDigital(date.getSeconds())}</span>
        :
        <span>{getDigital(date.getMinutes())}</span>
        :
        <span>{getDigital(date.getSeconds())}</span>
    </>

}
export const AnalogClockView:React.FC<ClockViewPropsType>=({date})=>{
    return <span>Analog</span>
}