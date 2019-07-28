import React, { Component } from 'react'
import Utility from '../../../utility/utility';

//Form component which is used as EDIT_ITEM_FORM as well as CREATE_ITEM_FORM
export default class GuiltyPersonForm extends Component {
    constructor(props) {
        super(props);

        //initializing state 
        this.state = {
            fields: {
                name: !this.props.name ? "" : this.props.name,
                family: !this.props.family ? "" : this.props.family
            }
        };
    }

    //funtion that upadtes state on input change
    handleChange = (e) => {
        const newChange = Utility.createStateFromChangeEvent(this.state, e);
        this.setState(newChange);
    }

    //function that sends the final data when user presses Submit
    handleSubmit = () => {
        const { name, family } = this.state.fields;
        if (this.props.name && this.props.family) {
            this.props.updateItem({ name, family });
        }
        else {
            this.props.addItem({ name, family });
        }
    }

    //calls parent function to close form
    handleCancel = () => this.props.closeForm();

    render() {
        return (
            <form className="menu-row" >
                <div className="menu-item-name">
                    <input value={this.state.fields.name} onChange={this.handleChange}
                        name="name" placeholder="Enter item name" type="text" />
                </div>
                <div className="menu-item-price">
                    <input value={this.state.fields.family} onChange={this.handleChange}
                        name="family" placeholder="item familu" type="text" />
                </div>
                <div className="operations">
                    <span onClick={this.handleSubmit} className="btn done" >
                        <i className="fas fa-check" />
                    </span>
                    <span onClick={this.handleCancel} className="btn cancel">
                        <i className="fas fa-times" />
                    </span>
                </div>
            </form>
        )
    }
}