import React, {useState} from 'react';
import Accordion, {AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion / Accordion stories',
    component: Accordion,

}

const callback = action('accordion node change fired')

export const MenuCollapsedMode = () => <Accordion collapsed={true} titleValue={'Menu'} onChange={callback}/>
export const UsersUnCollapsedMode = () => <Accordion collapsed={false} titleValue={'Users'} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setvalue] = useState<boolean>(true)
    return <Accordion titleValue={'mode'} collapsed={value} onChange={() => {
        setvalue(!value)
    }}/>
}
