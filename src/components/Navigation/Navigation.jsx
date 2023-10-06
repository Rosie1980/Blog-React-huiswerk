import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <nav>
            <div className="nav-container">

                <ul>
                    <li><NavLink to="/">to Home</NavLink> </li>
                    <li><NavLink to="/NewBlogPost">Nieuwe Blogs</NavLink></li>
                    <li><NavLink to="/BlogOverview">Blog Overzicht</NavLink></li>
                    <li><NavLink to="/BlogPostDetail">Blogpost Detail</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;