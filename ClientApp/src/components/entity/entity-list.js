import React from 'react';
import {Link, Route} from 'react-router-dom';

import EntityServiceApi from '../../end-point-api/entity-service-api';
import Pagination from "react-bootstrap/Pagination";
import EntityDetail from "./entity-detail";

class EntityList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'a', address: 'b', currentIndex: 1, sortParam: '',
            entities: [], pageSize: 10, totalRows: 1
        };
        this.headers = [
            { key: 'id', label: 'id', caption: 'ردیف' },
            { key: 'name', label: 'name', caption: 'نام' },
            { key: 'address', label: 'address', caption: 'آدرس' },
        ];


        this.getPagedData = this.getPagedData.bind(this);
        this.deleteEntity = this.deleteEntity.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSortPages = this.handleSortPages.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.searchData = this.searchData.bind(this);
        this.getPagedData(1, this.state.pageSize, '');
    }
    componentDidMount(){
        
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    searchData = (sortParam) => {
        this.getPagedData(this.state.currentIndex, this.state.pageSize, this.state.sortParam);
    }

    handleSortPages = (sortParam) => {
        this.getPagedData(this.state.currentIndex, this.state.pageSize, sortParam);
    }

    handlePageChange = (e) => {
        // this.setState({ currentIndex: currentIndex });
        this.getPagedData(e.target.text, this.state.pageSize, this.state.sortParam);
    }

    deleteEntity(id) {

    }

    getPagedData = (currentIndex, PageSize, sortParam) => {
        EntityServiceApi.GetPagedDataApi(currentIndex, PageSize, sortParam,
            { name: this.state.name, address: this.state.address })
            .then((response) => {
                //handle success
                console.error('Data***' + JSON.stringify(response.data));

                let pagedItem = [];

                let totalPageNumber = (response.data.totalRows / PageSize)
                if (response.data.totalRows % PageSize !== 0) totalPageNumber++;

                for (let number = 1; number <= totalPageNumber; number++) {
                    pagedItem.push(
                        <Pagination.Item key={number} active={number === Number.parseInt(currentIndex)} onSelect={this.handlePageChange} >
                            {number}
                        </Pagination.Item>,
                    );
                }
                this.setState({
                    entities: response.data._entity,
                    totalRows: response.data.totalRows,
                    currentIndex: currentIndex, sortParam: sortParam,
                    paginationView: <Pagination onClick={this.handlePageChange}>{pagedItem}</Pagination>

                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    render() {
        return (

            <div >

                <br />
                <br />
                <br />
                <br />
                <br />Cartable
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name" />
                <br />
                <input type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="address" />
                <a href="javascript:void(0);" onClick={this.searchData.bind(this)}>
                    جستجو
                </a>
                <br />
                <Link to="/CartableCreation">جدید</Link>

                <table>
                    <thead>
                        <tr>
                            {
                                this.headers.map((header) => {

                                    return (

                                        <th key={header.key}>
                                            <a href="javascript:void(0);" onClick={this.handleSortPages.bind(this, header.label)}>
                                                {header.caption}
                                            </a>
                                        </th>
                                    )
                                })
                            }
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.entities.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{item.id}</td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.address}
                                        </td>
                                        <td>
                                            <Link to={`/CartableUpdate/${item.id}`}>Edit</Link>

                                            <a href="javascript:void(0);"
                                                onClick={this.deleteEntity.bind(this, item.id)}>Delete</a>
                                            <Link to={`/Cartable/entityDetail/${item.id}`}>نمایش</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {this.state.paginationView}
<div>
    <hr />

    {/* <Route to={`/entityDetail/:id`} component={EntityDetail}/> */}
</div>
            </div>
        )
    }
}

export default EntityList;
