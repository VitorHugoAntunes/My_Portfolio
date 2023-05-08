import ProjectCard from "@/components/ProjectCard";
import SoundWaves from "@/components/SoundWaves";
import { HomeContainer } from "@/styles/pages/home";
import { useEffect, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { useRouter } from 'next/router'

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>("")

  const router = useRouter();

  console.log(inputValue)

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
            <input type="text" placeholder="more" onChange={(target) => setInputValue(target.target.value)} />
          </div>
        </div>
      </div>

      <ProjectCard
        title="40 projects"
        contribuitions={"200 contribuitions"}
        usedTechs={["", "NextJS", "ReactJS", "NodeJS", ""]}
        linkTitle={"Click here to see my projects"}
        boxShadow={true}
      />

      <SoundWaves />

    </HomeContainer>
  )
}
