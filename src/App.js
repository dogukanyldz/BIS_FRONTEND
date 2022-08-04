import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';



function App() {
  const [data,SetData]= React.useState([]);
  const navigate = useNavigate();
  React.useEffect(()=>{
    const fetchData= async () => {
      const response = await axios.get("http://192.168.1.3:5001/api/Employe")
      SetData(response.data)
    }
    fetchData();
    },[])

    const clickevent=()=>{
      navigate('/');
    }
  return (
    <><Box sx={{ flexGrow: 1 }}>
      <AppBar color='inherit' position="static">
        <Toolbar>
          <IconButton
            onClick={clickevent}
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LogoutIcon style={{color:"red"}} />
          </IconButton >
        </Toolbar>
      </AppBar>
    </Box><TableContainer component={Paper}>
        <Table sx={{ minWidth: 850,minHeight:350 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{color: 'red'}}> Adı</TableCell>
              <TableCell style={{color: 'red'}} align="right">Soyadı</TableCell>
              <TableCell style={{color: 'red'}} align="right">Tc</TableCell>
              <TableCell style={{color: 'red'}}align="right">Maaş</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.tc}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell align="right">{row.surname}</TableCell>
                <TableCell align="right">{row.tc}</TableCell>
                <TableCell align="right">{row.maas}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></>
  );
}

export default App;
