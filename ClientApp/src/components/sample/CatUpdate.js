import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CatUpdate extends React.Component {
	constructor(props) {
		super(props);
		this.state = { id: '', name: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {

		fetch('https://localhost:5001/api/Categories/' + this.props.match.params.id)
			.then(response => {
				return response.json();
			}).then(result => {
				console.error("update:" + JSON.stringify(result));
				this.setState({
					id: result.id,
					name: result.name
				});
			});
	}
	handleChange(e) {
		this.setState({
			name: e.target.value
		});
	}
	handleSubmit(event) {
		event.preventDefault();
		fetch('https://localhost:5001/api/Categories/' + this.props.match.params.id, {
			method: 'PUT',
			body: JSON.stringify({
				id: this.state.id,
				name: this.state.name
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
			if (response.status === 200) {
				alert("Website update successfully.");
			}
		});
	}

	render() {
		return (
			<div id="container">
				<Link to="/">Websites</Link>
				<p />
				<form onSubmit={this.handleSubmit}>
					<input type="hidden" name="id" value={this.state.id} />
					<p>
						<label>Title:</label>
						<input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name" />
					</p>

					<p>
						<input type="submit" value="Submit" />
					</p>
				</form>
			</div>
		);
	}
}

export default CatUpdate;