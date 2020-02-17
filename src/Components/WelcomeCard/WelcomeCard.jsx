import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import WelcomeTitle from "./WelcomeTitle/WelcomeTitle";

class WelcomeCard extends Component {
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <WelcomeTitle title={"Projeto Flashcard"} subtitle={"A forma mais fácil de aprender"}></WelcomeTitle>
                </Grid>
                <Grid item xs={6}>
                    <TextField id={"login"} label={"User"} ></TextField>
                </Grid>
                <Grid item xs={6}>Lado 2</Grid>
            </Grid>
        );
    }
}

export default WelcomeCard;