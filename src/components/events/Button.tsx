
// type ButtonProps={
//     // handleclick:()=> void
//     // handleclick: (event :  React.MouseEvent<HTMLButtonElement>)=>void
//     handleclick: (event :  React.MouseEvent<HTMLButtonElement>,id: number)=>void

// }

import { ButtonProps } from "../ts/All.type"
export const Button =(props: ButtonProps) =>{
    return(
        <button onClick={(event)=>props.handleclick(event,1)}>Click</button>
    )
}