import React from "react";
import styles from "./styles.css"
import Dates from "../dates";
import { Link } from "react-router-dom";
import Info from "../info";
function Grid(){
    const farmaciaAguila="cbD6DT4aKwRUr5vy8";
    return(
        <div className="container-flex">
            <div className="container-grid">
                <Dates num="" ></Dates>
                <Dates num="" title="hola 2"></Dates>
                <Dates num="01" farmacia={farmaciaAguila}></Dates>
                <Dates num="02"></Dates>
                <Dates num="03"></Dates>
                <Dates num="04"></Dates>
                <Dates num="05"></Dates>

                <Dates num="06"></Dates>
                <Dates num="07"></Dates>
                <Dates num="08"></Dates>
                <Dates num="09"></Dates>
                <Dates num="10"></Dates>
                <Dates num="11"></Dates>
                <Dates num="12"></Dates>

                <Dates num="13"></Dates>
                <Dates num="14"></Dates>
                <Dates num="15"></Dates>
                <Dates num="16"></Dates>
                <Dates num="17"></Dates>
                <Dates num="18"></Dates>
                <Dates num="19"></Dates>

                <Dates num="20"></Dates>
                <Dates num="21"></Dates>
                <Dates num="22"></Dates>
                <Dates num="23"></Dates>
                <Dates num="24"></Dates>
                <Dates num="25"></Dates>
                <Dates num="26"></Dates>

                <Dates num="27"></Dates>
                <Dates num="28"></Dates>
                <Dates num="29"></Dates>
                <Dates num="30"></Dates>
                <Dates num="31"></Dates>
                <Dates num=""></Dates>
                <Dates num=""></Dates>
            </div>
        </div>
    );
}
export default Grid;