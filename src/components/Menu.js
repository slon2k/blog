import React from 'react'
import {Link} from "react-router-dom";

const Menu = ({posts}) => {
    const links = posts.map(post => <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>)

    return(
        <ul>
            <li><Link to={'/'}>Blog</Link></li>
            {links}
        </ul>
    )
}

export default Menu