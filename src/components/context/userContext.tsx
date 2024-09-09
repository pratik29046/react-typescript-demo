import React, { createContext, ReactNode, useState } from "react";

// Define the type for the user
export type AuthUserContextType = {
    name: string;
    email: string;
};

// Define the type for the context value
type UserContextType = {
    user: AuthUserContextType | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUserContextType | null>>;
};

// Define the type for the provider's props
type UserContextProviderProps = {
    children: ReactNode;
};

// Create the context with a default value of undefined
export const UserContext = createContext<UserContextType | null>(null);

// Define the provider component
export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<AuthUserContextType | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
