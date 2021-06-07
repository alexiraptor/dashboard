import React, { Component } from "react";
import axios from 'axios';
import  { Redirect } from 'react-router-dom';

// A AMELIORER : GESTION DES ERREURS 
// A AMELIORER : GESTION DES ERREURS 
// A AMELIORER : GESTION DES ERREURS 
// A AMELIORER : GESTION DES ERREURS 

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirection: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.setIsLoggedIn())
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        // console.log(this.state.email)
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/login`, { headers: { "Access-Control-Allow-Origin": "*" } }, { params: { email: this.state.email, password: this.state.password } })
            .then(res => {
                console.log(res);
                // console.log(res.data);
                var token = res.data;
                localStorage.setItem("authtoken", token);
                // console.log("TOKEN IS : ")
                // console.log(localStorage.getItem("authtoken"));

                this.props.setIsLoggedIn(true);
                this.setState({ redirection: true });
            })
            .catch(error => {
                console.log("ERROR: ", error);
                // console.log(error.response.data);
            });
    }

    render() {
        const { redirection } = this.state;
        if (redirection) {
            return <Redirect to='/home'/>
        }
        else {
            return (
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form onSubmit={this.handleSubmit}>
                            <h3>LOGIN</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                            </div>

                            {/* <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div> */}

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                <a href={"/sign-up"}>Don't have an account yet ?</a>
                            </p>
                        </form>
                    </div>
                </div>
            );
        }
    }
}