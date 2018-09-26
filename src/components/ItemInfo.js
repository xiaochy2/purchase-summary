import React from 'react';

const ItemInfo = ({item_Name,priceDetails,subtotal,img_url,qty}) => (
    <figure>
        <img src={img_url} alt={item_Name} />
        <figcaption>
            <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red</p>
            <p><strong>${priceDetails}</strong> <span>Qty: {qty}</span></p>
            <strong>${subtotal}</strong>
        </figcaption>
    </figure>

);


export default ItemInfo;