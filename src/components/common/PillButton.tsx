'use client';

import React from 'react';
import { Button, ButtonProps, Box } from '@mui/material';

type PillButtonProps = Omit<ButtonProps, 'startIcon' | 'endIcon'> & {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
};

export default function PillButton({
  children,
  icon,
  iconPosition = 'right',
  iconSize = 34,
  sx,
  ...props
}: PillButtonProps) {
  const iconElement = icon ? (
    <Box
      sx={{
        width: iconSize,
        height: iconSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,

        '& img, & svg': {
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'contain',
        },
      }}
    >
      {icon}
    </Box>
  ): null;

  return (
    <Button
      variant="contained"
      {...props}
      sx={{
        minWidth: icon ? 154 : 'auto',
        height: 52,
        px: '10px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',

        borderRadius: '999999px',

        background: `
          radial-gradient(
            27.92% 100% at 50% 0%,
            rgba(255, 255, 255, 0.24) 0%,
            rgba(255, 255, 255, 0) 100%
          ),
          linear-gradient(
            229.52deg,
            #02ADF7 -18.98%,
            #26E05A 121.29%
          )
        `,

        boxShadow:
          '0px 1px 2px -1px rgba(146, 146, 146, 0.4), inset 0px 1px 0px rgba(255, 255, 255, 0.16)',

        '&:hover': {
          background: `
            linear-gradient(
              229.52deg,
              #02ADF7 -18.98%,
              #26E05A 121.29%
            )
          `,
          boxShadow: '0px 4px 10px rgba(38, 224, 90, 0.25)',
        },

        ...sx,
      }}
    >
      {iconPosition === 'right' && iconElement}

        {children}

      {iconPosition === 'left' && iconElement}
    </Button>
  );
}