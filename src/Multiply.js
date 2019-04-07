import React, { Component } from 'react';
// import classes from '../src/Multiply.css';


class Multiply extends Component {
    state = {
        ratio: 2,
        result: 1,
    }

    multiplyHandler = () => {
        this.setState(prevState => (
            {
                result: prevState.ratio * prevState.result
            })
        )
    }

    componentDidUpdate() {
        if (this.state.result >= 1000 && this.state.ratio === 2) {
            this.setState({
                ratio: .5
            })
        } else if (this.state.result < 1 && this.state.ratio === .5) {
            this.setState({
                ratio: 2
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.multiplyHandler}>Multiply by {this.state.ratio}</button>
                <h1>Current result is: {this.state.result}</h1>
            </div>


        )
    }
}

export default Multiply;