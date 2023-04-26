import React, { useState, useEffect } from "react";

function Comment(props) {
    const { postId } = props;
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(async (res) => {
                let data = await res.json();
                setComments(data)
            })
    }, [postId])
    return (
        <div className="container">
            {
                comments.map((comment) => (
                    <div key={comment.id} className="d-flex flex-column fs-6">
                        <p className="fst-italic">{comment.body}</p>
                        <h6 className="text-end fst-italic">{comment.email}</h6>
                    </div>
                ))
            }
        </div>
    )
}

export default Comment;