import React from "react";
import Chicken from "./Chicken";


export default class RoadContainer extends React.Component {
    state = {
        didCrossRoad: false
    };

    doCrossRoad = () => {
        var position = this.state.didCrossRoad;

        this.setState({
            didCrossRoad: !position
        });
    };

    render() {
        return (
            <div className="container">
                <Chicken didCrossRoad={this.state.didCrossRoad} />
                <button className="btn btn-primary" onClick={this.doCrossRoad}>
                    Cross Road!
                </button>
            </div>
        );
    }

}
