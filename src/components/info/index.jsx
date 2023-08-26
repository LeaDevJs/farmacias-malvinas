import React from "react";
import styles from "./styles.css"
import Header from "../header"
import { Link } from "react-router-dom";
import SectionTitle from "../sectionTitle"
import { useParams } from "react-router-dom";
import CardInfo from "../card-info";
function Info(props){
    const {farmacia1Name, farmacia2Name, farmacia1Map, farmacia2Map,farmacia1Tel, farmacia2Tel,farmacia1Loc, farmacia2Loc,farmacia1Dir, farmacia2Dir, num, month,
        farmacia3Name, farmacia4Name, farmacia3Map, farmacia4Map,farmacia3Tel, farmacia4Tel,farmacia3Loc, farmacia4Loc,farmacia3Dir, farmacia4Dir,
        farmacia5Name, farmacia5Map,farmacia5Tel,farmacia5Loc,farmacia5Dir,
    } = useParams();
    if (farmacia5Name){
    return(
        <div>
            <Header/>
            <SectionTitle title={`Farmacias de turno dia ${num} de ${month}`}/>
                <div className="container-flex-button">
                <Link to={'/'}><button class="btn-98">Volver</button></Link>
                </div>
                <div className="container-cards">
                    <div className="card1"><CardInfo name={farmacia1Name} map={farmacia1Map} dir={farmacia1Dir} tel={farmacia1Tel} loc={farmacia1Loc}/></div>
                    <div className="card2"><CardInfo name={farmacia2Name} map={farmacia2Map} dir={farmacia2Dir} tel={farmacia2Tel} loc={farmacia2Loc}/></div>
                    <div className="card1"><CardInfo name={farmacia3Name} map={farmacia3Map} dir={farmacia3Dir} tel={farmacia3Tel} loc={farmacia3Loc}/></div>
                    <div className="card2"><CardInfo name={farmacia4Name} map={farmacia4Map} dir={farmacia4Dir} tel={farmacia4Tel} loc={farmacia4Loc}/></div>
                    <div className="card1"><CardInfo name={farmacia5Name} map={farmacia5Map} dir={farmacia5Dir} tel={farmacia5Tel} loc={farmacia5Loc}/></div>
                </div>
                <div className="container-flex">
            <div class="attribution"> 
            <a target="_blank" href="https://leadevjs.github.io/Portfolio-Frontend-React/">Coded by Leandro Zapata.</a>
        </div>
        </div>
        </div>
    );
    }else{
        return(
            <div>
                <Header/>
                <SectionTitle title={`Farmacias de turno dia ${num} de ${month}`}/>
                <div className="container-flex-button">
                <Link to={'/'}><button class="btn-98">Volver</button></Link>
                </div>
                    <div className="container-cards">
                        <div className="card1"><CardInfo name={farmacia1Name} map={farmacia1Map} dir={farmacia1Dir} tel={farmacia1Tel} loc={farmacia1Loc}/></div>
                        <div className="card2"><CardInfo name={farmacia2Name} map={farmacia2Map} dir={farmacia2Dir} tel={farmacia2Tel} loc={farmacia2Loc}/></div>
                        <div className="card1"><CardInfo name={farmacia3Name} map={farmacia3Map} dir={farmacia3Dir} tel={farmacia3Tel} loc={farmacia3Loc}/></div>
                        <div className="card2"><CardInfo name={farmacia4Name} map={farmacia4Map} dir={farmacia4Dir} tel={farmacia4Tel} loc={farmacia4Loc}/></div>
                    </div>
                    <div className="container-flex">
                <div class="attribution"> 
                <a target="_blank" href="https://leadevjs.github.io/Portfolio-Frontend-React/">Coded by Leandro Zapata.</a>
            </div>
            </div>
            </div>
        );
    }
}
export default Info;