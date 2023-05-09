import { ReactNode, useState } from "react";
import { createContext } from "react";

interface UserReposContextType {
    userRepos: any[];
    setUserRepos: (userRepos: any[]) => void
}

interface UserReposProviderProps {
    children: ReactNode,
}

export const UserReposContext = createContext({} as UserReposContextType)

export function UserReposProvider({ children }: UserReposProviderProps) {
    const [userRepos, setUserRepos] = useState<any[]>([]);

    return (
        <UserReposContext.Provider value={{
            userRepos,
            setUserRepos
        }}>
            {children}
        </UserReposContext.Provider>
    )
}