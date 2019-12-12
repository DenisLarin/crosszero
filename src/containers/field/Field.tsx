import React, {Component, PointerEvent} from 'react';
import FieldItem from "../../components/fieldItem/FieldItem";

interface IState {
    scrollX: number,
    scrollY: number,
    leftTopElementIndex: number[],
}

const COUNTROWELEMENTS = Math.floor(window.innerWidth / 20) + 50;
const COUNTCOLUMNELEMENTS = Math.floor(window.innerHeight / 20) + 50;

class Field extends Component<{}, IState> {
    private divRef: any = React.createRef();
    state = {
        scrollX: 0,
        scrollY: 0,
        leftTopElementIndex: [0,0],
    };
    scroll = (event: any) => {
        const y = event.target.scrollTop;
        const x = event.target.scrollLeft;

        const scrollRowItems = Math.round((x - this.state.scrollX) / 20);
        const scrollColumnItems = Math.round((y - this.state.scrollY) / 20);

        console.log(scrollRowItems);
        console.log(scrollColumnItems);


        if (scrollRowItems >= 50 || scrollColumnItems >= 50){
            console.log("need update");
            this.setState(state=>{
               return{
                   scrollY: y,
                   scrollX: x,
                   leftTopElementIndex: [state.leftTopElementIndex[0]+scrollRowItems,state.leftTopElementIndex[1]+scrollColumnItems]
               }
            }, ()=>{
                this.divRef.current.scrollLeft = 0;
                this.divRef.current.scrollTop = 0;
                this.state.scrollX = 0;
                this.state.scrollY = 0;
            });
        }

        // this.setState(state=>{
        //    return{
        //        scrollY: y,
        //        scrollX: x,
        //        leftTopElementIndex: [0,0]
        //    }
        // });
    };


    render() {
        const net = [];

        for (let i = this.state.leftTopElementIndex[1]; i < this.state.leftTopElementIndex[1] + COUNTCOLUMNELEMENTS; i++) {
            let tempRow = [];
            for (let j = this.state.leftTopElementIndex[0]; j < this.state.leftTopElementIndex[0] + COUNTROWELEMENTS; j++) {
                console.log(123);
                tempRow.push(<FieldItem x={j} y={i}/>);
            }
            net.push(<div style={{height: "20px", width: `${COUNTROWELEMENTS*20}px`}}>{tempRow}</div>)
            tempRow = [];
        }


        return (
            <div style={{
                border: "1px solid red",
                overflow: "scroll",
                width: "100vw",
                height: "calc(100vh - 30px)"
            }} onScroll={this.scroll} ref={this.divRef}>
                <div style={{
                    display: 'flex',
                    flexDirection: "column"
                }}>
                    {net}
                </div>

            </div>
        );
    }
}

export default Field;