import React, { useState } from "react";

function Post() {
    const [posts, setPosts] = useState([])

    return (
        <div className="container">
            <div className="form-group">
                <form className="d-flex align-items-center">
                    <input type="search" className="form-control w-25 me-2"
                        placeholder="keyword"
                    />
                    <button className="btn btn-primary btn-sn">
                        <i className="fa fa-search me-2"></i>
                        Search
                    </button>
                </form>
            </div>
            <div>
                <table className="table table-danger table-striped table-hover" >
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Post;