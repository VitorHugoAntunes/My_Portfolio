import ProjectCard from '@/components/ProjectCard'
import { UserReposContext } from '@/contexts/userReposContext'
import { ProjectDiv, ProjectsContainer, ProjectsWrapper } from '@/styles/pages/projects'
import axios from 'axios'
import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import { FiLoader } from 'react-icons/fi'

interface RepositoryProps {
    name: string;
}

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false)
    const [commitsArray, setCommitsArray] = useState<any[]>([])
    const [filteredRepositories, setFilteredRepositories] = useState<any[]>([])

    const { userRepos } = useContext(UserReposContext);

    const filterNames = [
        { name: "Blood_Donation_App" },
        { name: "Next_Travel_Booking" },
        { name: "Text_Editor" },
        { name: "IgniteReact_04_CoffeeDelivery" },
        { name: "IgniteReact_01_IgniteFeed" },
        { name: "TwitterClone" }
    ]

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        async function fetchData() {
            const userCommits = localStorage.getItem("commitsArray");
            const filteredUserRepositories = localStorage.getItem("filteredRepositories");
            if (!userCommits || userCommits === undefined || userCommits === "") {
                // Necessario pois os objetos de commits de cada repositorio nao fazem parte do proprio objeto do repo, mas sim um outro endpoint
                let commitsResponse = [];

                const filteredRepos = userRepos.filter((repo: RepositoryProps) => {
                    return filterNames.some((name) => name.name === repo.name);
                });

                for (let i = 0; i < filteredRepos.length; i++) {
                    const response = await axios.get(`https://api.github.com/repos/VitorHugoAntunes/${filteredRepos[i].name}/commits`)
                    commitsResponse.push(response.data)
                }

                localStorage.setItem("commitsArray", JSON.stringify(commitsResponse))
                localStorage.setItem("filteredRepositories", JSON.stringify(filteredRepos))
                console.log("ARRAY DE COMMITS", commitsArray)
                console.log("Chamou de API")
                console.log(commitsResponse)
                setCommitsArray(commitsResponse)
                setFilteredRepositories(filteredRepos)
            } else {
                setCommitsArray(JSON.parse(userCommits!))
                setFilteredRepositories(JSON.parse(filteredUserRepositories!))
            }

        };
        fetchData();
    }, [setCommitsArray, setFilteredRepositories])

    const style = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
    }

    return (
        <ProjectsContainer style={style}>
            <ProjectsWrapper>
                {filteredRepositories.length === 0 ? (
                    <div className='loadingDiv'>
                        <FiLoader size={24} />
                    </div>
                ) : filteredRepositories !== null && filteredRepositories.length > 0 && filteredRepositories.map((repositoryProject, index) => (
                    <ProjectDiv key={repositoryProject.id}>
                        <ProjectCard
                            title={`${repositoryProject.name}`}
                            contribuitions={commitsArray.length > 0 ? `${commitsArray[index].length} commits` : "0"}
                            usedTechs={["", ...repositoryProject.topics.slice(0, 5), ""]}
                            linkTitle={"See this project"}
                            link={`${repositoryProject.html_url}`}
                            targetBlank={true}
                            boxShadow={false}
                        />

                        <p>{repositoryProject.description}</p>

                        <Link href={`${repositoryProject.html_url}`} target={'_blank'}>
                            Check in GitHub
                        </Link>
                    </ProjectDiv>
                ))}
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}