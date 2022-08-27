import "./sidebar.scss"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Report from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation();
    return (
        <>
        {location.pathname !== "/login" && (

        <div className="sidebar">
            <div className="wrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__list_item active">
                            <LineStyleIcon className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Home</span>
                        </li>
                        <li className="sidebar__list_item">
                            <TimelineIcon className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Analytics</span>
                        </li>
                        <li className="sidebar__list_item">
                            <TrendingUpIcon className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Sales</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__list_item active">
                            <PersonOutlineIcon className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Users</span>
                        </li>
                        <li className="sidebar__list_item">
                            <Link to='/products' className="link">
                                <PlayCircleFilledWhiteIcon className="sidebar__list_item_icon"/>
                                <span className="sidebar__list_item_name">Movies</span>
                            </Link>
                        </li>
                        <li className="sidebar__list_item">
                            <Link to='/lists' className="link">
                                <PlaylistPlayIcon className="sidebar__list_item_icon"/>
                                <span className="sidebar__list_item_name">Lists</span>
                            </Link>
                        </li>
                        <li className="sidebar__list_item">
                            <AssessmentOutlinedIcon className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Report</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__list_item active">
                            <EmailOutlinedIcon className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Mail</span>
                        </li>
                        <li className="sidebar__list_item">
                            <DynamicFeedOutlinedIcon className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Feedback</span>
                        </li>
                        <li className="sidebar__list_item">
                            <ChatBubbleOutlineOutlinedIcon className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Messages</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__list_item active">
                            <WorkOutlineOutlinedIcon className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Mange</span>
                        </li>
                        <li className="sidebar__list_item">
                            <TimelineIcon className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Analytics</span>
                        </li>
                        <li className="sidebar__list_item">
                            <Report className="sidebar__list_item_icon"/>
                            <span className="sidebar__list_item_name">Report</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default Sidebar
