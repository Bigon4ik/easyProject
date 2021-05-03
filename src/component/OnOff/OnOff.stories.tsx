import React, {useState} from 'react';
import OnOff, {PropsType} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff / OnOff stories',
    component: OnOff,

}

const callback = action('on or off cliced')

export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>

export const ModeChanging = () => {
    const [mode, setMode] = useState<boolean>(true)
    return <OnOff on={mode} onChange={setMode}/>
}
