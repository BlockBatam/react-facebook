import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { MenuList, MenuItem } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Button from '@material-ui/core/Button';
import { Photo, People, Message, Videocam, Pages, Group, ThumbUp, GetApp, NotificationImportant, Event } from '@material-ui/icons'
import wlpr1 from './Components/assets/img/wlpr1.jpg';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      },
      toolbar: theme.mixins.toolbar,
    });

function ClippedDrawer(props) {
    const { classes } = props;
  
    return (
<div className={classes.root}>
 <Drawer
 className={classes.drawer}
 variant="permanent"
 classes={{
   paper: classes.drawerPaper,
 }}
>
{/* style={{height:5}} imageStyle={{ width: '10', height: '10' }}  */}
 <div className={classes.toolbar} />
 <MenuList>
 <Avatar alt=" Amar" src={wlpr1} />
      <NavLink path to="/my newsfeed">
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My NewsFeed" />
        </MenuItem>
        </NavLink>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <People />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Friend" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Message />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Messages" />
        </MenuItem>
        <NavLink path to="/my foto">
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Photo />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Photo" />
        </MenuItem>
        </NavLink>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Videocam />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Videos" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Pages />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Pages" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Group />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Group" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <ThumbUp />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Likes" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <GetApp />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My App" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <NotificationImportant />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Notification" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Event />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Events" />
        </MenuItem>
 </MenuList>
 <Divider />
      <Button variant="outlined" color="primary" className={classes.button}>
        Share On Facebook
      </Button>
</Drawer>
    <main className={classes.content}>
        <div className={classes.toolbar} />
        </main>
</div>
    );
   }
  
ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ClippedDrawer);