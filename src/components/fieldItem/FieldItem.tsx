import React from 'react';

interface IProps {
    x: number;
    y: number
}

const FieldItem = (props: IProps) => {
    const click = () => {
        console.log(props);
    }
    return (
        <span onClick={click} style={{
            cursor: "pointer",
            width: "20px",
            height: "20px",
            border: "1px solid black",
            padding: "2px",
            display: "inline-block"
        }}/>
    );
};

export default FieldItem;