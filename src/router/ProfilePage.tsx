import { useLocation, useParams } from 'react-router-dom';


type Profile = {
    age: number;
    city: string;
};

type State = {
    profileData?: Profile;
    myData?: number[];
};

export default function ProfilePage() {
    const param = useParams();
    console.log(param)
    const location = useLocation();
    const state = location.state as State; // Cast state to our defined type
    const { profileData, myData } = state;
    console.log (profileData, myData)
    return (
        <div>
            <h1>Profile Page {param.profileName}</h1>
            {profileData ? (
                <div>
                    <p>Age: {profileData.age}</p>
                    <p>City: {profileData.city}</p>
                </div>
            ) : (
                <p>No profile data available</p>
            )}
            {myData ? (
                <div>
                    <p>My Data: {myData.join(', ')}</p>
                </div>
            ) : (
                <p>No additional data available</p>
            )}
        </div>
    )
}