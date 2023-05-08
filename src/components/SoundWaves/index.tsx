import { useContext } from 'react'
import { SoundWavesBox } from "./styles";
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi'
import { SoundContext } from "@/contexts/SoundContext";

export default function SoundWaves() {
    const { hasSound, changeSoundStatus } = useContext(SoundContext)
    return (
        <SoundWavesBox className={hasSound === true ? "loader sound" : "loader noSound"}>
            <button onClick={changeSoundStatus}>
                {hasSound === true ? (
                    <BiVolumeFull size={20} className="volume" />
                ) : (
                    <BiVolumeMute size={20} />
                )}
            </button>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
        </SoundWavesBox>
    )
}