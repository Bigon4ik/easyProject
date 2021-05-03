import {useState} from 'react';

export type PropsType = {
     on: boolean
    onChange:(on:boolean)=>void
    // off: boolean
}


function OnOff(props: PropsType) {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'red'


    }
    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>on
            </div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )

}


export default OnOff;