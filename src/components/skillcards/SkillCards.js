import SkillCard from "./SkillCard";
import { Container } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./skillCards.scss";

function SkillCards() {
    return (
        <Container className="CardContainer">
            <ul className="Cards">
                {// C++
                SkillCard(<>
                    <Icon icon="skill-icons:cpp" className="CardIcon"/>
                    <h2>C/C++</h2>
                </>)}
                {// Python
                SkillCard(<>
                    <Icon icon="skill-icons:python-light" className="CardIcon"/>
                    <h2>Python</h2>
                </>)}
                {// Java
                SkillCard(<>
                    <Icon icon="skill-icons:java-light" className="CardIcon"/>
                    <h2>Java</h2>
                </>)}
                {// JS
                SkillCard(<>
                    <Icon icon="skill-icons:javascript" className="CardIcon"/>
                    <h2>JavaScript</h2>
                </>)}
                {// HTML
                SkillCard(<>
                    <Icon icon="skill-icons:html" className="CardIcon"/>
                    <h2>HTML</h2>
                </>)}
                {// CSS
                SkillCard(<>
                    <Icon icon="skill-icons:css" className="CardIcon"/>
                    <h2>CSS</h2>
                </>)}
                {// PostgreSQL
                SkillCard(<>
                    <Icon icon="skill-icons:postgresql-light" className="CardIcon"/>
                    <h2>PostgreSQL</h2>
                </>)}
                {// Ruby
                SkillCard(<>
                    <Icon icon="skill-icons:ruby" className="CardIcon"/>
                    <h2>Ruby</h2>
                </>)}
                {// React
                SkillCard(<>
                    <Icon icon="skill-icons:react-light" className="CardIcon"/>
                    <h2>React</h2>
                </>)}
                {// Node
                SkillCard(<>
                    <Icon icon="skill-icons:nodejs-light" className="CardIcon"/>
                    <h2>NodeJS</h2>
                </>)}
                {// Git
                SkillCard(<>
                    <Icon icon="skill-icons:git" className="CardIcon"/>
                    <h2>Git</h2>
                </>)}
                {// NPM
                SkillCard(<>
                    <Icon icon="skill-icons:npm-light" className="CardIcon"/>
                    <h2>NPM</h2>
                </>)}
                {// SASS
                SkillCard(<>
                    <Icon icon="skill-icons:sass" className="CardIcon"/>
                    <h2>SASS</h2>
                </>)}
                {// Bootstrap
                SkillCard(<>
                    <Icon icon="skill-icons:bootstrap" className="CardIcon"/>
                    <h2>Bootstrap</h2>
                </>)}
            </ul>
        </Container>
    )
}

export default SkillCards;