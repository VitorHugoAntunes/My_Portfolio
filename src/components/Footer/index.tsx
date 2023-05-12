import { useState, useEffect } from 'react'
import Link from "next/link";
import { FooterContainer } from "./styles";

import { FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Footer() {
    const [currentDate, setCurrentDate] = useState<string>("");
    const [currentHour, setCurrenHour] = useState<number>(0);
    const [currentMinutes, setCurrentMinutes] = useState<number>(0);

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(new Date().toLocaleDateString())
            setCurrenHour(new Date().getHours())
            setCurrentMinutes(new Date().getMinutes())
        }, 1000)
    }, [])
    return (
        <FooterContainer>
            <div>
                <span>Find me:</span>
            </div>
            <Link href={"https://www.linkedin.com/in/vitor-hugo-antunes-passos-59151018a/"} target="_blank">
                <FiLinkedin size={20} />
            </Link>
            <Link href={"https://github.com/VitorHugoAntunes"} target="_blank">
                <FiGithub size={20} />
            </Link>
            <div>
                <Link href={"https://www.youtube.com/watch?v=3SzGfRGSUcM"} target={"_blank"}>What song is playing?</Link>
                <div />
                <span>{currentHour}:{currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} {currentDate}</span>
            </div>
        </FooterContainer>
    )
}