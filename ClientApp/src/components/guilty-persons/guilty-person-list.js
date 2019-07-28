import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from "react-bootstrap/Pagination";
import GuiltyPersonServiceApi from '../../end-point-api/guilty-person-service-api';
import moment from 'jalali-moment'


export default function GuiltyPersonList(props) {


    const [data, setData] = useState({
        name: '', address: '', currentIndex: 1, sortParam: '',
        entities: [], pageSize: 10, totalRows: 1, paginationView: null
    });

    const [header, setHeader] = useState([
        { key: 'id', label: 'id', caption: 'ردیف' },
        { key: 'code', label: 'code', caption: 'کد' },
        { key: 'name', label: 'name', caption: 'نام' },
        { key: 'family', label: 'family', caption: 'نام خانوادگی' },
        { key: 'fatherName', label: 'fatherName', caption: 'نام پدر' },
        { key: 'arrestedDate', label: 'arrestedDate', caption: 'تاریخ دستگیری' },
        // { key: 'arrestedReason', label: 'arrestedReason', caption: 'علت دستگیری' ,notSortable:true },
    ]);





    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const searchData = (sortParam) => {
        debugger;
        getPagedData(data.currentIndex, data.pageSize, data.sortParam);
    }

    const handleSortPages = (sortParam) => {
        debugger;
        if (!sortParam) return;
        getPagedData(data.currentIndex, data.pageSize, sortParam);
    }

    const handlePageChange = (e) => {
        // setState({ currentIndex: currentIndex });
        debugger;
        getPagedData(e.target.text, data.pageSize, data.sortParam);
    }

    const deleteEntity = (id) => {

    }

    const getPagedData = (currentIndex, PageSize, sortParam) => {
        // if(data.currentIndex===currentIndex&&data.sortParam===sortParam)
        // {

        // }
        GuiltyPersonServiceApi.GetPagedDataApi(currentIndex, PageSize, sortParam,
            { name: data.name, address: data.address })
            .then((response) => {
                //handle success
                console.error('Data***' + JSON.stringify(response.data));

                let pagedItem = [];

                let totalPageNumber = (response.data.totalRows / PageSize)
                if (response.data.totalRows % PageSize !== 0) totalPageNumber++;

                for (let number = 1; number <= totalPageNumber; number++) {
                    pagedItem.push(
                        <Pagination.Item key={number} active={number === Number.parseInt(currentIndex)} onSelect={handlePageChange} >
                            {number}
                        </Pagination.Item>,
                    );
                }
                setData({
                    ...data,
                    entities: response.data._entity,
                    totalRows: response.data.totalRows,
                    currentIndex: currentIndex, sortParam: sortParam,
                    paginationView: <Pagination onClick={handlePageChange}>{pagedItem}</Pagination>

                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        debugger;
        getPagedData(1, data.pageSize, '');

    }, []);

    return (

        <div >

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* <!-- table and filters and data --> */}
            <section id="tabs" className="project-tab">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
                            <nav>
                                <div className="nav nav-tabs flex-fill flex-row justify-content-center" id="nav-tab" role="tablist">
                                    <a className="nav-item  nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-profile"
                                        role="tab" aria-controls="nav-home" aria-selected="true">همه</a>
                                    <a className="nav-item  nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                                        role="tab" aria-controls="nav-profile" aria-selected="false">پذیرش</a>
                                    <a className="nav-item  nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-profile"
                                        role="tab" aria-controls="nav-contact" aria-selected="false">لوازم همراه گشت</a>
                                    <a className="nav-item  nav-link" id="nav-home-tab1" data-toggle="tab" href="#nav-profile"
                                        role="tab" aria-controls="nav-home1" aria-selected="false">لوازم واحد پذیرش</a>
                                    <a className="nav-item  nav-link" id="nav-profile-tab2" data-toggle="tab" href="#nav-profile"
                                        role="tab" aria-controls="nav-profile2" aria-selected="false">پزشک</a>
                                    <a className="nav-item  nav-link" id="nav-contact-tab3" data-toggle="tab" href="#nav-profile"
                                        role="tab" aria-controls="nav-profile4" aria-selected="false">ساماندهی</a>
                                    <a className="nav-item  nav-link" id="nav-profile-tab4" data-toggle="tab" href="#nav-profile"
                                        role="tab" aria-controls="nav-contact3" aria-selected="false">لوازم تحویل داده شده</a>
                                    <a className="nav-item  nav-link" id="nav-contact-tab5" data-toggle="tab" href="#nav-profile"
                                        role="tab" aria-controls="nav-contact5" aria-selected="false">محل اسکان موقت</a>

                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-profile" role="tabpanel"
                                    aria-labelledby="nav-profile-tab">
                                    <div className="table-responsive">

                                        <table className="table table-striped" cellSpacing="0">
                                            <thead>
                                                <div id="top-table-section" className="row flex-fill align-items-center">


                                                    <div className="col-sm-12 col-lg-5">
                                                        <ul className="d-flex justify-content-center">
                                                            <li><a className="top-table-filters"
                                                                href="#all">همه</a></li>
                                                            <li><a className="top-table-filters" href="#news">تعهد
                                                نامه متهم</a></li>
                                                            <li><a className="top-table-filters" href="#contact">تعهد
                                                نامه ضامن</a></li>
                                                            <li><a className="top-table-filters" href="#about">ترخیص</a></li>



                                                        </ul>
                                                    </div>

                                                    <div className="col-sm-12 col-md-12 col-lg-3">
                                                    <Link to="/GuiltyPersonCreation">جدید</Link>
                                                        <input className=" form-control py-2 border-right-0 border" type="search"  name="name" value={data.name} onChange={handleChange}
                                                            placeholder="جست و جو کنید"
                                                        />
                                                        <a href="javascript:void(0);" onClick={searchData}>
                                                            جستجو
                                                       </a>
                                                    </div>


                                                    <div className="col-sm-12 col-md-12 col-lg-4">
                                                        <div className="row">
                                                            <div className="col-auto d-flex justify-content-center flex-fill dropdown">
                                                                <a className="dropdown-text dropdown-toggle"
                                                                    data-toggle="dropdown">
                                                                    <i className="fa fa-navicon"></i>
                                                                    مرتب سازی براساس زمان
                                                </a>

                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Link 1</a>
                                                                    <a className="dropdown-item" href="#">Link 2</a>
                                                                    <a className="dropdown-item" href="#">Link 3</a>
                                                                </div>

                                                            </div>
                                                            <div className="col-auto d-flex justify-content-center flex-fill dropdown">
                                                                <a className="dropdown-text dropdown-toggle" data-toggle="dropdown">
                                                                    <i className="fa fa-calendar"></i>
                                                                    همه زمان ها
                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Link 1</a>
                                                                    <a className="dropdown-item" href="#">Link 2</a>
                                                                    <a className="dropdown-item" href="#">Link 3</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <tr>
                                                    {
                                                        header.map((header) => {

                                                            return (

                                                                <th key={header.key}>
                                                                    <a href="javascript:void(0);" onClick={(e) => { if (!header.notSortable) handleSortPages(header.label) }}>
                                                                        {header.caption}
                                                                    </a>
                                                                </th>
                                                            )
                                                        })
                                                    }
                                                    <th>مشاهده</th>
                                                </tr>


                                            </thead>

                                            <tbody>
                                                {
                                                    data.entities.map((item, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{item.id}</td>
                                                                <td>
                                                                    {item.code}
                                                                </td>
                                                                <td>
                                                                    {item.name}
                                                                </td>
                                                                <td>
                                                                    {item.family}
                                                                </td>
                                                                <td>
                                                                    {item.fatherName}
                                                                </td>
                                                                <td>
                                                                    {moment(new Date(item.arrestedDate)).locale('fa').format('YYYY/MM/DD')}
                                                                </td>
                                                                {/* <td>
                                                                    {item.arrestedReason}
                                                                </td> */}


                                                                <td>
                                                                    <Link to={`/GuiltyPersonUpdate/${item.id}`}>ویرایش</Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    {data.paginationView}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            

            <div>
                <hr />

            </div>
        </div>
    )

}

