import { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderContainer } from "./styles";

export default function Header() {
    const router = useRouter();
    const currentURL = router.asPath;

    return (
        <HeaderContainer>
            <div className="navigationDiv">
                <Link href={'/'} className={currentURL.endsWith("/") ? "selected" : ""}>
                    <div>
                        <span>Home</span>
                    </div>
                </Link>
                <Link href={'/about'} className={currentURL.endsWith("/about") ? "selected" : ""}>
                    <div>
                        <span>About me</span>
                    </div>
                </Link>
                <Link href={'/projects'} className={currentURL.endsWith("/projects") ? "selected" : ""}>
                    <div>
                        <span>Projects</span>
                    </div>
                </Link>
                <div />
            </div>
            <div className="borderDiv"></div>
        </HeaderContainer>
    )
}