import React, { Component } from 'react';
import {connect} from 'react-redux';
import {applyPromo} from '../action';

class Promo_input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    submit = () => {
        if(this.state.value===this.props.promo_code){
            this.props.applyPromo();
        }
        this.setState({
            value:""
        })
    }
    render() {
        return (
            <div className = "promoInput">
                <p>Promo code</p>
                <input value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.submit}>Apply</button>
            </div>
        );
    }
}
function mapdispatchToProps(dispatch){
    return ({
        applyPromo:()=>dispatch(applyPromo())
    })
}

export default connect(null,mapdispatchToProps)(Promo_input);