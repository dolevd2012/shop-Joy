import React, { Component } from 'react';


class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timePassed: false
        };
    }

    render() {
        setTimeout(() => { this.setState({ timePassed: true }) }, 1700);
        if (!this.state.timePassed) {
            return (
                <div style={{ textAlign: "center", marginTop: "15%", fontSize: "5.5rem" }}>
                    <p>M E A N I N G <br />O F<br /> C O D E</p>
                </div>
            );
        } else {

            return (
                <div></div>
            );
        }
    }
}
export default Check;