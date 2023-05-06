import ProjectCard from '@/components/ProjectCard'
import { ProjectDiv, ProjectsContainer, ProjectsWrapper } from '@/styles/pages/projects'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        setIsVisible(true)
    }, [])

    const style = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
    }
    return (
        <ProjectsContainer style={style}>
            <div>
                <h3>{"//"} Top projects</h3>
            </div>
            <ProjectsWrapper>
                <ProjectDiv>
                    <ProjectCard
                        title="Project 1"
                        contribuitions={"12 commits"}
                        usedTechs={["", "NextJS", "ReactJS", "NodeJS", ""]}
                        linkTitle={"See this project"}
                        boxShadow={false}
                    />

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam libero recusandae sequi perspiciatis. Mollitia quidem totam sequi quas hic debitis corrupti expedita? Dolor, quos voluptate consectetur iusto cupiditate ut rem.</p>
                    <Link href={"/"}>
                        Check in GitHub
                    </Link>
                </ProjectDiv>
                <ProjectDiv>
                    <ProjectCard
                        title="Project 2"
                        contribuitions={"21 commits"}
                        usedTechs={["", "NextJS", "ReactJS", "NodeJS", ""]}
                        linkTitle={"See this project"}
                        boxShadow={false}
                    />

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam libero recusandae sequi perspiciatis. Mollitia quidem totam sequi quas hic debitis corrupti expedita? Dolor, quos voluptate consectetur iusto cupiditate ut rem.</p>
                    <Link href={"/"}>
                        Check in GitHub
                    </Link>
                </ProjectDiv>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}