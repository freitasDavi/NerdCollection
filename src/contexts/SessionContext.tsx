"use client";

import { ReactNode, createContext, useState } from "react";

interface SessionContextProps {
    isLogged: boolean,
    login: () => void,
    logout: () => void,
}

export const SessionContext = createContext<SessionContextProps>({} as SessionContextProps);

export const SessionContextProvider = ({
    children
}: { children: ReactNode }) => {
    const [isLogged, setIsLogged] = useState(false);

    const login = () => {
        setIsLogged(true);
    }

    const logout = () => {
        setIsLogged(false);
    }

    return (
        <SessionContext.Provider
            value={{
                isLogged,
                login,
                logout
            }}
        >
            {children}
        </SessionContext.Provider>
    )
}