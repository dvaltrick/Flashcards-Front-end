import React, { Component } from "react";
import {Paper} from "@material-ui/core";
import PropTypes from "prop-types";

class Flashcard extends Component {
    render() {
        return (
            <Paper elevation={3}
                style={{
                    width: this.props.width + "px",
                    height: this.props.height + "px",
                    backgroundColor: this.props.backgroundColor,
                    color: "white",
                    padding: '20px',
                    margin: this.props.margin + 'px'
                }}>
                    {this.props.children}
            </Paper>
        );
    }
}

Flashcard.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margin: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired
};


export default Flashcard;