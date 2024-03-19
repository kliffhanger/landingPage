import React, { useState } from 'react';

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div id="header-navigation" className={`navbar-nav-wrapper ${isExpanded ? 'show' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">News</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Our Team</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Make Enquiry</a></li>
                    </ul>
                </div>
                <div className="header__cta">
                    <a href="#" className="btn btn-outline-black btn--arrow-icon">
                        Contact us
                        <span className="ham-icon">
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 8L1 8M19 8L12.25 15M19 8L12.25 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" onClick={handleToggle} aria-expanded={isExpanded ? 'true' : 'false'} aria-label="Toggle navigation">
                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line className="top-line" y1="0.5" x2="22" y2="0.5" stroke="#221F20" />
                        <line className="middle-line" x1="2" y1="7.5" x2="20" y2="7.5" stroke="#221F20" />
                        <line className="bottom-line" y1="14.5" x2="22" y2="14.5" stroke="#221F20" />
                    </svg>
                </button>
            </nav>
        </header>
    );
};

export default Header;
