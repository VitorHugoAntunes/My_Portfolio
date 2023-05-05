import { HomeContainer, PresentationCard } from "@/styles/pages/home";
import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";

export default function Home() {
  return (
    <HomeContainer>
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
            <input type="text" placeholder="whois" />
          </div>
        </div>
      </div>

      <PresentationCard>
        <div>
          <span>40 projects</span>
          <span>200 contribuitions</span>
        </div>
        <div>
          <div className="comments">
            <span dangerouslySetInnerHTML={{ __html: "/**" }} />
            <span>* NextJS</span>
            <span>* ReactJS</span>
            <span>* NodeJS</span>
            <span>*/</span>
          </div>
          <Link href={"/"}>
            <div>
              Click here to see my projects
            </div>

          </Link>
        </div>
      </PresentationCard>

    </HomeContainer>
  )
}
