import React, {useEffect, useMemo, useState} from 'react';
import {Clock} from './Clock';

export default {
    title: 'Clock / Clock stories',
    component:Clock

}


export const BaseAnalogExample = () => {
    return <Clock mode={'analog'}/>
}
export const BaseDigitalExample = () => {
    return <Clock mode={'digital'}/>
}

