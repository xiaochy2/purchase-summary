import React from 'react';

class Expander extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    click = () => {
        this.setState({
            show: !this.state.show,
        })
    }
    render() {
        const { name } = this.props;
        const { show } = this.state;
        let verb = "";
        switch (name) {
            case 'item details': verb = 'See'; break;
            case 'promo code': verb = 'Apply'; break;
            default: break;
        }
        return (
            <div className = "expander">
                <p onClick={this.click}>{(show ? "Hide " : verb) + " " + name}{show ? "-" : "+"}</p>
                {show ? this.props.children : ""}
            </div>
        )
    }
}



export default Expander;