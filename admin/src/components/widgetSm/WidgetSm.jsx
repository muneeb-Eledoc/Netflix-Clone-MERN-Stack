import "./widgetSm.scss"
import Avatar from '@mui/material/Avatar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "../../axios";
import { useEffect, useState } from "react";

const WidgetSm = () => {
    const [newUsers, setnewUsers] = useState([]);
    const fetchNewUser = async ()=>{
        const res = await axios.get("/users?new=true/",{
            headers: {
           token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzllYmExYTc2YjU4MGM2MTFmYTAzZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY3MzY0MH0.O5A3VxV4aJz82gmCplVNQu6bNJxgpJSa31lakCgUbUA"
           }
         });
        setnewUsers(res.data.users)
    }
    useEffect(() => {
        fetchNewUser()
    }, [])
    return (
        <div className="widgetsm">
            <h3 className="widgetsm__title">
               New Join Members
            </h3>
            <ul className="wedgetsm__list">
                {newUsers.map((user)=>(
                    <li className="wedgetsm__list_item">
                    <Avatar alt="Remy Sharp" src={user.profilePic ? user.profilePic : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"} />
                    <div className="item__info">
                        <span className="item__name">{user.username}</span>
                        <span className="item__profession">{user.email}</span>
                    </div>
                    <button className="action"><VisibilityIcon className="action__icon"/> view</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSm
