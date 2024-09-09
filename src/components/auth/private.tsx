import { Login } from "../auth/Login";
import { ProfileProps } from "../auth/profile";

type privatePros={
    isLogining:boolean,
    component : React.ComponentType<ProfileProps>
}

export const Private =({isLogining,component:Component}: privatePros)=>{
    if(isLogining){
        return <Component name='Pratik'/>
    }else{
        return <Login/>
    }

}