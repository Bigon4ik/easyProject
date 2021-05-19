import React, {useEffect, useState} from 'react';
import styles from './clock.module.css'


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

type ClockViewPropsType = {
    date: Date
}
export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{getDigital(date.getSeconds())}</span>
        :
        <span>{getDigital(date.getMinutes())}</span>
        :
        <span>{getDigital(date.getSeconds())}</span>
    </>

}


export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return (
        <div className={styles.clock}>
            <div className={styles["analog-clock"]}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle}/>
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle}/>
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle}/>
            </div>

        </div>
    )
}