import React from "react";
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';

export default function ButtonBack() {
    return (
        <main>
            <div>
                <Link to="/">
                    <img src={backIcon} alt="voltar" />
                </Link>
            </div>
        </main>
    )

}