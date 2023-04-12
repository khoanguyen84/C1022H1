function renderPost() {
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (posts) {
            let htmls = posts.map(function (post) {
                return `
                    <tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                        <td class='d-flex justify-content-between'>
                            <i role='button' class='fa fa-trash text-danger'></i>
                            <i role='button' class='fa fa-edit text-success'></i>
                            <i role='button' class='fa fa-eye text-warning'
                                onclick='getPost(${post.id})'
                            ></i>
                        </td>
                    </tr>
                `;
            })

            $('#tbPosts').append(htmls.join(""));
        }
    })
}

function getPost(postId){
    $.ajax({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        success : function(post){
            $('#post-title').append(post.title);
            $('#post-body').append(post.body);
        }
    })
    $('#post-modal').modal('show');
}

renderPost();