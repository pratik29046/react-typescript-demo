export type Name = {
    first: string;
    last: string;
}

export type PersonType = {
    name: Name;
};

// export type PersonType = {
//     name: {
//         first: string;
//         last: string;
//     };
// };

export type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type ButtonProps = {
    // handleclick:()=> void
    // handleclick: (event :  React.MouseEvent<HTMLButtonElement>)=>void
    handleclick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void

}

export type AuthUser={
    first: string;
    last: string;
};


type notificationSendData={
    uName: string,
    uMessage: string,
    uID: number
}


export type UserAuth = {
    first: string;
    email: string;
}
