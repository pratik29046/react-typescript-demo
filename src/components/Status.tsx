type statusProps={
    // status: string
    status : 'loading' | 'success' | 'error'
    
}

export const Status =(props: statusProps)=>{
    let message
    if(props.status === 'loading'){
        message ='Loading ....';
    }else if (props.status === 'success') {
        message ='Data fetched successfully!'
    }else if (props.status==='error'){
        message ='Error fatching data'
    }
    return (
        <div>
             <h2>Status is {message}</h2>
        </div>
    )

}