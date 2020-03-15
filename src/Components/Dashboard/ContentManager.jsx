import React, { Component } from "react";
import PropTypes from "prop-types";
import Category from "./Pages/Category";

class ContentManager extends Component {
    constructor(props) {
        super(props);
    }

    getContent() {
        switch (this.props.page) {
            case 2:
                return (<Category token={this.props.token}></Category>);
        
            default:
                return ("");
        }
    }

    render() {
        return this.getContent();
    }
}

ContentManager.propTypes = {
};


export default ContentManager;