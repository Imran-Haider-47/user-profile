import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
  avatarUploader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  input: {
    display: 'none',
  },
  uploadButton: {
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
