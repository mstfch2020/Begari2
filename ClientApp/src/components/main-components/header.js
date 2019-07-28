import React from 'react';
import {ghadir} from '../../assets/img/ghadir.png';

export class Header extends React.Component {
   constructor (props) {
      super(props); 
      
      this.state = {      
      };
    }
    render() {
       return (
        <nav className="navbar navbar-expand-lg navbar-light back-449BB4 right-direction fixed-top">
        <button
            className="navbar-toggler no-border white-color-imp sidebar-btn no-border no-box-shadow no-outline collapsed"
            type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-list"></i>
        </button>
        <button className="navbar-toggler no-border white-color-imp no-border no-box-shadow no-outline" type="button"
            data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
            aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse content-between" id="navbarTogglerDemo01">
            <ul className="navbar-nav left-direction">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        <img src={ghadir} className="redius-100 user-img" alt="" />
                        <span className="white-color">غدیر</span>
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </li>
            </ul>
            <div className="flex fit-width items-center">
                <form className="form-inline form-group" action="">
                    <div className="form-control redius-lg relative p-0 no-overflow flex-imp items-center pr-1">
                        <button className="serch-btn btn p-0 transparent-back no-border no-outline no-box-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" className="p-1" id="magnifying-glass-browser" width="28"
                                height="28.982" viewBox="0 0 32 32.982">
                                <g id="Group_59" data-name="Group 59" transform="translate(0)">
                                    <path id="Path_111" data-name="Path 111"
                                        d="M29.416,21.53A12.661,12.661,0,1,0,27.695,23.1l9.537,9.537a1.146,1.146,0,0,0,.812.348,1.114,1.114,0,0,0,.812-.348,1.179,1.179,0,0,0,0-1.644Zm-19.905-8.7a10.5,10.5,0,1,1,10.5,10.5A10.514,10.514,0,0,1,9.511,12.825Z"
                                        transform="translate(-7.19)" fill="#707070" />
                                </g>
                            </svg>
                        </button>
                        <input type="text" className="no-border no-outline h-100 no-box-shadow font-xs serch-input"
                            placeholder="جستجو کنید"/>
                    </div>
                </form>
                <a className="navbar-brand white-color-imp" href="#">LOGO</a>
            </div>

        </div>
        <a className="nav-title navbar-brand white-color-imp" href="#">
            اداره پیشگیری و ساماندهی آسیب دیدگان اجتماعی
        </a>
    </nav>

     
       );
    }
 }
 export default Header;