import React from 'react'

const PostPage = ({id, loadPost, post}) => {

    if (post !== undefined) {
        return(
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )
    } else {
        loadPost(id);
        return (
            <div>Loading ...</div>
        )
    }
}

export default PostPage