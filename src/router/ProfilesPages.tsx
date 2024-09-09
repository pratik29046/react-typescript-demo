import React from 'react';
import { Link } from 'react-router-dom';


type Profile = {
    age: number;
    city: string;
};

type ProfileData = {
    [key: string]: Profile;
};

export const ProfilePages: React.FC = () => {
    const profiles = ['karan', 'karan1', 'karan2'];
    const myData =[1,2,3,4,5];
    const profileData :ProfileData ={
        karan: { age: 30, city: 'Delhi' },
        karan1: { age: 25, city: 'Mumbai' },
        karan2: { age: 35, city: 'Bangalore' },
    };

    return (
        <div className="flex flex-col gap-2">
            {profiles.map((profile, index) => (
                <div key={`${profile}-${index}`}>
                    <Link to={`/profiles/${profile}`} state={{ profileData: profileData[profile], myData }}>This is my profile and my name is {profile}</Link>
                </div>
            ))}
            {/* <Outlet /> */}
         </div>
    );
};
