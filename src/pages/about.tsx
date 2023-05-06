import { useState, useEffect } from 'react'
import { AboutContainer, AboutContent, InterestsContainer } from "@/styles/pages/about";

import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { techTags } from '../tags/data'

import TagFolder from "@/components/TagFolder";

export default function About() {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        setIsVisible(true)
    }, [])

    const style = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
    }

    const aboutText = "\nI started studying programming in 2019, when \nI enrolled in my first technical course in\n Systems Development, since then I've been very\n interested in technology. Today I'm a front-end\n developer because I like to deliver beautiful,\n high-performance products that users can interact\n with and that meet their expectations.\n\n I believe that learning is continuous and the next \n step never it's the last.\n"
    const paragraphs = aboutText.split("\n")

    const [openTag, setOpenTag] = useState<boolean>(false)

    function changeTagStatus() {
        openTag === false ? setOpenTag(true) : setOpenTag(false)
    }

    return (
        <AboutContainer style={style}>
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
                <div>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{index + 1}</p>
                    ))}
                </div>
                <div className='paragraphs'>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{index === 0 && "/**"} {index !== 0 && index !== paragraphs.length - 1 && "*"} {index === paragraphs.length - 1 && "*/"} {paragraph}</p>
                    ))}
                </div>
            </AboutContent>
        </AboutContainer>
    )
}