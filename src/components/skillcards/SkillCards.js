import SkillCard from "./SkillCard";
import { Container } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./skillCards.scss";

function SkillCards() {
    return (
        <Container className="CardContainer">
            <ul className="SkillCards">
                {// C++
                SkillCard(<>
                    <Icon icon="skill-icons:cpp" className="SkillCardIcon"/>
                    <h2>C/C++</h2>
                </>)}
                {// Python
                SkillCard(<>
                    <Icon icon="skill-icons:python-light" className="SkillCardIcon"/>
                    <h2>Python</h2>
                </>)}
                {// Java
                SkillCard(<>
                    <Icon icon="skill-icons:java-light" className="SkillCardIcon"/>
                    <h2>Java</h2>
                </>)}
                {// JS
                SkillCard(<>
                    <Icon icon="skill-icons:javascript" className="SkillCardIcon"/>
                    <h2>JS</h2>
                </>)}
                {// HTML
                SkillCard(<>
                    <Icon icon="skill-icons:html" className="SkillCardIcon"/>
                    <h2>HTML</h2>
                </>)}
                {// CSS
                SkillCard(<>
                    <Icon icon="skill-icons:css" className="SkillCardIcon"/>
                    <h2>CSS</h2>
                </>)}
                {// PostgreSQL
                SkillCard(<>
                    <Icon icon="skill-icons:postgresql-light" className="SkillCardIcon"/>
                    <h2>SQL</h2>
                </>)}
                {// Ruby
                SkillCard(<>
                    <Icon icon="skill-icons:ruby" className="SkillCardIcon"/>
                    <h2>Ruby</h2>
                </>)}
                {// React
                SkillCard(<>
                    <Icon icon="skill-icons:react-light" className="SkillCardIcon"/>
                    <h2>React</h2>
                </>)}
                {// Node
                SkillCard(<>
                    <Icon icon="skill-icons:nodejs-light" className="SkillCardIcon"/>
                    <h2>NodeJS</h2>
                </>)}
                {// Git
                SkillCard(<>
                    <Icon icon="skill-icons:git" className="SkillCardIcon"/>
                    <h2>Git</h2>
                </>)}
                {// NPM
                SkillCard(<>
                    <Icon icon="skill-icons:npm-light" className="SkillCardIcon"/>
                    <h2>NPM</h2>
                </>)}
                {// SASS
                SkillCard(<>
                    <Icon icon="skill-icons:sass" className="SkillCardIcon"/>
                    <h2>SASS</h2>
                </>)}
                {// Bootstrap
                SkillCard(<>
                    <Icon icon="skill-icons:bootstrap" className="SkillCardIcon"/>
                    <h2>Bootstrap</h2>
                </>)}
            </ul>
        </Container>
    )
}

export default SkillCards;