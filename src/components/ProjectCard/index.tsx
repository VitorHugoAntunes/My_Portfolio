import { useEffect } from 'react'
import Link from "next/link";
import { ProjectCardDiv } from './styles'

interface ProjectProps {
    title: string;
    contribuitions: string;
    usedTechs: String[],
    linkTitle: string;
}

interface CardStyleProps {
    boxShadow: boolean;
}

export default function ProjectCard({ title, contribuitions, usedTechs, linkTitle, boxShadow }: ProjectProps & CardStyleProps) {
    return (
        <ProjectCardDiv className={boxShadow === true ? 'boxShadowActive' : ''}>
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
                <Link href={"/projects"}>
                    <div>
                        {linkTitle}
                    </div>

                </Link>
            </div>

        </ProjectCardDiv>
    )
}