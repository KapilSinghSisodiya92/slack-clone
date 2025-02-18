import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import FiberManualReacordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import InserCommentIcon from "@material-ui/icons/InsertComment"
import db from './firebase'
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import SidebarOption from './Sidebaroption'
import {useStateValue} from './StateProvider'

function Sidebar() {
    const [channels,setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot =>(
            setChannels(snapshot.docs.map(doc =>({
               id:doc.id,
               name:doc.data().name,
            })))
        ))
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Dummy Slack</h2>
                    <h3>
                        <FiberManualReacordIcon />
                    {user?.displayName}
                </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InserCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SidebarOption Icon={AddIcon} id="addChannel" addChannelOption={true} title="Add Channel" />
            {channels.map(channel =>(
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}
        </div>
    );

}
export default Sidebar