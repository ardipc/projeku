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

import { API, USER } from '../../configs/api';
import moment from 'moment-timezone';

class Access extends React.Component {

  state = {
    user: USER
  }

  render() {
    return (
      <Box style={{margin: '16px 0'}} elevation={3}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Collaborators</TableCell>
                <TableCell>Role</TableCell>
                <TableCell align="right"><Button title="Underconstruction" variant="outlined" color="primary" size="small">Add collaborator</Button></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{this.state.user.email}</TableCell>
                <TableCell>owner</TableCell>
                <TableCell align="right">{moment(this.state.user.created).format('DD/MM/YYYY HH:mm')}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  }

}

export default Access;
