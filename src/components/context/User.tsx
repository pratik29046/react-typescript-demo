import { useContext } from "react";
import { UserContext } from './userContext';

export const User=()=>{

    const userContext = useContext(UserContext)

    const handlelogign =()=>{
        if(userContext){
            userContext.setUser({
                name : 'karan',
                email : 'lZc1A@example.com'
            })
        }
    }
    const handlelogout =()=>{
        if(userContext){
            userContext.setUser(null)
        }
    }

    return(
        <div>
            <button onClick={handlelogign}>Login</button>
            <button onClick={handlelogout}>Logout</button>
            <div>user name is {userContext?.user?.name} </div>
            <div>user email is {userContext?.user?.email}</div>
        </div>
    )



}