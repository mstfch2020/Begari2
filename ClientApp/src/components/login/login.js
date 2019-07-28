import React, { Component } from './node_modules/react';
import axios from './node_modules/axios' 

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',password:''
        };
        this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      handleSubmit(event) {
        event.preventDefault();
        
        // var username = this.state.username;
        // var password = this.state.password;
        // var basicAuth = 'Basic ' + btoa(username + ':' + password);
        axios.post('https://localhost:5001/api/accounts/', this.state, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
}
        }).then(function(response) {
          console.log('Authenticated');
        }).catch(function(error) {
          console.log('Error on Authentication');
        });

      }
    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
					
					<p>
						<label>username:</label>
						<input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" />
					</p>

                    <p>
						<label>password:</label>
						<input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
					</p>

					<p>
						<input type="submit" value="login" />
					</p>
				</form>
        </div>);
    }
}
export default Login;