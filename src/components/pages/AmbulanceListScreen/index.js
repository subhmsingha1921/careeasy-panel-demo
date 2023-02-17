import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";

const AmbulanceListScreen = () => {
  return (
    <div className="flex flex-1">
      <div className="basis-1/6 bg-red-400 flex justify-center items-center">
        <h1>SIDEBAR</h1>
      </div>
      <div className="basis-5/6 p-6">
        <OutlinedInput
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Search drivers, ambulances.."
          style={{
            borderRadius: 8,
          }}
        />
      </div>
    </div>
  );
};

export default AmbulanceListScreen;
