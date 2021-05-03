import React, {useState} from 'react';
import {UncontroledOnOff} from './UncontroledOnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UncontroledOnOff / UncontroledOnOff stories',
    component: UncontroledOnOff,

}

const callback = action('on or off cliced')

export const OnMode = () => <UncontroledOnOff  defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontroledOnOff onChange={callback}/>

