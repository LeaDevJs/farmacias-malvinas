import React from "react";
import styles from "./styles.css"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
function CardInfo(props){
    return(
        <div>
            <div className="card">
      <div className="qrBox">
        <LocalHospitalIcon className="icon"/>
      </div>
      <div className="title">
        <p>{props.name}</p>
        <p>{props.loc}</p>
      </div>
      <div className="description">
        <p> Telefono: {props.tel}</p>
        <p>Direccion: {props.dir}</p>
      </div>
      <div className="button">
      <a target="_blank" href={`https://goo.gl/maps/${props.map}`}><button class="btn-42"><span>Ver en Maps</span></button></a>
      </div>
    </div>
        </div>
    );
}
export default CardInfo;