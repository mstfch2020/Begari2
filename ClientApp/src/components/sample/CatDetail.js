import React from 'react';
import { Link } from 'react-router-dom';
import GlobalData from '../../global/global-data';

class CatDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { websites: [] };
        this.headers = [
            { key: 'id', label: 'id' },
            { key: 'name', label: 'name' },
        ];
        this.deleteWebsite = this.deleteWebsite.bind(this);
    }

    componentDidMount() {
        console.error(`url==${GlobalData.baseUrl}/Categories`);
        fetch(`${GlobalData.baseUrl}/Categories`)
            .then(response => {
                return response.json();
            }).then(result => {
                console.error("Shoosh : " + JSON.stringify(result));
                this.setState({
                    websites: result
                });
            });
    }

    deleteWebsite(id) {
        if (window.confirm("Are you sure want to delete?")) {            
            fetch(`${GlobalData.baseUrl}/Categories/${id}`, {
                method: 'DELETE',
                body: JSON.stringify({
                    name: this.state.name
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => {
                if (response.status === 200) {
                    alert("Website deleted successfully");
                    fetch(`${GlobalData.baseUrl}/Categories`)
                        .then(response => {
                            return response.json();
                        }).then(result => {
                            console.error("Shoosh : " + result);
                            this.setState({
                                websites: result
                            });
                        });
                }
            });
        }
    }

    render() {
        return (
            <div id="container">
                <Link to="/create">Add Website</Link>
                <p />
                <table>
                    <thead>
                        <tr>
                            {
                                this.headers.map(function (h) {
                                    return (
                                        <th key={h.key}>{h.label}</th>
                                    )
                                })
                            }
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.websites.map(function (item, key) {
                                return (
                                    <tr key={key}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <Link to={`/update/${item.id}`}>Edit</Link>

                                            <a href="javascript:void(0);" onClick={this.deleteWebsite.bind(this, item.id)}>Delete</a>
                                        </td>
                                    </tr>
                                )
                            }.bind(this))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CatDetail;