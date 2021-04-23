import React from 'react'
import {Box, Button, Card, CardMedia, Grid, Container } from '@material-ui/core';
import useStyles from '../styles.js'
import Alert from '@material-ui/lab/Alert';

function Images({props}) {
    const {handleLoadMore, photos, loadBtn, noDataWrn} = props;
    const classes = useStyles();

    return (
        <Container className={classes.gridContainer}  maxWidth='xl'>
            <Grid container spacing={4} justify="center">
                {photos.map((photo, i) => {
                return (  
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.gridItem} >
                        <CardMedia
                            className={classes.media}
                            image={photo.img_src}
                            title="space"
                        />
                        </Card>
                    </Grid>
                )
                })}
            </Grid>
            {noDataWrn && photos.length > 0 && <Alert className={classes.alert} severity="error">There are no more photos with such parameters...</Alert>}
            {photos && photos.length >= 25 && <Box className={classes.loadMoreBtnContainer}>
                <Button variant="contained" color="primary" onClick={handleLoadMore}>{loadBtn ? 'Loading...' : 'Load more'}</Button>
            </Box>}
        </Container>
    )
}

export default Images;
