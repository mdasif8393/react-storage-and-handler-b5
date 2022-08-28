import React from 'react';
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name, price, _id} = props.cosmetic;
    
    return (
        <div>
            <h2>Buy this: {name}</h2>
            <p>Only for $: {price}</p>
            <small>it has id: {_id}</small> <br />
            <button onClick={()=>addToDb(_id)}>add to cart</button>
        </div>
    );
};

export default Cosmetic;