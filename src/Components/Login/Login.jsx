import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import {Paper, TextField} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import GlobalContext from '../../Context/globalContext';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: ""
        };
    }

    setToken(token) {
        this.props.setToken(token);
    }
    
    login() {
        let me = this;
        let userName = this.state.userName;
        let password = this.state.password;

        let loginObject = {
            username: userName,
            password: password
        }

        fetch("http://localhost:8080/login", 
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(loginObject)
            }
        ).then(
            function(response) {
                console.log(response);
                if ( response.status !== 200 ) {
                    console.log('Status Code: ' +  response.status);
                    return;
                }
            
                let token = response.headers.get("Authorization");
                
                me.setToken(token);
            }
        );
    }

    handleChangeUserName(event) {
        this.setState({userName: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
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
                                label="User"
                                value={this.state.userName}
                                onChange={this.handleChangeUserName.bind(this)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="txPassword" 
                                label="Password" 
                                type="password"
                                autoComplete="current-password"
                                value={this.state.password}
                                onChange={this.handleChangePassword.bind(this)} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" 
                                color="primary"
                                style={{margin: '2px'}}
                                onClick={this.login.bind(this)}>
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