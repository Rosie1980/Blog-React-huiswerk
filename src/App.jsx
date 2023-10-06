import './App.css'
import logoMedium from './assets/logo-medium.png'
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import NewBlogPost from "./pages/newBlogPost/NewBlogPost.jsx";
import BlogOverview from "./pages/blogOverview/BlogOverview.jsx";
import BlogPostDetail from "./pages/blogPostDetail/BlogPostDetail.jsx";
import React from "react";
import NotFound from './pages/notFound/NotFound.jsx';
import axios from 'axios';



function App() {

    const navigate = useNavigate();

    async function fetchData() {
        try {
            const result = await axios.get("http://localhost:3000/posts");
                console.log(result.data);
            } catch(e) {
                    console.error(e);
        }
        }
    async function getData() {
        try {
            const result = await axios.get("http://localhost:3000/posts/6");
            console.log(result);
        } catch(e) {
            console.error(e);
        }
    }

    async function newPost() {
        try {
            const result = await axios.post("http://localhost:3000/posts", {
                "title": "De cultuur van Cuba",
                "subtitle": "Een culturele reis door Cuba",
                "content": "In Cuba kan je heerlijk salsa dansen.",
                "created": "2023-09-21T09:30:00Z",
                "author": "Fernando Garbey Trabas",
                "readTime": 2,
                "comments": 10,
                "shares": 4
            });
            console.log(result);
        } catch(e) {
            console.error(e);
        }
    }

    async function removeData() {
        try {
            const result = await axios.delete("http://localhost:3000/posts/19");
            console.log(result);
        } catch(e) {
            console.error(e);
        }
    }
    async function changePost() {
        try {
            const result = await axios.put("http://localhost:3000/posts/17", {
                "title": "test",
                "subtitle": "Deze is veranderd",
                "content": "test",
                "created": "test",
                "author": "test",
                "readTime": 3,
                "comments": 2,
                "shares": 0
            });
            console.log(result);
        } catch(e) {
            console.error(e);
        }
    }


    return (
        <>
            <nav className="main-navigation outer-content-container">
                <div className="inner-nav-container">
                    <button type="button" className="main-navigation-logo-button" onClick={() => navigate('/')}>
                        <img src={logoMedium} alt="Logo that links to home page"/>
                    </button>
                    <button onClick={fetchData}>Alles ophalen!</button>
                    <button onClick={getData}>Specifieke post ophalen!</button>
                    <button onClick={newPost}>Post toevoegen!</button>
                    <button onClick={removeData}>Post verwijderen!</button>
                    <button onClick={changePost}>Post aanpassen!</button>


                    <ul className="main-navigation-links">
                        <li><Link to="/">to Home</Link> </li>
                        <li><Link to="/posts">Alle blogs</Link></li>
                        <li><Link to="/new">Nieuwe blog maken</Link></li>
                    </ul>
                </div>
            </nav>
            <main>
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<NewBlogPost />} />
            <Route path="/posts" element={<BlogOverview />} />
            <Route path="/posts/:id" element={<BlogPostDetail />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            </main>
            <footer className="footer-navigation outer-content-container">
                Blogventure 2023
            </footer>
            </>


    );
}

export default App
