import React from "react";
import styles from "./styles.css"
import Header from "../header"
import { useParams } from "react-router-dom";
function Info(props){
    const {farmacia1Name, farmacia2Name, farmacia1Map, farmacia2Map,farmacia1Tel, farmacia2Tel,farmacia1Loc, farmacia2Loc,farmacia1Dir, farmacia2Dir,} = useParams();
    return(
        <div>
            <Header></Header>
                <a target="_blank" href={`https://goo.gl/maps/${farmacia1Map}`}><h1>{farmacia1Name} </h1></a>
        </div>
    );
}
export default Info;