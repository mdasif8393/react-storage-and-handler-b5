import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'
const Cosmetics = () => {
    const cosmetics = [
        {id:1, name:'Alta', price:100},
        {id:2, name:'Palish', price:200},
        {id:3, name:'Malish', price:300},
        {id:4, name:'Balish', price:400},
        {id:5, name:'Nalish', price:500},
    ]
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;