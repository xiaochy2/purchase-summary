import React from 'react';
import Expander from './Expander';
import PromoInput from './PromoInput';

class Promo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasProme: false,
            promo_expander: false
        }
    }
    render() {
        const { promo_code } = this.props;
        return (<div className="promp-container">
            <Expander name="promo code">
                <PromoInput promo_code={promo_code} />
            </Expander>
        </div>
        )
    }
}
export default Promo;