import React from 'react';
import { Link } from 'react-router-dom';

class CatCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
        name: e.target.value
    });
  }
  handleSubmit(event) {
	  event.preventDefault();
	  fetch('https://localhost:5001/api/Categories', {
			method: 'POST',
			body: JSON.stringify({
                name: this.state.name
			}),
			headers: {
							"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				if(response.status === 200) {
					alert("New website saved successfully");
				}
			});
  }
  render() {
    return (
		<div id="container">
		  <Link to="/">Websites</Link>
			  <p/>
			  <form onSubmit={this.handleSubmit}>
				<p>
					<label>Title:</label>
					<input type="text" name="Name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
				</p>
				
				<p>
					<input type="submit" value="Submit" />
				</p>
			  </form>
		   </div>
    );
  }
}

export default CatCreate;