import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'


function createData(ticketNo,name, service, status, provider,date) {
  return { ticketNo, name, service, status, provider,date};
}

const rows = [
  createData('CH-45376','Elvis Kent', 'Drilling', 'Pending', 'Elphas Kamau', '11-06-2022'),
  createData('CH-45376', 'Sharlynne Kamau', 'Borehole Rehabilitation', 'Quoted', 'Omondi Jeff', '11-06-2022'),
  createData('CH-45376','Waigwa John', 'Borehole Maintenance', 'Completed', 'Waigwa John', '11-06-2022'),
  createData('CH-45376','Justine Luka', 'Solar Installation', 'In-Progress', 'Elphas Kamau', '11-06-2022'),
  createData('CH-45376','Elphas Driller','Borehole Equipping', 'Completed', 'Omondi Jeff', '11-06-2022'),
];

const makeStyles = (status)=>{
    if (status ==='Completed') 
    {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if (status === 'Pending') {
        return {
            background: 'rgb(255, 0, 0, 0.1)',
            color: 'red',
        }
      }

    else if (status === 'In-Progress') {
          return {
              background: '#20ED12',
              color: '#DF12ED',
          }
        
    }

    else if (status === 'Quoted') {
      return {
          background: '#FFFF8A',
          color: 'red',
      }
    
}
    
    else{
        return {
            background: '#000000',
            color: 'white',
        }
    }

}

export default function BasicTable() {
  return (

    <div className="Table">
        <h3>Recent Tickets</h3>

    <TableContainer component={Paper}
    style={{
        boxShadow: '0px 13px 20px 0px #7D6B94'
    }}
    
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ticket No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="left">Service</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left" >Service Provider</TableCell>
            <TableCell align="left" ></TableCell>
           
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ticketNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ticketNo}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.service}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left">{row.provider}</TableCell>
              <TableCell align="left" className='Details'>{row.date}</TableCell>
              
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}