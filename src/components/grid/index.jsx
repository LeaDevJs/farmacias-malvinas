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
                "map": "6FjPbT8ad6MzLEin7",
                "telefono": "02320-423259",
                "localidad":"Los Polvorines",
                "direccion":"Ruta 8 y 197"}
        
        const alvarezvdm={
                "nombre":"Farmacia Alvarez V. de Mayo",
                "map": "QTNBi1y4JJiFBB8R8",
                "telefono": "4660-0418",
                "localidad":"Villa de mayo",
                "direccion":"Sucre 2359"}
        
        const rivadavia={
                "nombre":"Farmacia Rivadavia",
                "map": "rPTmmicdeogg98yQ7",
                "telefono": "4663-8292",
                "localidad":"Los Polvorines",
                "direccion":"Rivadavia 2681"}
        
        const rujana={
                "nombre":"Farmacia Rujana",
                "map": "wqwbv5FNmTbvWAnaA",
                "telefono": "4663-7405",
                "localidad":"Villa de mayo",
                "direccion":"Arquimedes y lujan"}
        
        const ocampo={
                "nombre":"Farmacia Ocampo",
                "map": "f61ZV2VrEcroNSiv6",
                "telefono": "4660-4575",
                "localidad":"Los Polvorines",
                "direccion":"Pte. Peron 3387"}
        
        const jr={
                "nombre":"Farmacia J.R.",
                "map": "cj8WkoCp4iVuQQGt5",
                "telefono": "4451-6500",
                "localidad":"Los Polvorines",
                "direccion":"Arturo Illia 5254"}
        
        const emericScs={
                "nombre":"Farmacia Emeric",
                "map": "F9n6XZ5EPtprr1VQ6",
                "telefono": "4663-6212",
                "localidad":"Los Polvorines",
                "direccion":"Baroni 1859"}
        
        const conti={
                "nombre":"Farmacia Conti",
                "map": "d7bFqTcpziDXr88W7",
                "telefono": "4463-7479",
                "localidad":"Villa de Mayo",
                "direccion":"Sucre 1635"}
        
        const delCirculo={
                "nombre":"Farmacia del Circulo",
                "map": "nAVsQF6o482Uqpaq5",
                "telefono": "4660-5111",
                "localidad":"Los Polvorines",
                "direccion":"Pte.Peron y Wilson"}
        
        const buffarini={
                "nombre":"Farmacia Buffarini",
                "map": "nMfdj4UCucarzN3p7",
                "telefono": "4663-7749",
                "localidad":"Los Polvorines",
                "direccion":"Pte. Peron 3030"}
        
        const gintyla={
                "nombre":"Farmacia Gintyla",
                "map": "qqHhMMQcMbRkXm4b7",
                "telefono": "4660-0002",
                "localidad":"Villa de Mayo",
                "direccion":"San Martin y Amenabar"}
        
        const jativaO={
                "nombre":"Farmacia Jativa O",
                "map": "5gEuAaLnx84ykUky5",
                "telefono": "4663-0789",
                "localidad":"Los Polvorines",
                "direccion":"Rivadavia 2017"}
        
        const alvarez={
                "nombre":"Farmacia Alvarez",
                "map": "f26oMaRg1iw74zZBA",
                "telefono": "4748-0415",
                "localidad":"A. Sourdeaux",
                "direccion":"Rosario 4605"}
        
        const jativaMe={
                "nombre":"Farmacia Jativa ME",
                "map": "KfwfEa5DNZJJHu6m7",
                "telefono": "4663-6764",
                "localidad":"Villa de Mayo",
                "direccion":"Av. Eva Peron 5068"}
        
        const saos={
                "nombre":"Farmacia Saos",
                "map": "HRujN8fZSu6VWLkV8",
                "telefono": "5292-3851",
                "localidad":"Los Polvorines",
                "direccion":"L.Suarez 2939"}
        
        const borrino={
                "nombre":"Farmacia Borrino",
                "map": "q4X5JUi4EEAxvgRx8",
                "telefono": "4660-4301",
                "localidad":"Los Polvorines",
                "direccion":"Ing. Huergo 3595"}
        
        const delSol={
                "nombre":"Farmacia del Sol",
                "map": "YmhGs4rGcsNa5CVk8",
                "telefono": "4748-0679",
                "localidad":"A. Sourdeaux",
                "direccion":"Derqui y Peña"}
        
        const eberbach={
                "nombre":"Farmacia Eberbach",
                "map": "z7AxPA897zYafVsD7",
                "telefono": "4463-8179",
                "localidad":"Villa de Mayo",
                "direccion":"Av.Peron 897"}
        
        const phanamerican={
                "nombre":"Farmacia Phanamerican",
                "map": "yJKBp3ukvV1BHY179",
                "telefono": "54363927",
                "localidad":"Los Polvorines",
                "direccion":"Ruta 197 2044"}
        const month="AGOSTO";
    return(
        <div className="container-flex">
                <div className="month"><h2>{month}</h2></div>
                <div className="location"><h1>LOS POLVORINES-V. DE MAYO- A.SOURDEAUX</h1></div>
                <div className="description"><h2>Hace click en la fecha actual para ver que farmacia está de turno!</h2></div>
                <div className="container-grid-days">
                        <h3>DOM</h3>
                        <h3>LUN</h3>
                        <h3>MAR</h3>
                        <h3>MIE</h3>
                        <h3>JUE</h3>
                        <h3>VIE</h3>
                        <h3>SAB</h3>
                </div>
            <div className="container-grid">
                <Dates num="" ></Dates>
                <Dates num="" ></Dates>
                <Dates num="01" month={month} farmacia1Name={eberbach.nombre} farmacia1Map={eberbach.map} farmacia1Tel={eberbach.telefono} farmacia1Loc={eberbach.localidad} farmacia1Dir={eberbach.direccion} farmacia2Name={phanamerican.nombre} farmacia2Map={phanamerican.map} farmacia2Tel={phanamerican.telefono} farmacia2Loc={phanamerican.localidad} farmacia2Dir={phanamerican.direccion}></Dates>
                <Dates num="02" month={month} farmacia1Name={dietrich.nombre} farmacia1Map={dietrich.map} farmacia1Tel={dietrich.telefono} farmacia1Loc={dietrich.localidad} farmacia1Dir={dietrich.direccion} farmacia2Name={alvarezvdm.nombre} farmacia2Map={alvarezvdm.map} farmacia2Tel={alvarezvdm.telefono} farmacia2Loc={alvarezvdm.localidad} farmacia2Dir={alvarezvdm.direccion}></Dates>
                <Dates num="03" month={month} farmacia1Name={rivadavia.nombre} farmacia1Map={rivadavia.map} farmacia1Tel={rivadavia.telefono} farmacia1Loc={rivadavia.localidad} farmacia1Dir={rivadavia.direccion} farmacia2Name={rujana.nombre} farmacia2Map={rujana.map} farmacia2Tel={rujana.telefono} farmacia2Loc={rujana.localidad} farmacia2Dir={rujana.direccion}></Dates>
                <Dates num="04" month={month} farmacia1Name={ocampo.nombre} farmacia1Map={ocampo.map} farmacia1Tel={ocampo.telefono} farmacia1Loc={ocampo.localidad} farmacia1Dir={ocampo.direccion} farmacia2Name={jr.nombre} farmacia2Map={jr.map} farmacia2Tel={jr.telefono} farmacia2Loc={jr.localidad} farmacia2Dir={jr.direccion}></Dates>
                <Dates num="05" month={month} farmacia1Name={emericScs.nombre} farmacia1Map={emericScs.map} farmacia1Tel={emericScs.telefono} farmacia1Loc={emericScs.localidad} farmacia1Dir={emericScs.direccion} farmacia2Name={conti.nombre} farmacia2Map={conti.map} farmacia2Tel={conti.telefono} farmacia2Loc={conti.localidad} farmacia2Dir={conti.direccion}></Dates>

                <Dates num="06" month={month} farmacia1Name={aguila.nombre} farmacia1Map={aguila.map} farmacia1Tel={aguila.telefono} farmacia1Loc={aguila.localidad} farmacia1Dir={aguila.direccion} farmacia2Name={delCirculo.nombre} farmacia2Map={delCirculo.map} farmacia2Tel={delCirculo.telefono} farmacia2Loc={delCirculo.localidad} farmacia2Dir={delCirculo.direccion}></Dates>
                <Dates num="07" month={month} farmacia1Name={buffarini.nombre} farmacia1Map={buffarini.map} farmacia1Tel={buffarini.telefono} farmacia1Loc={buffarini.localidad} farmacia1Dir={buffarini.direccion} farmacia2Name={gintyla.nombre} farmacia2Map={gintyla.map} farmacia2Tel={gintyla.telefono} farmacia2Loc={gintyla.localidad} farmacia2Dir={gintyla.direccion}></Dates>
                <Dates num="08" month={month} farmacia1Name={jativaO.nombre} farmacia1Map={jativaO.map} farmacia1Tel={jativaO.telefono} farmacia1Loc={jativaO.localidad} farmacia1Dir={jativaO.direccion} farmacia2Name={alvarez.nombre} farmacia2Map={alvarez.map} farmacia2Tel={alvarez.telefono} farmacia2Loc={alvarez.localidad} farmacia2Dir={alvarez.direccion}></Dates>
                <Dates num="09" month={month} farmacia1Name={jativaMe.nombre} farmacia1Map={jativaMe.map} farmacia1Tel={jativaMe.telefono} farmacia1Loc={jativaMe.localidad} farmacia1Dir={jativaMe.direccion} farmacia2Name={saos.nombre} farmacia2Map={saos.map} farmacia2Tel={saos.telefono} farmacia2Loc={saos.localidad} farmacia2Dir={saos.direccion}></Dates>
                <Dates num="10" month={month} farmacia1Name={borrino.nombre} farmacia1Map={borrino.map} farmacia1Tel={borrino.telefono} farmacia1Loc={borrino.localidad} farmacia1Dir={borrino.direccion} farmacia2Name={delSol.nombre} farmacia2Map={delSol.map} farmacia2Tel={delSol.telefono} farmacia2Loc={delSol.localidad} farmacia2Dir={delSol.direccion}></Dates>
                <Dates num="11" month={month} farmacia1Name={eberbach.nombre} farmacia1Map={eberbach.map} farmacia1Tel={eberbach.telefono} farmacia1Loc={eberbach.localidad} farmacia1Dir={eberbach.direccion} farmacia2Name={phanamerican.nombre} farmacia2Map={phanamerican.map} farmacia2Tel={phanamerican.telefono} farmacia2Loc={phanamerican.localidad} farmacia2Dir={phanamerican.direccion}></Dates>
                <Dates num="12" month={month} farmacia1Name={dietrich.nombre} farmacia1Map={dietrich.map} farmacia1Tel={dietrich.telefono} farmacia1Loc={dietrich.localidad} farmacia1Dir={dietrich.direccion} farmacia2Name={alvarezvdm.nombre} farmacia2Map={alvarezvdm.map} farmacia2Tel={alvarezvdm.telefono} farmacia2Loc={alvarezvdm.localidad} farmacia2Dir={alvarezvdm.direccion}></Dates>
                
                <Dates num="13" month={month} farmacia1Name={rivadavia.nombre} farmacia1Map={rivadavia.map} farmacia1Tel={rivadavia.telefono} farmacia1Loc={rivadavia.localidad} farmacia1Dir={rivadavia.direccion} farmacia2Name={rujana.nombre} farmacia2Map={rujana.map} farmacia2Tel={rujana.telefono} farmacia2Loc={rujana.localidad} farmacia2Dir={rujana.direccion}></Dates>
                <Dates num="14" month={month} farmacia1Name={ocampo.nombre} farmacia1Map={ocampo.map} farmacia1Tel={ocampo.telefono} farmacia1Loc={ocampo.localidad} farmacia1Dir={ocampo.direccion} farmacia2Name={jr.nombre} farmacia2Map={jr.map} farmacia2Tel={jr.telefono} farmacia2Loc={jr.localidad} farmacia2Dir={jr.direccion}></Dates>
                <Dates num="15" month={month} farmacia1Name={emericScs.nombre} farmacia1Map={emericScs.map} farmacia1Tel={emericScs.telefono} farmacia1Loc={emericScs.localidad} farmacia1Dir={emericScs.direccion} farmacia2Name={conti.nombre} farmacia2Map={conti.map} farmacia2Tel={conti.telefono} farmacia2Loc={conti.localidad} farmacia2Dir={conti.direccion}></Dates>
                <Dates num="16" month={month} farmacia1Name={aguila.nombre} farmacia1Map={aguila.map} farmacia1Tel={aguila.telefono} farmacia1Loc={aguila.localidad} farmacia1Dir={aguila.direccion} farmacia2Name={delCirculo.nombre} farmacia2Map={delCirculo.map} farmacia2Tel={delCirculo.telefono} farmacia2Loc={delCirculo.localidad} farmacia2Dir={delCirculo.direccion}></Dates>
                <Dates num="17" month={month} farmacia1Name={buffarini.nombre} farmacia1Map={buffarini.map} farmacia1Tel={buffarini.telefono} farmacia1Loc={buffarini.localidad} farmacia1Dir={buffarini.direccion} farmacia2Name={gintyla.nombre} farmacia2Map={gintyla.map} farmacia2Tel={gintyla.telefono} farmacia2Loc={gintyla.localidad} farmacia2Dir={gintyla.direccion}></Dates>
                <Dates num="18" month={month} farmacia1Name={jativaO.nombre} farmacia1Map={jativaO.map} farmacia1Tel={jativaO.telefono} farmacia1Loc={jativaO.localidad} farmacia1Dir={jativaO.direccion} farmacia2Name={alvarez.nombre} farmacia2Map={alvarez.map} farmacia2Tel={alvarez.telefono} farmacia2Loc={alvarez.localidad} farmacia2Dir={alvarez.direccion}></Dates>
                <Dates num="19" month={month} farmacia1Name={jativaMe.nombre} farmacia1Map={jativaMe.map} farmacia1Tel={jativaMe.telefono} farmacia1Loc={jativaMe.localidad} farmacia1Dir={jativaMe.direccion} farmacia2Name={saos.nombre} farmacia2Map={saos.map} farmacia2Tel={saos.telefono} farmacia2Loc={saos.localidad} farmacia2Dir={saos.direccion}></Dates>
                
                <Dates num="20" month={month} farmacia1Name={borrino.nombre} farmacia1Map={borrino.map} farmacia1Tel={borrino.telefono} farmacia1Loc={borrino.localidad} farmacia1Dir={borrino.direccion} farmacia2Name={delSol.nombre} farmacia2Map={delSol.map} farmacia2Tel={delSol.telefono} farmacia2Loc={delSol.localidad} farmacia2Dir={delSol.direccion}></Dates>
                <Dates num="21" month={month} farmacia1Name={eberbach.nombre} farmacia1Map={eberbach.map} farmacia1Tel={eberbach.telefono} farmacia1Loc={eberbach.localidad} farmacia1Dir={eberbach.direccion} farmacia2Name={phanamerican.nombre} farmacia2Map={phanamerican.map} farmacia2Tel={phanamerican.telefono} farmacia2Loc={phanamerican.localidad} farmacia2Dir={phanamerican.direccion}></Dates>
                <Dates num="22" month={month} farmacia1Name={dietrich.nombre} farmacia1Map={dietrich.map} farmacia1Tel={dietrich.telefono} farmacia1Loc={dietrich.localidad} farmacia1Dir={dietrich.direccion} farmacia2Name={alvarezvdm.nombre} farmacia2Map={alvarezvdm.map} farmacia2Tel={alvarezvdm.telefono} farmacia2Loc={alvarezvdm.localidad} farmacia2Dir={alvarezvdm.direccion}></Dates>
                <Dates num="23" month={month} farmacia1Name={rivadavia.nombre} farmacia1Map={rivadavia.map} farmacia1Tel={rivadavia.telefono} farmacia1Loc={rivadavia.localidad} farmacia1Dir={rivadavia.direccion} farmacia2Name={rujana.nombre} farmacia2Map={rujana.map} farmacia2Tel={rujana.telefono} farmacia2Loc={rujana.localidad} farmacia2Dir={rujana.direccion}></Dates>
                <Dates num="24" month={month} farmacia1Name={ocampo.nombre} farmacia1Map={ocampo.map} farmacia1Tel={ocampo.telefono} farmacia1Loc={ocampo.localidad} farmacia1Dir={ocampo.direccion} farmacia2Name={jr.nombre} farmacia2Map={jr.map} farmacia2Tel={jr.telefono} farmacia2Loc={jr.localidad} farmacia2Dir={jr.direccion}></Dates>
                <Dates num="25" month={month} farmacia1Name={emericScs.nombre} farmacia1Map={emericScs.map} farmacia1Tel={emericScs.telefono} farmacia1Loc={emericScs.localidad} farmacia1Dir={emericScs.direccion} farmacia2Name={conti.nombre} farmacia2Map={conti.map} farmacia2Tel={conti.telefono} farmacia2Loc={conti.localidad} farmacia2Dir={conti.direccion}></Dates>
                <Dates num="26" month={month} farmacia1Name={aguila.nombre} farmacia1Map={aguila.map} farmacia1Tel={aguila.telefono} farmacia1Loc={aguila.localidad} farmacia1Dir={aguila.direccion} farmacia2Name={delCirculo.nombre} farmacia2Map={delCirculo.map} farmacia2Tel={delCirculo.telefono} farmacia2Loc={delCirculo.localidad} farmacia2Dir={delCirculo.direccion}></Dates>
                
                <Dates num="27" month={month} farmacia1Name={buffarini.nombre} farmacia1Map={buffarini.map} farmacia1Tel={buffarini.telefono} farmacia1Loc={buffarini.localidad} farmacia1Dir={buffarini.direccion} farmacia2Name={gintyla.nombre} farmacia2Map={gintyla.map} farmacia2Tel={gintyla.telefono} farmacia2Loc={gintyla.localidad} farmacia2Dir={gintyla.direccion}></Dates>
                <Dates num="28" month={month} farmacia1Name={jativaO.nombre} farmacia1Map={jativaO.map} farmacia1Tel={jativaO.telefono} farmacia1Loc={jativaO.localidad} farmacia1Dir={jativaO.direccion} farmacia2Name={alvarez.nombre} farmacia2Map={alvarez.map} farmacia2Tel={alvarez.telefono} farmacia2Loc={alvarez.localidad} farmacia2Dir={alvarez.direccion}></Dates>
                <Dates num="29" month={month} farmacia1Name={jativaMe.nombre} farmacia1Map={jativaMe.map} farmacia1Tel={jativaMe.telefono} farmacia1Loc={jativaMe.localidad} farmacia1Dir={jativaMe.direccion} farmacia2Name={saos.nombre} farmacia2Map={saos.map} farmacia2Tel={saos.telefono} farmacia2Loc={saos.localidad} farmacia2Dir={saos.direccion}></Dates>
                <Dates num="30" month={month} farmacia1Name={borrino.nombre} farmacia1Map={borrino.map} farmacia1Tel={borrino.telefono} farmacia1Loc={borrino.localidad} farmacia1Dir={borrino.direccion} farmacia2Name={delSol.nombre} farmacia2Map={delSol.map} farmacia2Tel={delSol.telefono} farmacia2Loc={delSol.localidad} farmacia2Dir={delSol.direccion}></Dates>
                <Dates num="31" month={month} farmacia1Name={eberbach.nombre} farmacia1Map={eberbach.map} farmacia1Tel={eberbach.telefono} farmacia1Loc={eberbach.localidad} farmacia1Dir={eberbach.direccion} farmacia2Name={phanamerican.nombre} farmacia2Map={phanamerican.map} farmacia2Tel={phanamerican.telefono} farmacia2Loc={phanamerican.localidad} farmacia2Dir={phanamerican.direccion}></Dates>
                <Dates num=""></Dates>
                <Dates num=""></Dates>
            </div>
        <div class="attribution"> 
            <a target="_blank" href="https://leadevjs.github.io/Portfolio-Frontend-React/">Coded by Leandro Zapata.</a>
        </div>
        </div>
    );
}
export default Grid;