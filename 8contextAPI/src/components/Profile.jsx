import React, {use, useContext} from 'react'
import UserContext from '../context/UserConetxt'

function Profile() {
    const {user} = useContext(UserContext)
  
    if (!user) return <div>please login</div>

    return <div>Welcome to {user.username}</div>
}

export default Profile
