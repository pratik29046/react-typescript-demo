// type Person={
//     name:{
//         first: String
//         last: String
//     }
// }

import { PersonType } from './ts/All.type';

export const Person=(props : PersonType)=>{

    return <div>
        { 
           <h1> My Name is {props.name.first} {props.name.last} </h1> 
        }
    </div>
}