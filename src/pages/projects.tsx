import ProjectCard from '@/components/ProjectCard'
import { UserReposContext } from '@/contexts/userReposContext'
import { ProjectDiv, ProjectsContainer, ProjectsWrapper } from '@/styles/pages/projects'
import axios from 'axios'
import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'

interface RepositoryProps {
    name: string;
}

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false)
    const [commitsArray, setCommitsArray] = useState<any[]>([])

    const { userRepos } = useContext(UserReposContext);

    const filterNames = [
        { name: "Blood_Donation_App" },
        { name: "Next_Travel_Booking" },
        { name: "Text_Editor" },
        { name: "IgniteReact_04_CoffeeDelivery" },
        { name: "IgniteReact_01_IgniteFeed" },
        { name: "TwitterClone" }
    ]

    const filteredRepos = userRepos.filter((repo: RepositoryProps) => {
        return filterNames.some((name) => name.name === repo.name);
    });
    console.log(filteredRepos);
    console.log(filteredRepos);

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        async function fetchData() {
            // Necessario pois os objetos de commits de cada repositorio nao fazem parte do proprio objeto do repo, mas sim um outro endpoint
            let commitsResponse = [];
            for (let i = 0; i < filteredRepos.length; i++) {
                const response = await axios.get(`https://api.github.com/repos/VitorHugoAntunes/${filteredRepos[i].name}/commits`)
                commitsResponse.push(response.data)
            }

            setCommitsArray(commitsResponse)
            console.log("ARRAY DE COMMITS", commitsArray)
        };
        fetchData();
    }, [])


    const style = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
    }
    return (
        <ProjectsContainer style={style}>
            <ProjectsWrapper>
                {filteredRepos.map((repositoryProject, index) => (
                    <ProjectDiv key={repositoryProject.id}>
                        <ProjectCard
                            title={`${repositoryProject.name}`}
                            contribuitions={commitsArray.length > 0 ? `${commitsArray[index].length} commits` : "0"}
                            usedTechs={["", ...repositoryProject.topics.slice(0, 5), ""]}
                            linkTitle={"See this project"}
                            link={`${repositoryProject.html_url}`}
                            boxShadow={false}
                        />

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam libero recusandae sequi perspiciatis. Mollitia quidem totam sequi quas hic debitis corrupti expedita? Dolor, quos voluptate consectetur iusto cupiditate ut rem.</p>
                        <Link href={`${repositoryProject.html_url}`}>
                            Check in GitHub
                        </Link>
                    </ProjectDiv>
                ))}
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}