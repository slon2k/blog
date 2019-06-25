import React from 'react'

const PostPage = ({id}) => {
    console.log(id);
    return(
        <div>
            <h3>Post {id}</h3>
        </div>
    )
}

export default PostPage