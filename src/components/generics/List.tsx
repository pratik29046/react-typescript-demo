// type ListProps = {
//     items: string[] | number []
//     onClick: (value: string | number) => void
// }

type ListProps<T>= {
    items: T[]
    onClick: (value: T) => void
}


// export const List = ({ items, onClick }: ListProps) => {    
//     return (
//         <div>
//             <h2>List Of Items</h2>

//             {items.map((item, index) => {
//                 return (
//                     <div key={index} onClick={()=> onClick(item)}>
//                         {item}
//                     </div>
//                 )
//             })}

//         </div>
//     )
// }

export const List = < T extends {id : string}>({ items, onClick }: ListProps<T>) => {
    
    return(
        <div>
              <h2>List Of Items</h2>
             {items.map((item, index) => {
                return (
                    <div key={item.id} onClick={()=> onClick(item)}>
                        {/* {item} */}
                    </div>
                )
            })}
        </div>
    )
}