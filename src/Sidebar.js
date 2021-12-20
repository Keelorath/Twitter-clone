import React from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';




function Sidebar(){
    return(
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
            <SidebarOption Icon={MessageIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListIcon} text="Lists"/>
            <SidebarOption Icon={PersonIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>
            
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>

    )
}

export default Sidebar;