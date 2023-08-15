import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
  avatarUploader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    gap: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  uploadButton: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
