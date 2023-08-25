import React from "react";
import styles from "./styles.css"
import Dates from "../dates";
function Grid(){
    const aguila={
        "nombre":"Farmacia del Aguila",
        "map": "cbD6DT4aKwRUr5vy8",
        "telefono": "4660-0303",
        "localidad":"Los Polvorines",
        "direccion":"San Martin 2580"}

        const dietrich={
            "nombre":"Farmacia dietrich",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "02320-423259",
            "localidad":"Los Polvorines",
            "direccion":"Ruta 8 y 197"}
    
    const alvarezvdm={
            "nombre":"Farmacia Alvarez V. de Mayo",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4660-0418",
            "localidad":"Villa de mayo",
            "direccion":"Sucre 2359"}
    
    const rivadavia={
            "nombre":"Farmacia Rivadavia",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4663-8292",
            "localidad":"Los Polvorines",
            "direccion":"Rivadavia 2681"}
    
    const rujana={
            "nombre":"Farmacia Rujana",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4663-7405",
            "localidad":"Villa de mayo",
            "direccion":"Arquimedes y lujan"}
    
    const ocampo={
            "nombre":"Farmacia Ocampo",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4660-4575",
            "localidad":"Los Polvorines",
            "direccion":"Pte. Peron 3387"}
    
    const jr={
            "nombre":"Farmacia J.R.",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4451-6500",
            "localidad":"Los Polvorines",
            "direccion":"Arturo Illia 5254"}
    
    const emericScs={
            "nombre":"Farmacia Emeric",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4663-6212",
            "localidad":"Los Polvorines",
            "direccion":"Baroni 1859"}
    
    const conti={
            "nombre":"Farmacia Conti",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4463-7479",
            "localidad":"Villa de Mayo",
            "direccion":"Sucre 1635"}
    
    const delCirculo={
            "nombre":"Farmacia del Circulo",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4660-5111",
            "localidad":"Los Polvorines",
            "direccion":"Pte.Peron y Wilson"}
    
    const buffarini={
            "nombre":"Farmacia Buffarini",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4663-7749",
            "localidad":"Los Polvorines",
            "direccion":"Pte. Peron 3030"}
    
    const gintyla={
            "nombre":"Farmacia Gintyla",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4660-0002",
            "localidad":"Villa de Mayo",
            "direccion":"San Martin y Amenabar"}
    
    const jativaO={
            "nombre":"Farmacia Jativa O",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4663-0789",
            "localidad":"Los Polvorines",
            "direccion":"Rivadavia 2017"}
    
    const alvarez={
            "nombre":"Farmacia Alvarez",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4748-0415",
            "localidad":"A. Sourdeaux",
            "direccion":"Rosario 4605"}
    
    const jativaMe={
            "nombre":"Farmacia Jativa ME",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4663-6764",
            "localidad":"Villa de Mayo",
            "direccion":"Av. Eva Peron 5068"}
    
    const saos={
            "nombre":"Farmacia Saos",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "5292-3851",
            "localidad":"Los Polvorines",
            "direccion":"L.Suarez 2939"}
    
    const borrino={
            "nombre":"Farmacia Borrino",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4660-4301",
            "localidad":"Los Polvorines",
            "direccion":"Ing. Huergo 3595"}
    
    const delSol={
            "nombre":"Farmacia del Sol",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4748-0679",
            "localidad":"A. Sourdeaux",
            "direccion":"Derqui y Peña"}
    
    const eberbach={
            "nombre":"Farmacia Eberbach",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "4463-8179",
            "localidad":"Villa de Mayo",
            "direccion":"Av.Peron 897"}
    
    const phanamerican={
            "nombre":"Farmacia Phanamerican",
            "map": "cbD6DT4aKwRUr5vy8",
            "telefono": "54363927",
            "localidad":"Los Polvorines",
            "direccion":"Ruta 197 2044"}

    return(
        <div className="container-flex">
            <div className="container-grid">
                <Dates num="" ></Dates>
                <Dates num="" title="hola 2"></Dates>
                <Dates num="01" farmacia1Name={aguila.nombre} farmacia1Map={aguila.map} farmacia1Tel={aguila.telefono} farmacia1Loc={aguila.localidad} farmacia1Dir={aguila.direccion} farmacia2Name={delCirculo.nombre} farmacia2Map={delCirculo.map} farmacia2Tel={delCirculo.telefono} farmacia2Loc={delCirculo.localidad} farmacia2Dir={delCirculo.direccion}></Dates>
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