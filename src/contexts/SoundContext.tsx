import { ReactNode, RefObject, useRef, useState } from "react";
import { createContext } from "react";

interface SoundContextType {
    hasSound: boolean;
    changeSoundStatus: () => void
}

interface SoundProviderProps {
    children: ReactNode,
}

export const SoundContext = createContext({} as SoundContextType)

export function SoundProvider({ children }: SoundProviderProps) {
    const [hasSound, setHasSound] = useState<boolean>(true);

    function changeSoundStatus() {
        hasSound === true ? setHasSound(false) : setHasSound(true)
    }

    return (
        <SoundContext.Provider value={{
            hasSound,
            changeSoundStatus
        }}>
            {children}
        </SoundContext.Provider>
    )
}