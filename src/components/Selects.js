import React from 'react'
import {InputLabel, Select, MenuItem, Box, Typography, TextField, Button, Container, CircularProgress } from '@material-ui/core';
import useStyles from '../styles.js'


function Selects({ props }) {
    const {info, parameters, handleParameters, handleSubmit, loading} = props;

    const classes = useStyles();

    if(loading) {
        return (
          <Box className={classes.loading}>
            <CircularProgress />
          </Box>
        )
    }

    return (
            <Container className={classes.container}  maxWidth='md'>
                <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                    Mars Rover Photos
                </Typography>
                <Typography style={{textIndent:'2rem', whiteSpace: 'break-spaces'}} variant='h5' color='textSecondary' paragraph>
                    This website is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars.
                    Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. 
                    A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000.
                </Typography>
                <form onSubmit={handleSubmit}>
                <Box className={classes.inputsContainer}>
                    <div>
                    <InputLabel id="label">Rover</InputLabel>
                    <Select className={classes.select} onChange={handleParameters} labelId="label" id="select" name='rover' value={parameters.rover}>
                        <MenuItem value="Curiosity">Curiosity</MenuItem>
                        <MenuItem value="Opportunity">Opportunity</MenuItem>
                        <MenuItem value="Spirit">Spirit</MenuItem>
                    </Select>
                    </div>
                    <div>
                    <InputLabel id="label">Cameras</InputLabel>
                    <Select className={classes.select} onChange={handleParameters} labelId="label" id="select" name='camera' value={parameters.camera}>
                        {info.cameras.map((camera, i) => {
                            const {name, full_name} = camera;
                            return (
                            <MenuItem key={i} value={name}>{full_name}</MenuItem>
                            )
                        })}
                    </Select>
                    </div>
                    <div>
                    <TextField
                        className={classes.select}
                        type='number'
                        name='sol'
                        onChange={handleParameters}
                        id="standard-basic" 
                        label={`Sol (max - ${info.max_sol})`}
                        inputProps={{ min: 0, max: info.max_sol }}
                    />
                    </div>
                    </Box>
                    <Box display="flex" justifyContent='center' marginTop='1.5rem'>
                    <Button type='submit' variant="outlined" color="primary">
                        Get pics
                    </Button>
                    </Box>
                </form>
            </Container>
    )
}

export default Selects;
