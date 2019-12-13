import React from 'react';
import cross from './../../assets/cross.svg';

const Cross = () => {
    return (
        <img style={{width: "calc(100% - 2px)", height: "calc(100% - 2px)"}} src={cross} alt=""/>
    );
};

export default Cross;