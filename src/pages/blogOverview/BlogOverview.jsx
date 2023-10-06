import './BlogOverview.css';
import posts from '../../constants/data.json';
import {Link} from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

function BlogOverview() {

    const [postList, setPostList] = useState([]);
    const [error, toggleError] = useState(false);

    useEffect(()=> {
        void fetchData()
    }, []);

    async function fetchData() {
        toggleError(false);

        try {
            const result = await axios.get("http://localhost:3000/posts");
            console.log(result.data);
            setPostList(result.data);
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <section className="overview-section outer-content-container">
            <div className="inner-content-container">
                {postList.length > 0 && (
                    <>

                <h1>Bekijk alle {posts.length} posts op het platform</h1>
                <ul className="post-list">
                    {posts.map((post) => {
                        return <li key={post.id} className="post-item">
                            <h2 className="post-title"><Link to={`/posts/${post.id}`}>{post.title}</Link> ({post.author})</h2>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </li>
                    })}
                </ul>
                </>
        )}
                {error && <ErrorMessage message="Er is iets misgegaan bij het ophalen van de data. Probeer het opnieuw" />}
            </div>
        </section>
    );
}

export default BlogOverview;