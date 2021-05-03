import React from 'react';

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onChange: () =>void


}

export function Accordion(props: AccordionPropsType) {
    return(
        <div>
            <AccordionTitle title={props.titleValue}
            onChange={props.onChange}/>
            {!props.collapsed&&<AccordionBody/>}
        </div>
    )
};
type AccordionTitlePropsType = {
    title: string
    onChange: () =>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <div>
            <h3 onClick={(e)=>props.onChange()}>{props.title} </h3>
        </div>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <div>
            <ul>
                <li>12</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default Accordion;