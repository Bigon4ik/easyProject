import React, {useState} from 'react';
import './App.css';
import {Accordion} from './component/Accordion/Accordion';
import {Rating, RatingValueType} from './component/Rating/Rating';
import OnOff from './component/OnOff/OnOff';
import UncontroledAccordion from './component/UncontroledAccordion/UncontroledAccordion';
import {UncontrolledRating} from './component/UncontrolledRating/UncontrolledRating';
import {UncontroledOnOff} from './component/UncontroledOnOff/UncontroledOnOff';


function App() {
    console.log('App rendering');

    let[ratingValue,setRatingValue]=useState<RatingValueType>(0)
    let[accordeonCollapsed,setAccordeonCollapsed]=useState<boolean>(true)
    let[swithOn,setSwitchOn]=useState<boolean>(true)
    return (
        <div className={'App'}>
            <UncontroledOnOff onChange={setSwitchOn}/>

            <PageTitle title={'Title rendering'}/>
            <Accordion titleValue={'yraa'}
                       collapsed={accordeonCollapsed}
                       onChange={()=>{setAccordeonCollapsed(!accordeonCollapsed)}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontroledAccordion titleValue={'new'}/>
            <UncontrolledRating/>
            <OnOff on={swithOn} onChange={setSwitchOn}/>


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('Title rendering');
    return <h1>{props.title} </h1>

}


export default App;