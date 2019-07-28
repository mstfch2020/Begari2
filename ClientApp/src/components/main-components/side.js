import React,{useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
 
import 'bootstrap/dist/js/bootstrap.bundle.min';

import  'bootstrap/dist/js/bootstrap.min.js'

export default function Side (){
  

    return(         
            
        <div className="sidebar fixed right-0 fit-content flex flex-col fit-width
             pl-2 pr-2 right-direction text-right pt-3" id="sidebar">

            <span className="no-white-space w-100 color-429FD4 flex items-center p-2">
                <i className="fas fa-chevron-up ml-2 mr-2"></i>
                طرح و پردازش غدیر(تهران)
            </span>
            <hr className="border-A5D2EB w-100 mt-1 mb-1"/>
            <div>
                <a href="#" className="no-text-decoration">
                    <span className="no-white-space color-8D8D8D w-100 flex items-center redius-lg p-2">
                        <i className="far fa-check-circle ml-2 color-429FD4 mr-2"></i>
                        پذیرش
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className="no-text-decoration">
                    <span className="no-white-space color-8D8D8D w-100 flex items-center redius-lg p-2">
                        <i className="far fa-check-circle ml-2 color-429FD4 mr-2"></i>
                        صورت جلسه لوازم همراه گشت
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className="no-text-decoration">
                    <span className="no-white-space color-8D8D8D w-100 flex items-center redius-lg p-2">
                        <i className="far fa-check-circle ml-2 color-429FD4 mr-2"></i>
                        صورت جلسه لوازم واحد پذیرش
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className="no-text-decoration">
                    <span className="no-white-space color-8D8D8D w-100 flex items-center redius-lg p-2">
                        <i className="far fa-check-circle ml-2 color-429FD4 mr-2"></i>
                        پزشک
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className="no-text-decoration">
                    <span className="no-white-space color-8D8D8D w-100 flex items-center redius-lg p-2">
                        <i className="far fa-check-circle ml-2 color-429FD4 mr-2"></i>
                        لوازم تحویل داده شده
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className="no-text-decoration">
                    <span className="no-white-space color-8D8D8D w-100 flex items-center redius-lg p-2 active">
                        <i className="far fa-check-circle ml-2 color-429FD4 mr-2"></i>
                        غربالگری و ساماندهی
                    </span>
                </a>
                <nav className="navbar">
                    <ul className="screening-organizing-child navbar-nav">
                        <li className="no-list-style nav-item">
                            <a className="color-429FD4 font-xs p-1 no-text-decoration nav-link active accused-accused-link" href="#accused-accused">
                                تعهد نامه متهم
                            </a>
                        </li>
                        <li className="no-list-style nav-item">
                            <a className="color-429FD4 font-xs p-1 no-text-decoration nav-link guarantee-commitment-link"
                                href="#guarantee-commitment">
                                تعهد نامه ضامن
                            </a>
                        </li>
                        <li className="no-list-style nav-item">
                            <a className="color-429FD4 font-xs p-1 no-text-decoration nav-link clearance-link" href="#clearance">
                                ترخیص
                            </a>
                        </li>
                        <div className="screening-organizing-child-scrollbar"></div>
                        <div className="screening-organizing-child-scrollbar-btn"></div>
                    </ul>
                </nav>
            </div>
            <div>
                <a href="#" className="no-text-decoration">
                    <span className="no-white-space color-8D8D8D w-100 flex items-center redius-lg p-2">
                        <i className="far fa-check-circle ml-2 color-429FD4 mr-2"></i>
                        درخواست محل اسکان موقت
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className="no-text-decoration">
                    <span className="no-white-space color-8D8D8D w-100 flex items-center redius-lg p-2">
                        <i className="far fa-check-circle ml-2 color-429FD4 mr-2"></i>
                        گزارشات
                    </span>
                </a>
            </div>
            <span className="no-white-space w-100 color-429FD4 flex items-center p-2">
                <i className="fas fa-chevron-up ml-2 mr-2"></i>
                مدیریت کاریر
            </span>
            <hr className="border-707070 w-100 mt-1 mb-1" />

        </div>

    
      
        );
    }
 
