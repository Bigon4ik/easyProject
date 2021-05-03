import {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}


export function UncontroledOnOff(props: PropsType) {


    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '5px',
        backgroundColor: on ? 'green' : 'red'


    }

    const onClicked = () => {
        {
            setOn(true)
            props.onChange(true)
        }
    }
    const offClicked = () => {
        {
            setOn(false)
            props.onChange(false)
        }
    }
    return (
        <div>
            <div style={onStyle}
                 onClick={onClicked}>on
            </div>
            <div style={offStyle}
                 onClick={offClicked}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )

}

