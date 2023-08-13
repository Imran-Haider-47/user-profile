import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  joiningDateContainer: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default useStyles;
