import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: theme.spacing(12),
  },
  uploadButton: {
    marginTop: theme.spacing(2),
    margin: theme.spacing(2)
  },
  avatarContainer: {
    position: 'relative',
    margin: '0 auto', // Center horizontally
    textAlign: 'center', // Center inline elements
  },
  cameraIcon: {
    position: 'relative',
    bottom: '0',
    right: '0',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default useStyles;
