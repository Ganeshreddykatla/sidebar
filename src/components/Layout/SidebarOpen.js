import React from "react";

import logo from "../../assets/images/tmil-logo.png";

import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../../assets/css/Layout.css"; 


const menuItems = [
  {
    menu: "Dashboard",
    path: "/",
    icon: <DashboardCustomizeOutlinedIcon />,
    subMenu: [
      {
        menu: "Spot Customers",
        path: "/birth13-import/spot-customers",
        icon: <ImportExportOutlinedIcon />,
      },
      {
        menu: "Contract Customers",
        path: "/birth13-import/contract-customers",
        icon: <ImportExportOutlinedIcon />,
      },
    ],
  },

  {
    menu: "Birth 13 Import",
    path: "/birth13-import",
    icon: <ImportExportOutlinedIcon />,
    subMenu: [
      {
        menu: "Spot Customers",
        path: "/birth13-import/spot-customers",
        icon: <ImportExportOutlinedIcon />,
      },
      {
        menu: "Contract Customers",
        path: "/birth13-import/contract-customers",
        icon: <ImportExportOutlinedIcon />,
      },
    ],
  },
];

const SidebarOpen = () => {
    const [open, setOpen] = React.useState(false)
  return (
    <div className="sidebarOpen">
      <div className="sidebarOpen_logo">
        <img src={logo} />
      </div>
      <div className="sidebarOpen_list">
        {menuItems.map((item) => {
          return (
            <ul>
              <li>
                <span>
                <a href="#">
                   {item.icon}
                  {/* <span className="links_name">{item.menu}</span> */}
                </a>
                </span>
                <span className="tooltip">{item.menu}</span> 
                { (item.subMenu?.length>0 && !open ) ? <ArrowRightIcon onClick={()=>setOpen(!open)}/> : <ArrowDropDownIcon onClick={()=>setOpen(!open)}/>} 
                
                <div className="sidebarOpen_submenu">
                 {
                   open ? item.subMenu?.map( (val) => {
                       return (

                         <ul>
                             <li> <span>{val.menu}</span></li>
                           </ul>
                          
                       )
                   }) : null
                 }
                 </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};


export default SidebarOpen;
