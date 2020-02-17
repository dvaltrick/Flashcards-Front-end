import React, { Component } from "react";
import Flashcard from "../Components/Flashcard/Flashcard";
import WelcomeCard from "../Components/WelcomeCard/WelcomeCard";

class Layout extends Component {
    render() {
        return [
            <Flashcard width={400} 
                height={300}
                margin={20}
                backgroundColor={"royalblue"}>
                <WelcomeCard></WelcomeCard>
            </Flashcard>
        ]
    }
}

export default Layout;