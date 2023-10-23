import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const FormSelect = () => {
  return (
    <>
      <FormControl variant="standard" fullWidth >
        <InputLabel id="category-label" style={{ color: 'white' }}>Category</InputLabel>
        <Select labelId="category-label" label="Kategori" style={{ color: 'white' }}>
          <MenuItem >Category 1</MenuItem>
          <MenuItem >Category 2</MenuItem>
          <MenuItem >Category 3</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default FormSelect;
