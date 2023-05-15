import { useEffect, useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderContainer, MenuContainer } from "./styles";
import { FiMenu, FiX } from 'react-icons/fi'
import Footer from '../Footer';

interface ChangeMenuStatusProps {
    changeMenuStatus?: () => void;
}

interface UrlProps {
    url: string
}

export function NavigationLinks({ changeMenuStatus, url }: ChangeMenuStatusProps & UrlProps) {

    return (
        <div className="navigationDiv" onClick={changeMenuStatus}>
            <Link href={'/'} className={url.endsWith("/") ? "selected" : ""}>
                <div>
                    <span>Home</span>
                </div>
            </Link>
            <Link href={'/about'} className={url.endsWith("/about") ? "selected" : ""}>
                <div>
                    <span>About me</span>
                </div>
            </Link>
            <Link href={'/projects'} className={url.endsWith("/projects") ? "selected" : ""}>
                <div>
                    <span>Projects</span>
                </div>
            </Link>
            <div />
        </div>
    )

}

export default function Header() {
    const router = useRouter();
    const currentURL = router.asPath;

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    function changeMenuStatus() {
        openMenu === false ? setOpenMenu(true) : setOpenMenu(false)
    }

    return (
        <HeaderContainer>
            <div className='headerNavigation'>
                <NavigationLinks url={currentURL} />

                <MenuContainer>
                    <strong>
                        {currentURL === "/" && "Home"}
                        {currentURL === "/about" && "About"}
                        {currentURL === "/projects" && "Projects"}
                    </strong>
                    <button onClick={changeMenuStatus}>
                        <FiMenu size={24} />
                    </button>

                    <div className={openMenu === true ? 'menuModal open' : 'menuModal'}>
                        <div>
                            <button onClick={changeMenuStatus}>
                                <FiX size={24} />
                            </button>
                        </div>

                        <NavigationLinks url={currentURL} changeMenuStatus={changeMenuStatus} />

                        <Footer />
                    </div>
                </MenuContainer>
                <div className="borderDiv"></div>

            </div>
        </HeaderContainer>
    )
}