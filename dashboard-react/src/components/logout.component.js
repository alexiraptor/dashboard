import React, { Component } from "react";
import  { Redirect } from 'react-router-dom';



export default class Logout extends Component {
    constructor() {
        super();
        this.state = {
            redirection: false
        };
    }

    componentWillMount() {
        localStorage.removeItem("authtoken");
        this.props.setIsLoggedIn(false);
        this.setState({ redirection: true });
    }

    render() {

        const { redirection } = this.state;
        if (redirection) {
            return <Redirect to='/sign-in'/>
        }
    }
}