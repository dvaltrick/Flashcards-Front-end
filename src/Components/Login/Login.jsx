import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import {Paper, TextField} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import GlobalContext from '../../Context/globalContext';

class Login extends Component {
    onClick = (event, d) => {
        console.log('passou aqui', this.context);
        this.context = {
            authUser: {
                username: 'aaaaa',
                password: 'bbbbb'
            }
        };

    }

    render() {
        return (
            <Paper elevation={3}
                style={{
                    width: "300px",
                    height: "300px",
                    backgroundColor: "white",
                    color: "black",
                    padding: '20px'
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <form>
                    <Grid container spacing={3} style={{width: "100%"}}>
                        <Grid item xs={12}>
                            <TextField id="txUser" 
                                label="User" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="txPassword" 
                                label="Password" 
                                type="password"
                                autoComplete="current-password" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" 
                                color="primary"
                                onClick={() => { this.onClick()}}
                                style={{margin: '2px'}}>
                                Entrar
                            </Button>
                            <Button variant="outlined" color="secondary" style={{margin: '2px'}}>
                                Cadastrar
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{width: '100%', paddingLeft: '30px', textAlign: 'left'}}>
                                <Link href="#">
                                    Esqueceu a senha?
                                </Link>
                            </div>
                            
                        </Grid>
                        
                    </Grid>
                </form>
            </Paper>
        );
    }
};

Login.contextType = GlobalContext;

export default Login;