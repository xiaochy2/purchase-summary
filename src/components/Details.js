import React from 'react';
import {connect} from 'react-redux';
import ItemInfo from './ItemInfo';
import Expander from './Expander';
import Line from './Line';
class Details extends React.Component {
    render() {
        const { subtotal, pickupSavings, taxesFees,isPromo} = this.props;
        console.log(isPromo);
        let displayTotal = subtotal+taxesFees- pickupSavings;
        if(isPromo){
            displayTotal = (displayTotal*0.9).toFixed(2);
        }
        console.log(displayTotal);
        
        return (
            <div class="details-container">
                <Line text="Est. total" amount={displayTotal} isBold={true} />
                <Expander name="item details">
                    <ItemInfo {...this.props}/>
                </Expander>
            </div>
        )
    }
}

const mapstateToProps = state =>{
    return {
        isPromo:state.isPromo
    }
}

export default connect(mapstateToProps)(Details);