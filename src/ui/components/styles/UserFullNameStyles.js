import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
  fullNameContainer: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: theme.spacing(4), // Add margin above the button
  },
}));

export default useStyles;
