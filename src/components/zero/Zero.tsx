import React from 'react';
import zero from './../../assets/circle.svg';

const Zero = () => {
    return (
        <img style={{width: "calc(100% - 2px)", height: "calc(100% - 2px)"}} src={zero} alt=""/>
    );
};

export default Zero;