import React from 'react';
import Grid from '@material-ui/core/Grid'

interface PostsType {
    posts: Array<any> | null
}

function Posts({posts}: PostsType) {
    return (
        <Grid container>
            {posts && posts.map(post => {
                return (
                    <Grid item alignContent="center" alignItems="center">
                        <p key={post.id}>
                             {post.title}
                        </p>
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default Posts;
