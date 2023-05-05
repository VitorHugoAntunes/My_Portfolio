import { ReactNode, useState } from 'react'
import { AboutContainer, AboutContent, InterestsContainer } from "@/styles/pages/about";

import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { FaReact, FaCss3, FaHtml5, FaJava, FaNodeJs, FaLinux, FaUbuntu } from "react-icons/fa";
import { TbBrandNextjs, TbDatabase } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

import TagFolder from "@/components/TagFolder";

export default function About() {
    const techTags = [
        { techIcon: <FaReact size={16} color="#4FCBED" />, title: "ReactJS" },
        { techIcon: <TbBrandNextjs size={16} />, title: "NextJS" },
        { techIcon: <SiTypescript size={16} color="#2F72BC" />, title: "Typescript" },
        { techIcon: <FaNodeJs size={16} color="#81B640" />, title: "NodeJS" },
        { techIcon: <FaJava size={16} color="#A11016" />, title: "Java" },
        { techIcon: <TbDatabase size={16} color="#F2D100" />, title: "SQL" },
        { techIcon: <FaCss3 size={16} color="#2247D7" />, title: "CSS" },
        { techIcon: <FaHtml5 size={16} color="#D84823" />, title: "HTML" },
        { techIcon: <FaUbuntu size={16} color="#D24412" />, title: "Linux" },
    ]

    const [openTag, setOpenTag] = useState<boolean>(false)

    function changeTagStatus() {
        openTag === false ? setOpenTag(true) : setOpenTag(false)
    }

    return (
        <AboutContainer>
            <InterestsContainer>
                <span>Explorer</span>

                <div className="tagsDiv">
                    <div className='myInterests' onClick={changeTagStatus}>
                        {openTag === false ? (<FiChevronRight size={16} />) : (<FiChevronDown size={16} />)}
                        <span>My Interests</span>
                    </div>
                    <div className={openTag === false ? 'techInterests' : 'techInterests open'}>
                        {techTags.map(tag => (
                            <TagFolder key={tag.title} arrowIcon={<FiChevronRight size={16} />} techIcon={tag.techIcon} title={tag.title} />
                        ))}
                    </div>

                </div>
            </InterestsContainer>

            <AboutContent>
                <h1>Hello</h1>
            </AboutContent>
        </AboutContainer>
    )
}