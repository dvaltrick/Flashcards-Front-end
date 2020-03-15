import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CirclePicker  } from 'react-color';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from "prop-types";

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: undefined,
            name: "",
            color: {
                hex: "#000"
            },
            categoryList: []
        };
    }

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories() {
        fetch("http://localhost:8080/api/category", 
            {
                method: 'GET',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": this.props.token
                }
            }
        ).then(
            (res) => res.json()
        ).then(
            (resJson) => {
                this.setCategoryList(resJson);
            }
        );
    }

    setName(newName) {
        this.setState({name: newName.target.value});
    }

    setColor(newColor) {
        this.setState({color: newColor});
    }

    setCategoryList(newList) {
        this.setState({categoryList: newList});
    }

    save() {
        let me = this;
        let color = this.state.color.hex;
        let name = this.state.name;

        let toSave = {
            color: color,
            name: name
        };

        fetch("http://localhost:8080/api/category", 
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": this.props.token
                },
                body: JSON.stringify(toSave)
            }
        ).then(
            function(response) {
                me.loadCategories();
                me.clean();
            }
        );
    }

    clean() {
        this.setState({
            name: "",
            color: {
                hex: "#000"
            }
        });
    }

    getForm() {
        return (
            <form style={{
                padding: '20px'
            }} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                        <TextField id="standard-basic" 
                            label="Nome da categoria"
                            value={this.state.name}
                            onChange={this.setName.bind(this)} />
                    </Grid>
                    <Grid item xs={4}>
                        <CirclePicker color={this.state.color}
                            onChangeComplete={this.setColor.bind(this)}/>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                        <Chip color='primary' 
                            style={{backgroundColor: this.state.color.hex}} 
                            label={this.state.name !== "" ? this.state.name : "Preview"}></Chip>
                    </Grid>
                    <Grid item xs={3}>
                        <div >
                            <Button variant="contained" 
                                color="primary"
                                style={{marginRight: '5px'}}
                                onClick={this.save.bind(this)}>
                                Salvar
                            </Button>
                            <Button variant="contained"
                                onClick={this.clean.bind(this)}>
                                Limpar
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                
            </form>
        );
    }

    delete(id) {
        fetch("http://localhost:8080/api/category/" + id, 
        {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": this.props.token
            }
        }).then(
            (res) => {
                this.loadCategories();
            }
        );
    }

    getListItems() {
        let items = [];
        let categories = this.state.categoryList;
        
        categories.map(cat => {
            items.push(
                <Grid item xs={2}>
                    <Chip color='primary' 
                        style={{backgroundColor: cat.color}} 
                        label={cat.name}
                        onDelete={this.delete.bind(this, cat.id)}></Chip>
                </Grid>
            )
        });

        return items;
    }

    getList() {
        return (
            <Grid container spacing={3} 
                style={{
                    textAlign: 'center'
                }}>
                {this.getListItems()}
            </Grid>
        );
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                {this.getForm()}
                <div style={{
                    marginLeft: '10%',
                    marginRight: '10%'
                }}>
                    {this.getList()}
                </div>
                
            </div>
        );
    }
}

Category.propTypes = {
};


export default Category;