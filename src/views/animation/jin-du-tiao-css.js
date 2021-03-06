import React, { Component } from 'react';
 
export default class Progress extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            percent: 10
        };
    }
 
    increase = () => {
        const percent = this.state.percent + 10;
        this.setState({
            percent: percent > 100 ? 100: percent
        })
    }
 
    decrease = () => {
        const percent = this.state.percent - 10;
        this.setState({
            percent: percent < 0 ? 0: percent
        })
    }
 
    render() {
        const { percent } = this.state;
 
        return (
            <div>
                <div className="progress">
                    <div className="progress-wrapper" >
                        <div className="progress-inner" style = {{transition: 'all 400ms cubic-bezier(0.08, 0.82, 0.17, 1)',width: `${percent}%`,backgroundColor: 'blue'}} >&nbsp;</div>
                    </div>
                    <div className="progress-info" >{percent}%</div>
                </div>
                <div className="btns">
                    <button onClick={this.decrease}>-</button>
                    <button onClick={this.increase}>+</button>
                </div>
            </div>
        );
    }
}
