import React, {useState} from 'react';
import UncontroledAccordion, {AccordionPropsType} from './UncontroledAccordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UncontroledAccordion / UncontroledAccordion stories',
    component: UncontroledAccordion,

}

const callback = action('accordion node change fired')

export const ModeChanging = () => {
    return <UncontroledAccordion titleValue={'push'}/>
}
