import { Component, ReactNode } from "react";

type counterProps = {
 
    message : string
}

type CounterState = {
    count : number
}

export class Counter extends Component <counterProps,CounterState>{

    state = {
        count : 0
    }

    hadleclick =()=>{
        this.setState((prevState)=>({count : prevState.count + 1}))
    }

    render(): ReactNode {
        return(
            <div>
                <button onClick={this.hadleclick}> Increment </button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}