import {SiJavascript, SiHtml5, SiCss3, SiReact, SiJava, SiMysql, SiSpring, SiAmazonaws, SiHeroku, SiGithub } from "react-icons/si"
import j1 from "../images/todo_js.jpg"
import html1 from "../images/sao_luis.jpg"
import css1 from "../images/codar.jpg"
import css2 from "../images/bootstrap1.jpg"
import css3 from "../images/bom_trajeto.jpg"
import wecame from "../../assets/images/wecame.jpg";
import about1 from "../../assets/images/aboutme1.0.jpg";


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
        imagens: [about1]
    },
    {
        id: 5,
        tec: SiJava,
        title: "Java",
        imagens: [wecame]
    },
    {
        id: 6,
        tec: SiSpring,
        title: "Spring",
        imagens: [wecame]
    },
    {
        id: 7,
        tec: SiMysql,
        title: "Mysql",
        imagens: [wecame]
    },
    {
        id: 8,
        tec: SiAmazonaws,
        title: "AWS",
        imagens: [wecame]
    },
    {
        id: 9,
        tec: SiHeroku,
        title: "Heroku",
        imagens: [wecame]
    },
    {
        id: 10,
        tec: SiGithub,
        title: "Github",
        imagens: [wecame]
    },
]

export default dados;