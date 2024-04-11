import React, { useState } from 'react';

function Listing(props) {
    const { items } = props;
    return (
        <div className="item-list">
            {items.map(o => !o.error_messages && <div className="item" key={o.listing_id}>
                <div className="item-image">
                    <a href={o.url}>
                        <img src={o.MainImage.url_570xN}></img>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{o.title.length > 50 ? o.title.substring(0, 49) + '...' : o.title}</p>
                    <p className="item-price">{(o.currency_code === 'USD' || o.currency_code === 'EUR') ? o.currency_code + o.price : o.price + o.currency_code}</p>
                    <p className={(o.quantity < 11)
                        ? 'item-quantity level-low'
                        : (o.quantity < 21)
                            ? 'item-quantity level-medium'
                            : ('item-quantity level-high')}>{o.quantity}left</p>
                </div>
            </div>)
            }
        </div >
    );
}

Listing.defaultProps = {
    items: []
};


export default Listing;