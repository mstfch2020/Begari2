import React, { Component } from 'react'
import GuiltyPersonForm from '../../forms/guilty-person/guilty-person-form';

//component that renders individual menu item stored in redux store
export default class GuiltyPersonItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      family: null,
      openEditForm: false,
    }
  }

  //setting necessary values on mounting of component
  componentDidMount() {
    const { name, family } = this.props;
    this.setState({ name, family });
  }

  //function to trigger form view and close item view
  handleEditClick = () => this.setState({ openEditForm: true })

  //calls parent's function to updated item
  handleUpdate = ({name, family}) => {
    const updatedItem = {
      id : this.props.id, name, family
    } 
    this.props.handleUpdate(updatedItem);
    this.handleCancel();
  }

  //calls parent's function to delete item from store
  handleDelete = () => this.props.handleDelete(this.props.id);

  //function to close form
  handleCancel = () => this.setState({openEditForm : false});

  render() {
    return (
      <div>
        {
          !this.state.openEditForm ? (
            <div className="menu-row">
              <div className="menu-item-name">{this.state.name}</div>
              <div className="menu-item-family">{this.state.family}</div>
              <div className="operations">
                <span onClick={this.handleEditClick} className="btn edit" ><i className="fas fa-pen"></i></span>
                <span onClick={this.handleDelete} className="btn delete"><i className="fas fa-trash"></i></span>
              </div>
            </div>
          ) : (
            <GuiltyPersonForm name={this.state.name} family={this.state.family} 
            closeForm={this.handleCancel} updateItem={this.handleUpdate} />
          )
        }
      </div>
    )
  }
}