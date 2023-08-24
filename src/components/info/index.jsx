import React from "react";
import styles from "./styles.css"
import Header from "../header"
import { useParams } from "react-router-dom";
function Info(props){
    const {farmacia} = useParams();
    return(
        <div>
            <Header></Header>
                <a target="_blank" href={`https://goo.gl/maps/${farmacia}`}><h1>Farmacia del Aguila Av. San Martin </h1></a>
        </div>
    );
}
export default Info;