import React from "react";
import { Link } from 'react-router-dom';

import './styles.css'

import backIcon from '../../assets/images/icons/back.svg';

export default function NewPassword() {
    return (
        <main id="content">
            <div>
                <Link to="/">
                    <img src={backIcon} alt="voltar" />
                </Link>
                <form className="new-password">
                    <h1>Não conseguiu entrar?</h1>
                    <p>Não tem problema! Só precisamos do email que você usou ao criar seu cadastro.</p>
                    <div>
                        <p><strong>E-mail de cadastro</strong></p>
                        <input type="text" name="email" placeholder="insira seu e-mail" />
                        <button>Enviar link de recuperação</button>
                    </div>
                </form>

            </div>
        </main>
    )

}