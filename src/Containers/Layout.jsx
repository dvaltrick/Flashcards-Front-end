import React, { Component } from "react";
import Flashcard from "../Components/Flashcard/Flashcard";
import WelcomeCard from "../Components/WelcomeCard/WelcomeCard";
import Login from "../Components/Login/Login";
import GlobalContext from "../Context/globalContext";

class Layout extends Component {
    verifyAuthentication(value) {
        console.log(value);
        if (value.authUser === undefined) { 
            return ( 
                <WelcomeCard>
                    <GlobalContext.Provider>
                        <Login></Login>
                    </GlobalContext.Provider>
                </WelcomeCard>
            );
        }

        return "";
    }

    render() {
        return (
            <GlobalContext.Consumer>
                {value => this.verifyAuthentication(value)}
            </GlobalContext.Consumer>
        );
    }
}

export default Layout;