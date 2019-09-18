import React from "react";
import './footer.scss';
import footerDots from "../../assets/images/images/dots-footer.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

export default props =>{
    const year = new Date().getFullYear();
    return (
        <footer className="footer-container">
            <div className="decDots" style={{backgroundImage:`url(${footerDots})`}} />
            <div className="copyright">Copyright &copy; {year} Sweet Corner. All rights reserved.</div>
            <div className="phone"><FontAwesomeIcon icon={faPhone} /> 800 264 2099</div>
        </footer>
    )
}