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
                <div class="row">
                    <div class="col-md-12">
                        <p class="text-center">
                            <button className="btn btn-info" onClick={this.doCrossRoad}>Cross Road!</button>
                        </p>
                    </div>
                </div>
                <Chicken didCrossRoad={this.state.didCrossRoad} />
            </div>
        );
    }

}
