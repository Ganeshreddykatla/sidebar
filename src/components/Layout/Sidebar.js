import React from "react";

import logo from "../../assets/images/tmil-logo.png";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import "../../assets/css/Layout.css";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
 

   
  return (
    <List
    sx={{ width: '100%', fontSize: '13px', p: 0, m: 0, maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    // subheader={
    //   <ListSubheader component="div" id="nested-list-subheader">
    //   </ListSubheader>
    // }
  >
    <ListItemButton >
      <ListItemIcon>
        <DashboardCustomizeIcon/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <QuizOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Enquiry" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DashboardCustomizeIcon/>
      </ListItemIcon>
      <ListItemText primary="Quotation" />
    </ListItemButton>  <ListItemButton>
      <ListItemIcon>
        <DashboardCustomizeIcon/>
      </ListItemIcon>
      <ListItemText primary="Contract" />
    </ListItemButton>  <ListItemButton>
      <ListItemIcon>
        <DashboardCustomizeIcon/>
      </ListItemIcon>
      <ListItemText primary="Pre Alert" />
    </ListItemButton>
    <Typography sx={{ ml: 2, mt: 3, fontSize: '12px'}} > 
             Operations
            </Typography>
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Berth 13 Import" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText sx={{fontSize: '11px'}} primary="Spot Customer" />
        </ListItemButton>
        </Link>
      </List>
      <List component="div" disablePadding>
      <Link to='/longterm-customers' style={{textDecoration: 'none', color: 'black'}}>
        <ListItemButton sx={{ pl: 4 }}>
    
          <ListItemText sx={{fontSize: '11px'}} primary="Long Term Customers" />
        </ListItemButton>
        </Link>
      </List>
    </Collapse>
  </List>  
  );
};


export default Sidebar;
