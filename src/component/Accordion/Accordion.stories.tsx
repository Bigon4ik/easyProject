import React, {useState} from 'react';
import Accordion, {AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion / Accordion stories',
    component: Accordion,

}

const callback = action('accordion node change fired')
const onClickCallback = action('some item clicked')

export const MenuCollapsedMode = () => <Accordion collapsed={true} titleValue={'Menu'} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UsersUnCollapsedMode = () => <Accordion collapsed={false} titleValue={'Users'} onChange={callback} items={[{title: 'vika',value:1},{title: 'vova',value:2},{title: 'dima',value:3}]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setvalue] = useState<boolean>(true)
    return <Accordion titleValue={'mode'} collapsed={value} onChange={() => {
        setvalue(!value)
    }} items={[{title: 'vika',value:1},{title: 'vova',value:2},{title: 'dima',value:3}]} onClick={onClickCallback}/>
}
