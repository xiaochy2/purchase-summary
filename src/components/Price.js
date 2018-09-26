import React from 'react';
import Line from './Line'

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasPromo: false
        }
    }
    render() {
        const { subtotal, pickupSavings, taxesFees} = this.props;
        return (
            <div class="price-container">
                <Line text="Subtotal" amount={subtotal} />
                <Line text="Pickup savings" amount={pickupSavings} isSaving={true} />
                <Line text="Est. taxes & fees (Based on 94085)" amount={taxesFees} />
            </div>
        )
    }
}
export default Price;