import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  branches: any;
  value: string;
  handleChange: (e: ChangeEvent<any>) => any;
}

function BranchList({ branches, value, handleChange }: Props) {
  return (
    <TextField
      select
      value={value}
      onChange={handleChange}
      label="Selecione Sua Branch"
      fullWidth
    >
      <MenuItem key={0} value={"0"} disabled>
        Selecione sua branch
      </MenuItem>
      {branches?.map((branch: any) => (
        <MenuItem key={branch?.commit?.sha} value={branch?.commit?.sha}>
          {branch.name}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default BranchList;
