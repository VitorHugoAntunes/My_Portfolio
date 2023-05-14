import { useEffect } from 'react'
import Link from "next/link";
import { ProjectCardDiv } from './styles'

interface ProjectProps {
    title: string;
    contribuitions?: string;
    usedTechs: String[],
    linkTitle: string;
    link: string;
    targetBlank?: boolean;
}

interface CardStyleProps {
    boxShadow: boolean;
}

export default function ProjectCard({ title, contribuitions, usedTechs, linkTitle, link, targetBlank, boxShadow }: ProjectProps & CardStyleProps) {
    return (
        <ProjectCardDiv className={boxShadow === true ? 'projectCard boxShadowActive' : 'projectCard'}>
            <div>
                <span>{title}</span>
                <span>{contribuitions}</span>
            </div>
            <div>
                <div className="comments">
                    {usedTechs.map((tech, index) => (
                        <span key={index}>{index === 0 && "/**"} {index !== 0 && index !== usedTechs.length - 1 && "*"} {index === usedTechs.length - 1 && "*/"} {tech}</span>
                    ))}
                </div>
                <Link href={`${link}`} target={targetBlank === true ? '_blank' : '_self'}>
                    <div>
                        {linkTitle}
                    </div>

                </Link>
            </div>

        </ProjectCardDiv>
    )
}