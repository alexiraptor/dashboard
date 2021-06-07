import React, { Component } from "react";
import axios from 'axios';
import  { Redirect } from 'react-router-dom';

// A AMELIORER : GESTION DES ERREURS 
// A AMELIORER : GESTION DES ERREURS 
// A AMELIORER : GESTION DES ERREURS 
// A AMELIORER : GESTION DES ERREURS 

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            redirection: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        // console.log(this.state.email)
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/register`, { headers: { "Access-Control-Allow-Origin": "*" } }, { params: { name: this.state.name, email: this.state.email, password: this.state.password } })
            .then(res => {
                console.log(res);
                this.setState({ redirection: true });
            })
            .catch(error => {
                console.log("ERROR: ", error.response.data.message);
            });
    }


    render() {
        const { redirection } = this.state;
        if (redirection) {
            return <Redirect to='/sign-in'/>
        }
        else {
            return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>REGISTER</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" onChange={this.handleChange} className="form-control" placeholder="Name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            <a href={"/sign-in"}>Already have a account ?</a>
                        </p>
                    </form>
                </div>
            </div>
            );
        }    
    }
}