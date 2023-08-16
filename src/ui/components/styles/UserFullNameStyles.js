import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
  fullNameContainer: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
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
    marginTop: theme.spacing(2), // Adjust the margin value as needed
    backgroundColor: 'lightgray', // Set background color to lightgray
    color: 'white', // Set text color to white
    '&:hover': {
      backgroundColor: 'darkgray', // Change background color on hover if desired
    },
  },
}));

export default useStyles;
