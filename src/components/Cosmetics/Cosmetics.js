import React, { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'
const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCosmetics(data))
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic._id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;