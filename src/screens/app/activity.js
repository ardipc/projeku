import React from 'react'
import {
  Box,
} from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';

class Activity extends React.Component {

  render() {
    return (
      <Box style={{margin: '16px 0'}}>
        <List>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="ardiansyah3ber@gmail.com: Deployed" secondary="Jan 9, 2014 09:50 AM" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="ardiansyah3ber@gmail.com: Build succeded" secondary="Jan 9, 2014 09:50 AM" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="ardiansyah3ber@gmail.com: Build succeded" secondary="Jan 9, 2014 09:50 AM" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="ardiansyah3ber@gmail.com: Build succeded" secondary="Jan 9, 2014 09:50 AM" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="ardiansyah3ber@gmail.com: Build succeded" secondary="Jan 9, 2014 09:50 AM" />
          </ListItem>

        </List>
      </Box>
    )
  }

}

export default Activity;
