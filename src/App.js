import React from 'react';
import Price from './components/Price';
import Details from './components/Details';
import Promo from './components/Promo';

const data = {
  qty: 1,
  subtotal: 102.96,
  pickupSavings: 3.85,
  taxesFees: 8.92,
  priceDetails: 99.11,
  itemName:"chair",
  promo_code:'DISCOUNT',
  img_url:'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF' 
};

const App = () => (
  <div class="container">
    <Price {...data}/>
    <Details {...data}/>
    <Promo {...data}/>
  </div>
)

export default App;
