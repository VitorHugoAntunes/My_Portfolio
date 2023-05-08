import { useState } from 'react'
import Link from "next/link";
import { HeaderContainer } from "./styles";

export default function Header() {
    const [selectedTab, setSelectedTab] = useState<string>("Home");

    function changeSelectedTab() {

    }

    return (
        <HeaderContainer>
            <div className="navigationDiv">
                <Link href={'/'} onClick={() => setSelectedTab("Home")} className={selectedTab === "Home" ? "selected" : ""}>
                    <div>
                        <span>Home</span>
                    </div>
                </Link>
                <Link href={'/about'} onClick={() => setSelectedTab("About")} className={selectedTab === "About" ? "selected" : ""}>
                    <div>
                        <span>About me</span>
                    </div>
                </Link>
                <Link href={'/projects'} onClick={() => setSelectedTab("Projects")} className={selectedTab === "Projects" ? "selected" : ""}>
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