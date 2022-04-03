import './Post.css'
function Post({ post }){    
    return(  
            <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.message}</p>
            </li>
    )
}
export { Post }
