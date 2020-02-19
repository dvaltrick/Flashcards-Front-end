import React, { Component } from "react";
import PropTypes from "prop-types";
import FlashcardFace from './FlashcardFace/FlashcardFace'

class Flashcard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flipped: false
        }
    }
    
    flipCard() {
        if (this.flipped !== undefined)
            this.setState({flipped: !this.state.flipped});
    }

    render() {
        let innerCardStyle = this.state.flipped ? {transform: "rotateY(180deg)"} : {};
        
        return (
            <div className={"flip-card"}>
                <div className={"flip-card-inner"} style={innerCardStyle}>
                    <div className={"flip-card-front"}>
                        <FlashcardFace width={this.props.width}
                            height={this.props.height}
                            margin={this.props.margin}
                            backgroundColor={this.props.backgroundColor}
                            color={"white"}
                            flipCard={this.flipCard.bind(this)}
                            flipped={this.state.flipped}>
                            {this.props.frontFace}
                        </FlashcardFace>
                    </div>
                    <div className={"flip-card-back"}>
                        <FlashcardFace width={this.props.width}
                            height={this.props.height}
                            margin={this.props.margin}
                            backgroundColor={"white"}
                            color={"black"}
                            flipped={this.state.flipped}>
                                {this.props.backFace}
                        </FlashcardFace>
                    </div>
                </div>
            </div>
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