import React, {useState} from 'react';

export type AccordionPropsType = {
    titleValue: string,
    collapsed?: boolean,
}

export function UncontroledAccordion(props: AccordionPropsType) {
    //const collapsed=true;
    let [collapsed, setcollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                setcollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

};
type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <div>
            <h3 onClick={() => {props.onClick()}}>{props.title} </h3>
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


export default UncontroledAccordion;