import Link from "next/link";
import { FooterContainer } from "./styles";

import { FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Footer() {
    return (
        <FooterContainer>
            <div>
                <span>Find me:</span>
            </div>
            <Link href={"/"}>
                <FiLinkedin size={20} />
            </Link>
            <Link href={"/"}>
                <FiGithub size={20} />
            </Link>
            <div>
                <span>03/05/2023</span>
            </div>
        </FooterContainer>
    )
}