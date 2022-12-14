import { CookieTwoTone } from "@mui/icons-material";
import { Autocomplete, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardHeader from '../../components/DashboardHeader';
import { useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [getTerminal, setTerminal] = useState([]);
  const [getGate, setGate] = useState([]);
  const [terminalinputValue, setTerminalInputValue] = useState('');
  const [gateinputValue, setGateInputValue] = useState('');
  useEffect(() => {
    axios.get(
        "/api/v1/gates/disabledgates"
      )
      .then((response) => {
        // console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const terminal = [...new Set(data.map((item) => item.TERMINAL_NUMBER))];
  // console.log(terminal);

  // console.log(data);

  const handleTerminal = (event, value) => {
    let gates = data.filter((gate) => gate.TERMINAL_NUMBER === value);
    gates = [...new Set(gates.map((item) => item.GATE_NUMBER))];
    gates.sort();

    setGate(gates);
  };

  const navigate = useNavigate();
  const enableGate = async (e) => {
    e.preventDefault();
    const abc = await axios.patch(`/api/v1/gates/enablegate/${terminalinputValue}/${gateinputValue}`);
    console.log(abc);
    navigate("/");
}

  return (
    <Container>
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="Home" />
            <form onSubmit={ enableGate }>
                <div className='dashboard-content-dropdown'>
                    {/* <table> */}
                        <div className='dropdown'>
                            <td><label>Select Terminal :</label></td>
                            {/* <Typography>Dependent Select Field</Typography> */}
                            <Autocomplete style={{width: '120px'}}
                              //value={value}
                              onChange={(event, value) => handleTerminal(event, value)}
                              inputValue={terminalinputValue}
                              onInputChange={(event, newInputValue) => {
                                setTerminalInputValue(newInputValue);
                              }}
                              id="terminal"
                              getOptionLabel={(terminal) => `${terminal}`}
                              options={terminal}
                              isOptionEqualToValue={(option, value) => option.GATE_NUMBER === value.GATE_NUMBER}
                              noOptionsText={"No Available Data"}
                              renderOption={(props, terminal) => (
                                <Box component="li" {...props} key={terminal} value={getTerminal}>
                                  {terminal}
                                </Box>
                              )}
                              renderInput={(params) => <TextField {...params} label="Terminal" />}
                            />
                        </div>
                        <div className='dropdown'>
                            <td><label>Select gate to be enabled :</label></td>
                            <Autocomplete style={{width: '100px'}}
                              inputValue={gateinputValue}
                              onInputChange={(event, newInputValue) => {
                                setGateInputValue(newInputValue);
                              }}
                              id="gate"
                              getOptionLabel={(getGate) => `${getGate}`}
                              options={getGate}
                              isOptionEqualToValue={(option, value) => option.GATE_NUMBER === value.GATE_NUMBER}
                              noOptionsText={"No Available User"}
                              renderOption={(props, getGate) => (
                                <Box component="li" {...props} key={getGate}>
                                  {getGate}
                                </Box>
                              )}
                              renderInput={(params) => <TextField {...params} label="Gate" />}
                            />
                        </div>
                        <div>
                        <button className='dashbord-btn' onClick={ enableGate }> Enable </button>
                        {/* <button className='dashbord-btn' > Cancel </button> */}
                    </div>
                    {/* </table> */}
                </div>
            </form>
        </div>
                        {/* <Autocomplete /> */}
    </Container>
  );
}

export default App;

/* -----------------------------------------------------------
import React, { useEffect, useState } from "react";

import DropdownList from '../../utils/dropdown/Dropdowndup';
import axios from "axios";

const DropdownSmart = () => {
  const [content, setContents] = useState([]);

  useEffect(() => {
    axios.get("/gates/GroupGates").then((res) => {
      //   let a = res.data.df;
      //   setContents(a);
      console.log(res.data);
      setContents(res.data);
    });
  }, []);

  return <DropdownList content={content}></DropdownList>;
};

export default DropdownSmart;
---------------------------------------------------------------------------------------*/

/*import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import Dropdown from '../../utils/dropdown/Dropdown';
import '../styles.css';

function EnableGate() {
    
    
    const options = [
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "red", label: "Red" },
        { value: "yellow", label: "Yellow" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "purple", label: "Purple" },
        { value: "grey", label: "Grey" }
      ];
      
    return(
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="Home" />
           
            <div className='dashboard-content-dropdown'>
                <table>
                <tr><div className='dropdown'>
                    <td><label>Select Terminal :</label></td>
                    <Dropdown
                        isSearchable
                        isSingle
                        placeHolder="Select Terminal"
                        options={options}
                        onChange={(value) => console.log(value)}
                    /> 
                </div></tr>
                <tr><div className='dropdown'>
                    <td><label>Select gates to be enabled :</label></td>
                    <Dropdown
                        isSearchable
                        isMulti
                        placeHolder="Select One/ more gates"
                        options={options}
                        onChange={(value) => console.log(value)}
                    />
                </div></tr>
                <div>
                    <button className='dashbord-btn' > Update </button>
                    <button className='dashbord-btn' > Cancel </button>
                </div>
                </table>
            </div>
           
        </div>
    )
}

export default EnableGate;*/