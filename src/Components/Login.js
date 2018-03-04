import React from 'react';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {
                name: '',
                lastname: ''
            }
        }
    }
    render(){
        if(!this.state.isLoggedIn){
            return(
                <div class="user">
                    <i class="fas fa-user"></i>
                    Login
                </div>
            )
        }else{
            return(
                <div class="user">
                    <i class="fas fa-user"></i>
                    Hello, {this.state.user.name} {this.state.user.lastname}
                </div>
            )
        }
    }
}