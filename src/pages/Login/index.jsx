import React from "react";
import { Link } from 'react-router-dom';

import './styles.css';

export default function Login() {
    return (
            <div id="container">
                <form>
                    <label>
                        <form className="login-title">
                            <h1>Login</h1>
                        </form>
                    </label>
                    <label className="box-user">
                        <form>Usuário</form>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            required
                        />
                        <form>Senha</form>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            required
                        />
                    </label>
                    <button className="login-btn-enter">Entrar</button>
                    <div className="login-link">
                        <Link to="/nova-senha">
                            <p>Esqueceu sua senha?</p>
                        </Link>
                        <Link to="/cadastro-de-investidor">
                            <p>Crud</p>
                        </Link>
                    </div>

                </form>
            </div>




    )
}