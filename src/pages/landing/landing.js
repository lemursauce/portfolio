import { Container } from "react-bootstrap";
import { Icon } from '@iconify/react';

import AnimatedBackground from "../../components/animatedbackground/AnimatedBackground";

import "./landing.scss";
//import profilePicture from "../../resources/icon.png";
import profilePicture from "../../resources/me.png"

import SkillCards from "../../components/skillcards/SkillCards";
import ProjectCards from "../../components/projectcards/ProjectCards";

function Landing() {
    return (
        <div className="Landing">
            <AnimatedBackground />
            <Container fluid className="Hello Central" id="Home">
                <div className="ProfileContainer">
                    <img className="ProfilePicture" src={profilePicture} aria-label="Image of Logan Carbo"/>
                </div>
                <div className="AgainstBackground Central">
                    <h1 className="display-5 text-center">
                        Hello, I'm <span className="Emphasize"> Logan Carbo</span>,
                    </h1>
                    <h2 className="display-6 text-center">
                        A driven software developer.
                    </h2>
                    <div className="socials">
                        <a href="https://github.com/lemursauce" aria-label="My GitHub account" title="My GitHub account">
                            <Icon icon="mdi:github" className="SocialIcon"/>
                        </a>
                        <a href="https://discordapp.com/users/657334339591471114" aria-label="My Discord account" title="My Discord account">
                            <Icon icon="ic:baseline-discord" className="SocialIcon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/logan-a-carbo/" aria-label="My LinkedIn account" title="My LinkedIn account">
                            <Icon icon="mdi:linkedin" className="SocialIcon"/>
                        </a>
                        <a href="https://leetcode.com/u/lacarbo/" aria-label="My LeetCode account" title="My LeetCode account">
                            <Icon icon="simple-icons:leetcode" className="SocialIcon"/>
                        </a>
                        <a href="mailto:lacarbo05@gmail.com" aria-label="My Email account" title="My Email">
                            <Icon icon="mdi:gmail" className="SocialIcon"/>
                        </a>
                    </div>
                </div>
            </Container>
            
            <Container fluid className="AboutMe ContentAnchor" id="About">
                <h1 className="ContentHead">About Me</h1>
                <Container>
                    <p>
                        I am a committed, self-driven, recent graduate from <a href="https://www.tamu.edu/" title="Texas A&M Homepage" aria-label="Link to Texas A&M Homepage">Texas A&M University</a> with a Bachelor of Science in Computer Science and a minor in Mathematics.
                    </p>
                    <p>
                        I am seeking employment opportunities that will expand my skills, both technical and professional, with a particular interest in any and all positions that involve some degree of frontend/backend development, systems design, algorithm development, cryptography, machine learning, computer graphics, and/or data analysis. My aspiration is to apply my skills and tenacious problem solving approach to various programming challenges, in whatever form they may take.
                    </p>
                </Container>
            </Container>

            <Container fluid className="ContentAnchor" id="Skills">
                <div className="py-3 AgainstBackground Central">
                    <h1 className="display-5 text-center Emphasize">
                    Technical Skills
                    </h1>
                </div>
                {SkillCards()}
            </Container>

            <Container fluid className="Projects ContentAnchor" id="Projects">
                <h1 className="ContentHead">Projects</h1>
                {ProjectCards()}
            </Container>

            <br/>
        </div>
)};

export default Landing;