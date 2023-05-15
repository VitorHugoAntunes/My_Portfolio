import { FaReact, FaCss3, FaHtml5, FaJava, FaNodeJs, FaUbuntu, FaSchool, FaUniversity, FaCode, FaGamepad, FaMusic } from "react-icons/fa";
import { TbBrandNextjs, TbDatabase, TbMath } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { GiAstronautHelmet } from "react-icons/gi";
// import { math } from "react-icons/all";

export const techTags = [
    { icon: <FaReact size={16} color="#4FCBED" />, title: "ReactJS" },
    { icon: <TbBrandNextjs size={16} />, title: "NextJS" },
    { icon: <SiTypescript size={16} color="#2F72BC" />, title: "Typescript" },
    { icon: <FaNodeJs size={16} color="#81B640" />, title: "NodeJS" },
    { icon: <FaJava size={16} color="#A11016" />, title: "Java" },
    { icon: <TbDatabase size={16} color="#F2D100" />, title: "SQL" },
    { icon: <FaCss3 size={16} color="#2247D7" />, title: "CSS" },
    { icon: <FaHtml5 size={16} color="#D84823" />, title: "HTML" },
    { icon: <FaUbuntu size={16} color="#D24412" />, title: "Linux" },
]

export const educationTags = [
    { icon: <FaSchool size={16} />, title: "High-school - 2016/2018" },
    { icon: <FaUniversity size={16} />, title: "Systems Development - 2019/2020" },
    { icon: <FaUniversity size={16} />, title: "Analysis and Systems Development - 2021/2024" },
    { icon: <FaCode size={16} color="#E74CA0" />, title: "Rocketseat Ignite - 2022/2023" },
]

export const interestsTags = [
    { icon: <FaGamepad size={16} color="#5294E2" />, title: "Games" },
    { icon: <FaMusic size={16} color="#C71585" />, title: "Music" },
    { icon: <GiAstronautHelmet size={16} />, title: "Astronomy" },
    { icon: <TbMath size={16} color="#F2D100" />, title: "Math" },
]