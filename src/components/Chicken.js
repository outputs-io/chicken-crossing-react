import React from "react";

const chickenStyle = {
    div: {
        width: 64,
        height: 49,
        background: `url('./chicken.png') no-repeat`,
        backgroundSize: `contain`,
        position: `relative`,
        top: 0
    },
    goLeft: {
        position: `absolute`,
        bottom: 0,
        left: 50,
        transition: `transform 500ms ease-out`
    },
    goRight: {
        position: `absolute`,
        bottom: 0,
        right: 50,
        transition: `transform 500ms ease-out`
    },
}


const Chicken = props => (
    <div className="row">
        <div className="col-md-12" style={{ minHeight: 240 }}>
            <div style={props.didCrossRoad ? chickenStyle.goLeft : chickenStyle.goRight}>
                <div style={chickenStyle.div}></div>
            </div>
        </div>
    </div >
);

export default Chicken;
