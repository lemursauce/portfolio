import SkillCard from "./SkillCard";
import { Container } from "react-bootstrap";
//import "./skillCards.scss";

function SkillCards() {
    return (
        <Container className="CardContainer">
            <ul className="SkillCards">
                {// C++
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:cpp" data-inline="false"/>
                    <h2>C/C++</h2>
                </>)}
                {// Python
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:python-light" data-inline="false"/>
                    <h2>Python</h2>
                </>)}
                {// Java
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:java-light" data-inline="false"/>
                    <h2>Java</h2>
                </>)}
                {// JS
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:javascript" data-inline="false"/>
                    <h2>JS</h2>
                </>)}
                {// HTML
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:html" data-inline="false"/>
                    <h2>HTML</h2>
                </>)}
                {// CSS
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:css" data-inline="false"/>
                    <h2>CSS</h2>
                </>)}
                {// PostgreSQL
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:postgresql-light" data-inline="false"/>
                    <h2>SQL</h2>
                </>)}
                {// Ruby
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:ruby" data-inline="false"/>
                    <h2>Ruby</h2>
                </>)}
                {// React
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:react-light" data-inline="false"/>
                    <h2>React</h2>
                </>)}
                {// Node
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:nodejs-light" data-inline="false"/>
                    <h2>NodeJS</h2>
                </>)}
                {// Git
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:git" data-inline="false"/>
                    <h2>Git</h2>
                </>)}
                {// NPM
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:npm-light" data-inline="false"/>
                    <h2>NPM</h2>
                </>)}
                {// SASS
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:sass" data-inline="false"/>
                    <h2>SASS</h2>
                </>)}
                {// Bootstrap
                SkillCard(<>
                    <span class="iconify SkillCardIcon" data-icon="skill-icons:bootstrap" data-inline="false"/>
                    <h2>Bootstrap</h2>
                </>)}
            </ul>
        </Container>
    )
}

export default SkillCards;