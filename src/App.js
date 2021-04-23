import React, { useState, useEffect } from 'react';
import {CircularProgress, Box, CssBaseline } from '@material-ui/core';
import useStyles from './styles.js';
import Alert from '@material-ui/lab/Alert';

import Header from './components/Header';
import Selects from './components/Selects';
import Images from './components/Images';

import { fetchData } from './api/fetchData.js';

const API_KEY = 'JDEwSWYSUAIJINraszwJSSyHzEwcBuvKkBpDoDft';

function App() {
  const [info, setInfo] = useState({});
  const [parameters, setParameters] = useState({rover: 'Curiosity', sol: 0, camera: ''});
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadBtn, setLoadBtn] = useState(false);
  const [noDataWrn, setNoDataWrn] = useState(false);

  const classes = useStyles();

  const handleParameters = (e) => {
    e.preventDefault();
    setParameters({...parameters, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    (async function() {
        setNoDataWrn(false);
        setLoading(true);
        const res = await fetchData({...parameters, page: page});
        console.log('res', res);
        setPhotos(res.photos);
        setLoading(false);
        if(res.photos.length === 0) {
          setNoDataWrn(true);
        }
    })();
  }

  const handleLoadMore = (e) => {
    e.preventDefault();
    setPage((prev) => prev+1);
    (async function() {
      setLoadBtn(true);
      const res = await fetchData({...parameters, page: page});
      console.log('res', res);
      setPhotos([...photos, ...res.photos]);
      setLoadBtn(false);
      if(res.photos.length === 0) {
        setNoDataWrn(true);
      }
  })();
  }

  useEffect(() => {
      (async function() {
        setLoading(true);
        const data = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${parameters.rover}?api_key=${API_KEY}`);
        const res = await data.json();
        console.log(res);
        setInfo(res.rover);
        setLoading(false);
      })();
  }, [parameters.rover]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setNoDataWrn(false);
    }, 3000)
    return () => {
      clearTimeout(timeout);
    }
  }, [noDataWrn])

  if(loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress />
      </Box>
    )
  }
    return (
    <div className="App">
      <CssBaseline />
      <Header />
      {noDataWrn && <Alert severity="error">There was no photo with the selected parameters, try to select others</Alert>}
      <main>
        <div>
          <Selects props={{info, parameters, handleParameters, handleSubmit, loading}}/>
          <Images props={{handleLoadMore, noDataWrn, loadBtn, photos}}/>
        </div>
      </main>
    </div>
  );
}

export default App;
