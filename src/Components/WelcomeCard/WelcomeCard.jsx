import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import WelcomeTitle from "./WelcomeTitle/WelcomeTitle";

class WelcomeCard extends Component {
    render() {
        return (
            <Grid container spacing={3} style={{width: "100%"}}>
                <Grid item xs={12}>
                    <WelcomeTitle title={"Projeto Flashcard"} 
                        subtitle={"A forma mais f�cil de aprender"}></WelcomeTitle>
                </Grid>
                <Grid item xs={12}>
                    <div style={{textAlign: '-webkit-center'}}>
                        {this.props.children}
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default WelcomeCard;