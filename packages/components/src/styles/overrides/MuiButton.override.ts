import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { baseBlue, baseWhite } from '../colors';

const override: OverridesStyleRules = {
  containedPrimary: {
    backgroundColor: baseBlue[800],
    color: baseWhite['A400'],
    '&:hover': {
      backgroundColor: baseBlue['A200'],
      cursor: 'pointer'
    }
  },
  textPrimary: {
    color: baseBlue[800],
    backgroundColor: 'transparent',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    '&:hover': {
      color: baseBlue['A100'],
      backgroundColor: baseBlue[50],
      cursor: 'pointer'
    }
  },

  textSecondary: {
    color: `rgba(0, 0, 0, .6)`,
    backgroundColor: 'transparent',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    '&:hover': {
      color: `rgba(0, 0, 0, .5)`,
      backgroundColor: baseWhite[100],
      cursor: 'pointer'
    }
  },
  root: {
    '&$disabled': {
      color: baseWhite[500],
      backgroundColor: baseWhite[50]
    }
  }
};

export default override;
