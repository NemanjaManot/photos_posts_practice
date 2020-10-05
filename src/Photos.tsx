import React from 'react';
import Grid from '@material-ui/core/Grid'

interface PhotosType {
    photos: Array<any> | null
}

function Photos({photos}: PhotosType) {
    return (
        <Grid container spacing={3}>
            {photos && photos.map(photo => {
                return (
                    <Grid item xs={3}>
                        <p key={photo.id}>
                            {photo.title}
                        </p>
                        <img src={photo.thumbnailUrl} alt={photo.title}/>
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default Photos;
