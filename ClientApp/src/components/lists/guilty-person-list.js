import React, { Component } from 'react';
import '../../assets/css/sample/sample.css';
import { connect } from 'react-redux';
import { createItem, deleteItem, updateItem,readItems } from '../../redux/actions/guilty-person-action'
import uuid from 'uuid';
import GuiltyPersonItem from '../view-items/guilty-person-item/guilty-person-item';
import GuiltyPersonForm from '../forms/guilty-person/guilty-person-form';
import { Provider } from 'react-redux';
import reducer from '../../redux/reducers/guilty-person-reducer';
import { createStore } from 'redux';

const store = createStore(reducer);
//main component that wraps major part of application
class GuiltyPersonList extends Component {
    constructor(props) {
        super(props);
        this.state = { openAddForm: false }
        this.handleAddClick=this.handleAddClick.bind(this);
        this.handleAddItem=this.handleAddItem.bind(this);
        this.handleDeleteItem=this.handleDeleteItem.bind(this);
        this.handleUpdateItem=this.handleUpdateItem.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
    }

    //function to trigger form rendering
    handleAddClick = () => this.setState({ openAddForm: true });

    //function to handle item addition
    handleAddItem = ({ name, family }) => {

        if (name == "") name = "untitled";
        if (family == "") family = 'untitled';

        const newItem = {
            id: uuid.v4(),
            name, family
        }

        let a = this.props.createItem(newItem);
console.log(JSON.stringify(newItem));
console.log(JSON.stringify(a));
        this.handleCancel();
    }

    //function to handle item deletion
    handleDeleteItem = (id) => this.props.deleteItem(id);

    //function to handle item updates
    handleUpdateItem = (item) => this.props.updateItem(item);

    //function to unmount form component or in short close it
    handleCancel = () => this.setState({ openAddForm: false });

    render() {
        return (
            <Provider store={store}>
                <div>
                    {/* Heading */}
                    <h1><i class="fas fa-list-alt"></i> e-Menu</h1>

                    {/* Menu component starts */}
                    <div className="menu" >

                        <div className="heading menu-row">
                            <div className="menu-item-name">Name</div>
                            <div className="menu-item-family">family</div>
                            <div className="operations"> Operations</div>
                        </div>

                        {this.props.items.length > 0 ? this.props.items.map((item, i) => {
                            return <GuiltyPersonItem key={item.name + "-" + item.family + "-" + item.id} id={item.id}
                                name={item.name} family={item.family}
                                handleDelete={this.handleDeleteItem}
                                handleUpdate={this.handleUpdateItem}
                                closeForm={this.handleCancel} />
                        }) : (
                                <div className="menu-row">
                                    <div className="msg">List is empty.</div>
                                </div>
                            )}

                    </div>
                    {/* Menu component ends */}

                    {!this.state.openAddForm ? (
                        <span onClick={this.handleAddClick} className="add btn"><i className="fas fa-plus"></i></span>
                    ) : (
                            <div className="menu"><GuiltyPersonForm addItem={this.handleAddItem} closeForm={this.handleCancel} /></div>
                        )}
                </div>
            </Provider>
        );
    }
}

//subscribing to redux store updates
const mapStateToProps = (items) => {
    return { items };
}
const mapDispatchToProps = (dispatch) => {
    return {
        createItem: () => dispatch(createItem()),
        deleteItem: () => dispatch(deleteItem()),
        updateItem: () => dispatch(updateItem()),
        readItems:  () => dispatch( readItems())
    };
};

//connecting our main component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(GuiltyPersonList);