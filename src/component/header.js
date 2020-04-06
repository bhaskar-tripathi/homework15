import React from "react";
import "../styles/PageStyle.css";
import "../styles/PageStyle.css"

function Header() {
    return (
        <nav className="navbar navbar-light bg-light sticky-top px-0 navcust">
            <div className="mx-auto">
                <i className="fas fa-id-card iconStyle" ></i> {"   "}
            <span className="navbar-brand mb-0 h1 headerStyle">Employee Database Viewer</span>
            </div>
            
        </nav>
    )
};

export default Header;