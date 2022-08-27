import "./newUser.scss"

export const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserform">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="John"/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe"/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 32 54 4545"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="active">Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">NO</option>
                    </select>
                </div>
                <div className="btn">
                    <button className="newUserCreate">Create</button>
                </div>
            </form>
        </div>
    )
}
