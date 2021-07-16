import React, { useState } from 'react';
import './form.css';

function Form() {

    const [email, setEmail] = useState('')
    
    function handleEmail(e) {
        e.preventDefault()
        localStorage.setItem("Email", JSON.stringify(email))
    }
    
    return (
        <section className="signup">
            <div>
                <p>Cadastre seu e-mail para receber ofertas exclusivas</p>
                <form>
                    <input type="email" placeholder="email@exemplo.com"
                    onChange={ e => setEmail(e.target.value)}/>
                    <button type="submit" onClick={handleEmail}>Cadastrar</button>
                </form>
            </div>
        </section>
    )
};

export default Form;