import React from "react";

const chickenStyle = {
    div: {
        background: `#eeeeee`,
        width: 200,
        height: 168,
        backgroundImage: `url('./chicken.jpeg')`
    },
    goLeft: {
        float: `left`
    },
    goRight: {
        float: `right`
    },
}


const Chicken = props => (
    <div style={props.didCrossRoad ? chickenStyle.goLeft : chickenStyle.goRight}>
        <div style={chickenStyle.div}>

        </div>
    </div>
);

export default Chicken;
