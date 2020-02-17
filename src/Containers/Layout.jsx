import React, { Component } from "react";
import Flashcard from "../Components/Flashcard/Flashcard";
import WelcomeCard from "../Components/WelcomeCard/WelcomeCard";
import Login from "../Components/Login/Login";

class Layout extends Component {
    render() {
        return (
            <Flashcard width={500} 
                height={500}
                margin={20}
                backgroundColor={"royalblue"}
                frontFace={
                    <WelcomeCard>
                        <Login></Login>
                    </WelcomeCard>
                }
                backFace={<WelcomeCard></WelcomeCard>}
            >    
            </Flashcard>
        );
    }
}

export default Layout;