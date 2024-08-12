
import ProjectLink from "./ProjectLink";
import "./projectCards.scss";

function projectCard(title, content, link) {
    return (
        <li className="ProjectCard">
            <h2>{title}</h2>
            <div style={{"margin":"auto"}}>
                {content}
            </div>
            {ProjectLink(link)}
        </li>
    )
}

export default projectCard;