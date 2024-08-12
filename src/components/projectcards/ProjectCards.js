
//import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard"
import "./projectCards.scss"



function projectCards() {

    return (
        <ul className="ProjectCards">
            {ProjectCard("Point-Of-Sale Project", <>
                <p>One of my first software projects. Me and a team of other CS students came together to make a point-of-sale system aimed for retail use by leveraging various technologies, the final project focusing mostly on React and NodeJS with a PostgreSQL database.</p>
                <p>I was responsible as a team leader and fullstack developer, designing most of the pages and integrating the database in the backend.</p>
            </>, "https://github.com/hunterpearson36/Project315")}
            {ProjectCard("MoveTX Organization Members App",<>
                <p>My first organization project and my first project in Ruby. Me and a student engineer team collaborated to make an update to an existing web application for the MoveTX campus organization using Rails with a PostgreSQL backend.</p>
                <p>My role on the team was a mixture of being a frontend designer/developer, analyst, and unit test designer.</p>
            </>, "https://github.com/SP23-CSCE431/csce431-sprints-move-tx")}
            {ProjectCard("TAMU Cybersecurity Center Progress Tracker",<>
                <p>Another student project. Me and a team of friends worked to develop a cybersecurity program and progress tracker as a proposal for the TAMU Cybersecurity Center.</p>
                <p>We designed the website using a React frontend with Bootstrap and hooked up a NodeJS backend with PostgreSQL database server. Details on data storage are included in the repository. We all had a hand in the database design, but I was mainly in charge of handling the "Initiatives," i.e. the pages and database tables representing each student's classes, internships, and certificates.</p>
            </>,"https://github.com/aheff20/CSCE310")}
            {ProjectCard("This Portfolio",<>
                <p>As a personal project, I made this portfolio!</p>
                <p>It is designed using a React frontend and is aided with several tools and libraries, like Bootstrap, CSS-doodle, and SCSS.</p>
                <p>As with most portfolios, this is intended to be a living project, meaning I will probably always be developing something for this project, whether it just be some minor bug fix to adding a new project or even adding an entirely new feature.</p>
            </>,"https://github.com/lemursauce/portfolio")}
            {ProjectCard("AWA5.0 CLI Tools in C",<>
                <p>As a personal challenge, I made some commandline tools to work with the <a className="ManualLink" href="https://github.com/TempTempai/AWA5.0">AWA5.0</a> Esoteric language.</p>
                <p>This exercise was meant to strengthen my own skills when using C as a language, as well as familiarize myself with parsing techniques for very simple languages. It also allowed me to explore (on a low level) how to convert between different file types effectively as well as create an interpreter for all allowed file types.</p>
                <p>While more features can be developed and a proper release should be made, this is a finished project so feel free to compile and run on your own device.</p>
            </>,"https://github.com/lemursauce/Exercise-Awa5.0_CLI_tools_in_C")}
            {/*ProjectCard("",<></>,"")*/}
        </ul>
    );
}

export default projectCards;