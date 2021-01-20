import React from 'react'
import {
  Box,
  Paper,
  Button
} from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Access extends React.Component {

  render() {
    return (
      <Box style={{margin: '16px 0'}} elevation={3}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Collaborators</TableCell>
                <TableCell>Role</TableCell>
                <TableCell align="right"><Button variant="outlined" color="primary" size="small">Add collaborator</Button></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>ardiansyah3ber@gmail.com</TableCell>
                <TableCell>owner</TableCell>
                <TableCell align="right">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  }

}

export default Access;
