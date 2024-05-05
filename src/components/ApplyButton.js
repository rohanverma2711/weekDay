import React from "react";
import { Button } from "@mui/material";


const ApplyButton = ({ jdLink }) => {
  return (
    <Button href={jdLink} variant="contained" sx={{backgroundColor:"#54efc3", color:'black', fontWeight:'580', fontSize:'16px'}} fullWidth>
       ⚡ Easy Apply
    </Button>
  );
};

export default ApplyButton;