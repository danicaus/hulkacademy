import React from 'react';
import './products.css';
import hulkArmor from '../assets/hulk-armor.png'
import hulkTaco from '../assets/hulk-taco.png'
import shehulkLawyer from '../assets/shehulk-lawyer.png'
import hulkTraditional from '../assets/hulkTraditional.png'

function Products() {
    return (
        <section className="products">
            <ul>
                <li>
                    <img src={shehulkLawyer} id="shehulkLawyer" alt="Funko Shehulk advogada"/>
                </li> 
                <li>
                    <img src={hulkArmor} id="hulkArmor" alt="Funko Hulk com armadura"/>
                </li>
                <li>
                    <img src={hulkTaco} id="hulkTaco" alt="Funko Hulk Avengers com Taco"/>
                </li>   
                <li>
                    <img src={hulkTraditional} id="hulkTraditional" alt="Funko Hulk tradicional"/>
                </li>           
            </ul>

        </section>
    )
};

export default Products;