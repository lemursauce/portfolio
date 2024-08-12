
function ProjectLink(link) {
    return (
        <a
            type="button"
            className="btn btn-outline-dark"
            href = {link}
            style = {{"margin-top":"auto"}}
            target="_blank"
            rel="noreferrer"
        >
            Link Here
        </a>
    )
}

export default ProjectLink;