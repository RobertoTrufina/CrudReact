import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import './styles.css';

export default function RegisterData({ name, activo, qnt, value }) {
    


    return (
        <>
            <div className="container-global-list">
                <div className="box-list-name">
                    <p >{name}</p>
                </div>
                <div className="box-list-activo">
                    <p>{activo}</p>
                </div>
                <div className="box-list-qnt">
                    <p>{qnt}</p>
                </div>
                <div className="box-list-value">
                    <p>R$ {value} </p>
                </div>
                <div className="box-list-edit">
                    <p><FiEdit size={20} /></p>
                </div>
                <div className="box-list-delete">
                    <p><RiDeleteBin6Line size={20}/></p>
                </div>

            </div>
        </>
    )
}