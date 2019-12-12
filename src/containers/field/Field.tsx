import React, {Component} from 'react';
import FieldItem from "../../components/fieldItem/FieldItem";

class Field extends Component {
    render() {
        console.log(Number.MAX_SAFE_INTEGER);
        const net = [];
        for (let i = 0; i < Math.floor(window.innerWidth/20); i++) {
            let temp = [];
            for (let j = 0; j < Math.floor(window.innerHeight/20); j++) {
                temp.push(<FieldItem key={Math.random()}/>)
            }
            net.push(<div key={Math.random()}>{temp}</div>);
        }
        return (
            <div style={{
                border: "1px solid red",
                width: '100vw',
                height: '100vh',
                display: 'flex',
            }}>
                {net}
            </div>
        );
    }
}

export default Field;