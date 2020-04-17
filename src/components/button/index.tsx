import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { ButtonProps as BaseProps } from '@material-ui/core';
import { ThemeProvider, Theme } from '@material-ui/core/styles';
import useStyles from './styles';

function Base(props: BaseProps) {
  const classes = useStyles(props);
  const { value, className, children } = props;

  return (
    <MuiButton
      variant="contained"
      className={`${classes.buttonSolid} ${classes.buttonSolidSm} ${className}`}
    >
      {value || children}
    </MuiButton>
  );
}

type ButtonProps = {
  theme: Theme;
} & BaseProps;

export default function Button(props: ButtonProps) {
  const { theme, ...baseProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <Base {...baseProps} />
    </ThemeProvider>
  );
}
