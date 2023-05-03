import Link from "next/link";
import { HeaderContainer } from "./styles";

export default function Header() {
    return (
        <HeaderContainer>
            <div className="navigationDiv">
                <Link href={'/'} className="selected">
                    <div>
                        <span>Home</span>
                    </div>
                </Link>
                <Link href={'/'}>
                    <div>
                        <span>About me</span>
                    </div>
                </Link>
                <Link href={'/'}>
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