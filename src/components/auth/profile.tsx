export type ProfileProps = {
  name : string,
      
}

export const profile =({name} : ProfileProps)=>{
    return(
        <div>
            <h1>This Profile Component. Name is {name} </h1>
        </div>
    )
}