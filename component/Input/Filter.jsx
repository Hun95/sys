import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useProjectContext } from '../../context/ProjectContext';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export const Filter = () => {
  const {
    menu,
    handleClose,
    handleOpen,
    handleChange,
    open,
    cate,
  } = useProjectContext();
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-controlled-open-select-label'>Category</InputLabel>
        <Select
          labelId='demo-controlled-open-select-label'
          id='demo-controlled-open-select'
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={cate}
          onChange={handleChange}
          defaultValue={cate}
        >
          <MenuItem value='all'>
            <em>All</em>
          </MenuItem>
          {menu.map((menuItem) => {
            return (
              <MenuItem key={menuItem.id} value={menuItem.category}>
                {menuItem.category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
