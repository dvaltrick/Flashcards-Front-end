import React, { Component } from "react";
import PropTypes from "prop-types";
import Toolbar from "../Toolbar/Toolbar";
import ContentManager from "./ContentManager";



class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPage: 0
        };
    }

    setSelectedPage(page) {
        console.log("change page to: ", page);
        this.setState({selectedPage: page});
    }

    render() {
        return (
            <div style={{
                height: '100%'
            }}>
                <ContentManager token={this.props.token} 
                    page={this.state.selectedPage}></ContentManager>
                <Toolbar selectPageHandler={this.setSelectedPage.bind(this)}
                    selectedPage={this.state.selectedPage}></Toolbar>
            </div>
        )
    }
}

Dashboard.propTypes = {
};


export default Dashboard;