import React from "react";
import styles from "./styles.css"
import Header from "../header";
import Grid from "../grid";
import SectionTitle from "../sectionTitle";
function Home(){
    return(
        <div>
            <Header></Header>
            <SectionTitle title="Farmacia de turno"></SectionTitle>
            <Grid></Grid>
        </div>
    );
}
export default Home;