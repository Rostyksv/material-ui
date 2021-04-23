import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  alert: {
    margin: '1rem 0 0 0'
  },
  loading: {
    width: '100vw',
    height: '100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    padding: '2rem'
  },
  select: {
    maxWidth: '200px',
    width: '50vw',
    [theme.breakpoints.down('xs')]: {
      margin: '10px',
      maxWidth: '300px',
    },
  },
  inputsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
  },
  gridContainer: {
    padding: '1rem',
  },
  gridItem: {
    height: '0',
    position: 'relative',
    display: 'block',
    paddingTop: '100%',
  },
  media: {
    objectFit: 'cover',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%'
  },
  loadMoreBtnContainer: {
    padding: '1rem',
    display: 'flex', 
    justifyContent: 'center'
  }
}));

export default useStyles;