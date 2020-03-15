import React, { Component } from "react";
import Flashcard from "../Components/Flashcard/Flashcard";
import WelcomeCard from "../Components/WelcomeCard/WelcomeCard";
import Login from "../Components/Login/Login";
import Dashboard from "../Components/Dashboard/Dashboard";

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginToken: undefined,
            categories: [],
            cards: []
        }
    }

    setToken(token) {
        this.setState({loginToken: token});
    }

    getDashboard() {
        return (
            <Dashboard token={this.state.loginToken}></Dashboard>
        );
    }

    getLoginPage() {
        return (
            <Flashcard width={500} 
                height={500}
                margin={20}
                backgroundColor={"royalblue"}
                frontFace={
                    <WelcomeCard>
                        <Login setToken={this.setToken.bind(this)}></Login>
                    </WelcomeCard>
                }
                backFace={<WelcomeCard></WelcomeCard>}
            >    
            </Flashcard>
        );
    }

    render() {
        if (this.state.loginToken !== undefined) {
            return this.getDashboard();
        }

        return this.getLoginPage();
    }
}

export default Layout;