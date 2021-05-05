import React, {useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Select / Select stories',
    component: Select,

}

export const WithValue = () =>{
    const [value,setValue]=useState('2')
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'moscow'},
                    {value: '2', title: 'minsk'},
                    {value: '3', title: 'kiev'},
                ]}/>
    </>
}
export const WithOutValue = () =>{
    const [value,setValue]=useState(null)


   return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'moscow'},
                    {value: '2', title: 'minsk'},
                    {value: '3', title: 'kiev'},
                ]}/>
    </>
}

