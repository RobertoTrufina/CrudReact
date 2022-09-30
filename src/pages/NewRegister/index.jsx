import React, { useState } from "react";
import RegisterData from "../RegisterData";

import ButtonBack from './../../components/ButtonBack/index';
import './styles.css';

export default function NewRegister() {

    const [investName, setInvestName] = useState('')
    const [investActivo, setInvestActivo] = useState('')
    const [investQnt, setInvestQnt] = useState('')
    const [investValue, setInvestValue] = useState('')

    const [invests, setInvests] = useState([])


    function HandleAddInvest() {
        const newInvest = {
            name: investName,
            activo: investActivo,
            qnt: investQnt,
            value: investValue
        }
        setInvests(prevState => [...prevState, newInvest])
    }


    return (
        <>
            <header className="header" >
                <img src="https://png.pngtree.com/thumb_back/fw800/background/20191120/pngtree-financial-fashion-simple-stock-market-webpage-advertising-banner-background-image_322675.jpg" alt="candels" />
            </header>
            <div className="container-invest">
                <div className="content-register">
                    <section>
                        <div>
                            <ButtonBack />
                            <h2>Cadastro de Investidores</h2>
                            <section className="add-invest">
                                <form>
                                    <label>
                                        <p>Nome</p>
                                        <input
                                            type="text"
                                            maxLength={40}
                                            onChange={e => setInvestName(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        <p>Ativo</p>
                                        <input
                                            type="text"
                                            maxLength={10}
                                            onChange={e => setInvestActivo(e.target.value)}
                                        />
                                    </label>
                                    <div className="add-qnt-value">
                                        <label>
                                            <p>Qnt</p>
                                            <input
                                                type="number"
                                                onChange={e => setInvestQnt(e.target.value)}
                                            />
                                        </label>
                                        <label>
                                            <p>Valor</p>
                                            <input
                                                type="number"
                                                placeholder="R$"
                                                onChange={e => setInvestValue(e.target.value)}
                                            />
                                        </label>

                                    </div>

                                    <div>
                                        <button onClick={HandleAddInvest}>
                                            Enviar
                                        </button>

                                    </div>
                                </form>
                            </section>
                        </div>
                    </section>
                </div>

                <div >
                    <section>
                        <div className="box-content-invest">
                            <div className="content-invest">
                                <h2>Lista de Investidores</h2>
                                <div className="list-invest">
                                    <div className="name">
                                        Nome
                                    </div>
                                    <div className="activo">
                                        Ativo
                                    </div>
                                    <div className="qnt">
                                        Qnt
                                    </div>
                                    <div className="value">
                                        Valor
                                    </div>
                                </div>

                                {invests.map(invest => (
                                    <RegisterData
                                        key={invest.value}
                                        name={invest.name}
                                        activo={invest.activo}
                                        qnt={invest.qnt}
                                        value={invest.value} />
                                ))
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
