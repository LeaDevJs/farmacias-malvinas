import React from "react";
import styles from "./styles.css"
import Header from "../header"
import SectionTitle from "../sectionTitle"
import { useParams } from "react-router-dom";
import CardInfo from "../card-info";
function Info(props){
    const {farmacia1Name, farmacia2Name, farmacia1Map, farmacia2Map,farmacia1Tel, farmacia2Tel,farmacia1Loc, farmacia2Loc,farmacia1Dir, farmacia2Dir, num, month} = useParams();
    return(
        <div>
            <Header/>
            <SectionTitle title={`Farmacias de turno dia ${num} de ${month}`}/>
                <div className="container-flex">
                <div className="location"><h1>LOS POLVORINES-V. DE MAYO- A.SOURDEAUX</h1></div>
                </div>
                <div className="container-cards">
                    <div className="card1"><CardInfo name={farmacia1Name} map={farmacia1Map} dir={farmacia1Dir} tel={farmacia1Tel} loc={farmacia1Loc}/></div>
                    <div className="card2"><CardInfo name={farmacia2Name} map={farmacia2Map} dir={farmacia2Dir} tel={farmacia2Tel} loc={farmacia2Loc}/></div>
                </div>
                <div className="container-flex">
        <div class="attribution"> 
            <a target="_blank" href="https://leadevjs.github.io/Portfolio-Frontend-React/">Coded by Leandro Zapata.</a>
        </div>
        </div>
        </div>
    );
}
export default Info;