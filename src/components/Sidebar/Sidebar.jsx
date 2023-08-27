import React, { useState } from 'react';
import {
    FaHome,FaClipboardCheck
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { GrDocumentTime } from "react-icons/gr";
import {RiDraftFill} from "react-icons/ri";
import {MdOutlineApproval} from "react-icons/md";
import {ImCross} from "react-icons/im";
import "./Sidebar.css"


const Sidebar = ({children}) => {
    const isOpen = useState(true);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/drafts",
            name:"Drafts",
            icon:<RiDraftFill />
        },
        {
            path:"/pendingapproval",
            name:"Pending Approval",
            icon:<MdOutlineApproval/>
        },
        {
            path:"/rejected",
            name:"Rejected",
            icon:<ImCross/>
        },
        {
            path:"/approved",
            name:"Approved",
            icon:<FaClipboardCheck/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                    <NavLink to="/">
                        <h2 style={{display: isOpen ? "block" : "none"}} className="logo"><GrDocumentTime /> TimeSheet Plus</h2>
                    </NavLink>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;