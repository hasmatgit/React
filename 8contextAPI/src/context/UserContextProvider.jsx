import React from "react";
import UserConetxt from "./UserConetxt";

const UserConetxtProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserConetxt.Provider value={{user, setUser}}>
        {children}
        </UserConetxt.Provider>
    )
}

export default UserConetxtProvider