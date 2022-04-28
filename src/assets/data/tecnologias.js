import {SiJavascript, SiHtml5, SiCss3, SiReact, SiJava, SiMysql, SiSpring, SiAmazonaws, SiHeroku, SiGithub } from "react-icons/si"
import j1 from "../todo_js.jpg"
import html1 from "../sao_luis.jpg"
import css1 from "../codar.jpg"
import css2 from "../bootstrap1.jpg"
import css3 from "../bom_trajeto.jpg"


const dados = [
    {
        id: 1,
        tec: SiJavascript,
        title: "Javascript",
        imagens: [j1]
    },
    {
        id: 2,
        tec: SiHtml5,
        title: "HTML5",
        imagens: [html1]
    },
    {
        id: 3,
        tec: SiCss3,
        title: "CSS3",
        imagens: [css1, css2, css3]
    },
    {
        id: 4,
        tec: SiReact,
        title: "ReactJS",
        imagens: []
    },
    {
        id: 5,
        tec: SiJava,
        title: "Java",
        imagens: []
    },
    {
        id: 6,
        tec: SiSpring,
        title: "Spring",
        imagens: []
    },
    {
        id: 7,
        tec: SiMysql,
        title: "Mysql",
        imagens: []
    },
    {
        id: 8,
        tec: SiAmazonaws,
        title: "AWS",
        imagens: []
    },
    {
        id: 9,
        tec: SiHeroku,
        title: "Heroku",
        imagens: []
    },
    {
        id: 10,
        tec: SiGithub,
        title: "Github",
        imagens: []
    },
]

export default dados;