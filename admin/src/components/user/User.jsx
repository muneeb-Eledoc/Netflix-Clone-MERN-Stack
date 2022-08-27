import "./user.scss"
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";

export const User = () => {
    return (
        <div className='user'>
            <div className="userheader">
                <span className="userheadertitle">Edit User</span>
                <Link to={"/newuser"} className="createUserBtn">Create</Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                       <img src="../56783915435937186.jpg" alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Hanna Becker</span>
                            <span className="userShowUserTitlr">Software En</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                         <span className="userBottomTitle">Account Detail</span>
                         <div className="userShowInfo">
                            <EditIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">hannabacker99</span>
                         </div>
                         <div className="userShowInfo">
                            <EditIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">hannabacker99</span>
                         </div>
                         <div className="userShowInfo">
                            <EditIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">hannabacker99</span>
                         </div>
                         <div className="userShowInfo">
                            <EditIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">hannabacker99</span>
                         </div>
                    </div>
                </div>
                    <div className="userUpdate">
                        <h4 className="userUpdateTitle">Edit User</h4>
                        <form className="updateuserfrom">
                            <div className="userupdateLeft">
                                <div className="updateuseritem">
                                    <label>Username</label>
                                    <input type="text" placeholder="hannabec99"/>
                                </div>
                                <div className="updateuseritem">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Hanna Backer"/>
                                </div>
                                <div className="updateuseritem">
                                    <label>Email</label>
                                    <input type="text" placeholder="hannabec99@gmail.com"/>
                                </div>
                                <div className="updateuseritem">
                                    <label>Phone</label>
                                    <input type="text" placeholder="+1 231 234 4289"/>
                                </div>
                                <div className="updateuseritem">
                                    <label>Address</label>
                                    <input type="text" placeholder="Los Angles"/>
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                 <div className="userUpdateupload">
                                    <img src="../56783915435937186.jpg" alt="" />
                                    <label htmlFor="file">
                                        <EditIcon className="userupdateIcon"/>
                                    </label>
                                    <input type="file" id="file" style={{display: "none"}}/>
                                 </div>
                                 <button className="userUpdateBtn">Update</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}
