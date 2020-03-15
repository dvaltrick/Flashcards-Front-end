import React, { Component } from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from "prop-types";

import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AddIcon from '@material-ui/icons/Add';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';


class Toolbar extends Component {
    constructor(props) {
        super(props);
        
    }

    setValue(newValue) {
        this.props.selectPageHandler(newValue);
    }

    render() {
        return (
            <BottomNavigation
                value={this.props.selectedPage}
                onChange={(event, newValue) => {
                    this.setValue(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction label="Estudar" icon={<DynamicFeedIcon />} />
                <BottomNavigationAction label="Novo cartão" icon={<AddIcon />} />
                <BottomNavigationAction label="Categorias" icon={<LocalOfferIcon />} />
                <BottomNavigationAction label="Estatisticas" icon={<TrendingUpIcon />} />
                <BottomNavigationAction label="Opções" icon={<SettingsIcon />} />
            </BottomNavigation>
        )
    }
}

Toolbar.propTypes = {
};


export default Toolbar;