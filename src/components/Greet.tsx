type GreetProps = {
    name: String;
    age?: number;
    isLoggedIn: boolean;

}

export const Greet = (props: GreetProps) => {
    const {age= 0} =props
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ?
                        `Welcome to my ${props.name} app and this ${age} years old`
                        : `Welcome My Team`
                }
            </h2>
        </div>
    )
}
