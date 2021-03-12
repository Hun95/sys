import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';

const PurpleSwitch = withStyles({
  switchBase: {
    color: 'white',

    '&$checked': {
      color: '#003D8D',
    },

    '&$checked + $track': {
      backgroundColor: '#003D8D',
    },
  },
  checked: {},
  track: {},
})(Switch);

export const CustomSwitch = ({ onChange, defaultValue, disabled, checked }) => {
  return (
    <PurpleSwitch
      onChange={onChange}
      defaultValue={defaultValue}
      disabled={disabled}
      checked={checked}
    />
  );
};
