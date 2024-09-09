import { useState } from "react";
import { AuthUser } from '../ts/All.type';

export const UserDetails=()=>{

    const [user,setUser]=useState<AuthUser>({} as AuthUser) 
      const handleLogin = () => {
        setUser({
            first: 'karan',
            last: 'padwal'
        })
    }
    const handleLogOut = () => {
        setUser({} as AuthUser)
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>User first is  {user.first}</div>
            <div>User last is  {user.last}</div>
        </div>

    )

}