
import ProjectCard from "./ProjectCard"
import "./projectCards.scss"

function projectCards() {

    return (
        <ul className="ProjectCards">
            {ProjectCard("Point-Of-Sale Project", <>
                <p>One of my first software projects: Me and a team of other CS students came together to design a point-of-sale system leveraging various technologies, the final project primarily utilizing React and NodeJS with a PostgreSQL database.</p>
                <p>On this project, I served as a team leader and full stack developer, developing most of the pages and integrating the database in the backend.</p>
            </>, "https://github.com/hunterpearson36/Project315")}
            {ProjectCard("MoveTX Organization Members App",<>
                <p>This was my first project with an organizational deliverable as well as my first project developed in Ruby. I worked with a team of student engineers to update and expand an existing web application for the MoveTX campus organization using Rails with a PostgreSQL backend.</p>
                <p>I was able to serve in a variety of roles for this project, including that of a frontend designer/developer, analyst, and unit test designer.</p>
            </>, "https://github.com/SP23-CSCE431/csce431-sprints-move-tx")}
            {ProjectCard("TAMU Cybersecurity Center Progress Tracker",<>
                <p>This is another academic project where I worked on a team to develop a proposal for a cybersecurity program and progress tracker applications for the TAMU Cybersecurity Center.</p>
                <p>We designed the website using a React frontend with Bootstrap and hooked up a NodeJS backend with PostgreSQL database server. Details on data storage are included in the repository. All team members participated in the database design. My primary role was in handling the "initiatives," i.e. the pages and database tables representing each student's classes, internships, and certificates.</p>
            </>,"https://github.com/aheff20/CSCE310")}
            {ProjectCard("This Portfolio",<>
                <p>As a personal project, I have developed this portfolio!</p>
                <p>It is designed using a React frontend and highlights several tools and libraries, such as Bootstrap, CSS-doodle, and SCSS.</p>
                <p>As with most portfolios, this portfolio is intended to be a living project, meaning it will be a continual work in progress, whether it is just some minor bug fix,  adding a new project, or eventually adding entirely new features.</p>
            </>,"https://github.com/lemursauce/portfolio")}
            {ProjectCard("AWA5.0 CLI Tools in C",<>
                <p>As a personal challenge, I developed some command line tools to work with the <a className="ManualLink" href="https://github.com/TempTempai/AWA5.0">AWA5.0</a> Esoteric language.</p>
                <p>This exercise was meant to strengthen my skills when using C as the development language, as well as familiarize myself with parsing techniques for very simple languages. This project allowed me to explore (on a low level) how to convert between different file types effectively as well as create an interpreter for all allowed file types.</p>
                <p>While more features can be developed and a proper release should be made, this is a finished project so feel free to compile and run on your own device.</p>
            </>,"https://github.com/lemursauce/Exercise-Awa5.0_CLI_tools_in_C")}
            {/*ProjectCard("",<></>,"")*/}
        </ul>
    );
}

export default projectCards;