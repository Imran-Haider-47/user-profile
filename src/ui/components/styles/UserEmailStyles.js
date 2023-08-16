import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
  emailContainer: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'lightpink', // Add your desired background color here
    padding: theme.spacing(2), // Add padding for spacing
    
  },
}));

export default useStyles;
