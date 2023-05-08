import { SoundContext } from '@/contexts/SoundContext';
import { useState, useContext, useRef, useEffect } from 'react';


export default function Audio() {
    const { hasSound } = useContext(SoundContext);
    const [audioActive, setAudioActive] = useState<boolean>(true);

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        setAudioActive(hasSound)

        const audio = audioRef.current!;

        if (audioActive === true) {
            if (audio) {
                audio.loop = true;
                audio.volume = 0.1;
                audio.play();
            }
        } else {
            audio.pause();
        }

    }, [hasSound, audioActive])

    return (
        <audio ref={audioRef} src="/lofi.mp3" />
    )
}