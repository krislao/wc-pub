import theme from '../index';

export default {
  '.MuiFilledInput-root': {
    border: '1px solid',
    borderRadius: 2,
    borderColor: theme.Palette.black['50'],
    backgroundColor: '#ffffff',
    fontSize: theme.typography.fontSize,
    '&:hover': {
      borderColor: theme.Palette.black['90'],
      backgroundColor: '#ffffff',
    },
    '&.Mui-focused': {
      borderColor: theme.Palette.primary['600'],
      backgroundColor: '#ffffff',
      borderWidth: 1,
    },
    '&.Mui-error': {
      borderColor: theme.Palette.error.main,
      backgroundColor: '#ffffff',
      borderWidth: 2,
    },
    '&.Mui-disabled': {
      backgroundColor: '#ffffff',
      borderColor: theme.Palette.black['30'],
      color: theme.Palette.black['30'],
    },
  },
  '.MuiInputLabel-filled': {
    fontSize: '1.4rem',
    color: theme.Palette.black['90'],
    '&.MuiFormLabel-root.Mui-error': {
      color: theme.Palette.black['90'],
    },
    '&.MuiInputLabel-shrink': {
      transform: 'translate(12px, 10px) scale(1)',
    },
  },
  '.MuiFormHelperText-contained': {
    fontSize: '1.2rem',
  },
};
