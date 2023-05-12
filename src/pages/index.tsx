import ProjectCard from "@/components/ProjectCard";
import SoundWaves from "@/components/SoundWaves";
import { HomeContainer } from "@/styles/pages/home";
import { useEffect, useState, useContext } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { useRouter } from 'next/router'
import axios from "axios";
import { UserReposContext } from "@/contexts/userReposContext";

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const { userRepos, setUserRepos } = useContext(UserReposContext)

  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const userRepositories = localStorage.getItem("userRepositories");

      if (!userRepositories) {
        const responsePage1 = await axios.get("https://api.github.com/users/VitorHugoAntunes/repos?page=1");
        const responsePage2 = await axios.get("https://api.github.com/users/VitorHugoAntunes/repos?page=2");

        const repositories = responsePage1.data.concat(responsePage2.data);
        console.log(repositories);

        localStorage.setItem("userRepositories", JSON.stringify(repositories));
        console.log("chamou a API");

        setUserRepos(repositories);
      } else {
        setUserRepos(JSON.parse(userRepositories));
      }
    }

    fetchData();
  }, [setUserRepos]);

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (inputValue === "more") {
      router.push("/about")
    }
  }, [inputValue])

  const style = {
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
  }

  return (
    <HomeContainer style={style}>
      <div>
        <div>
          <span>Hello! My name is</span>
          <h1>Vitor Hugo Antunes</h1>
          <span className="occupation">Front-end developer</span>
        </div>
        <div>
          <p dangerouslySetInnerHTML={{ __html: "// write the code below to continue:" }} />
          <div>
            <FiChevronsRight size={24} />
            <input type="text" placeholder="more" onChange={(target) => setInputValue(target.target.value.toLowerCase())} />
          </div>
        </div>
      </div>

      <ProjectCard
        title={`${userRepos.length} projects`}
        usedTechs={["", "NextJS", "ReactJS", "NodeJS", "and more", ""]}
        linkTitle={"Click here to see my projects"}
        link="/projects"
        targetBlank={false}
        boxShadow={true}
      />

      <SoundWaves />

    </HomeContainer>
  )
}
