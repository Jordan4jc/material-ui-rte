import React, { Fragment } from 'react'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

const BLOCK_TYPES = [
  {label: 'Paragraph', variant: 'body1', style: 'paragraph'},
  {label: 'Blockquote', variant: 'body1', style: 'blockquote'},
  {label: 'H1', variant: 'h1', style: 'header-one'},
  {label: 'H2', variant: 'h2', style: 'header-two'},
  {label: 'H3', variant: 'h3', style: 'header-three'},
  {label: 'H4', variant: 'h4', style: 'header-four'},
  {label: 'H5', variant: 'h5', style: 'header-five'},
  {label: 'H6', variant: 'h6', style: 'header-six'}
];

const BlockStyleControl = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectValue, setSelectValue] = React.useState({label: 'Paragraph', variant: 'body1', style: 'paragraph'});

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <FormControl style={{ width: "120px" }}>
      <Input
        onClick={handleClick}
        value={selectValue.label}
        endAdornment={<InputAdornment position="end"><ArrowDropDownIcon style={{ color: "rgba(0, 0, 0, 0.54)" }} /></InputAdornment>}
        inputProps={{
          readOnly: true
        }}
      />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {BLOCK_TYPES.map(type => (
          <MenuItem key={type.style} onClick={() => {
            setSelectValue(type)
            props.onChange(type.style)
            handleClose()
          }}><Typography variant={type.variant}>{type.label}</Typography></MenuItem>
        ))}
      </Menu>
    </FormControl>
  );
};

export default BlockStyleControl