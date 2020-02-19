import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';

class WelcomeTitle extends Component {
    getTitle() {
        if (this.props.title !== undefined)
            return (
                <Typography variant="h4" gutterBottom>
                    {this.props.title}
                </Typography>
            );
    }

    getSubtitle() {
        if (this.props.subtitle !== undefined)
            return (
                <Typography variant="h6" gutterBottom>
                    {this.props.subtitle}
                </Typography>
            );
    }

    render() {
        return (
            <div style={{marginTop: '5%'}}>
                {this.getTitle()}
                {this.getSubtitle()}
            </div>
            
        );
    }
}

export default WelcomeTitle;