
// type InputProps={
//     value: string
//     handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
// }

import { InputProps } from "../ts/All.type"

export const Input=({value,handleChange} : InputProps)=>{
    return(
        <div>
            <input type='text' value={value} onChange={handleChange} />
        </div>
    )
}