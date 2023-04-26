import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";
import Comment from './Comment';

function PostDetail() {
    const [postDetail, setPostDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const { postId } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(async (res) => {
                let post = await res.json();
                setPostDetail(post);
                setLoading(false);
            })
    }, [postId])
    return (
        <>
            <div className="container">
                <Link to={"/list-post"} className="btn btn-warning">
                    <i className="fa fa-arrow-left me-2"></i>
                    Back
                </Link>
                {
                    loading ? <Spinner /> : (
                        <>
                            <h3>{postDetail.title}</h3>
                            <p>{postDetail.body}</p>
                        </>
                    )
                }
            </div>
            <div className="container border-top border-secondary">
                <h6>Comments</h6>
                <Comment postId={postId} />
            </div>
        </>
    )
}

export default PostDetail;