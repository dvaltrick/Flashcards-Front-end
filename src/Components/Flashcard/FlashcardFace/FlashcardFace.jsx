import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Paper} from "@material-ui/core";

class FlashcardFace extends Component {
    render () {
        let clonedFace = React.cloneElement(
            this.props.children,
            {flipCard: this.props.flipCard}
        )

        console.log(clonedFace);

        return (
            <Paper elevation={3}
                style={{
                    width: this.props.width + "px",
                    height: this.props.height + "px",
                    backgroundColor: this.props.backgroundColor,
                    color: this.props.color,
                    padding: '20px',
                    margin: this.props.margin + 'px'
                }}>
                {clonedFace}  
            </Paper>
        );
    }
}

FlashcardFace.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margin: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default FlashcardFace