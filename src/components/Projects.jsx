import '../styles/Projects.css'

const Projects = () => {
    let projectList = [
        {
            title: "Stock trader",
            language: "Python",
            desc: "An automatic stock trader script created with the goal of 1% growth everyday. Indexes stock market over the past week and finds top performing stocks in the NYSE to trade. Buys stocks and holds until end of day or until specified conditions are met.",
            link: "https://github.com/CommanderXander1/stock-trader",
        }, 
        {
            title: "Maymester course selector",
            language: "Python, HTML, JavaScript, CSS",
            desc: "A flask app made by me and my friends for our school that takes form data and sorts students into chosen classes for the maymester program. Our school bought the program from us for $1200.",
            link: "https://github.com/WARAvy/WAMaymester"
        }, 
        {
            title: "Matchmaker Valentine's Day survey",
            language: "Python, HTML, JavaScript, CSS",
            desc: "A server that connects to a form hosted on our school's website and saves data locally, giving students their best match based on the form and emailing every participant their results. Used by our school newspaper 2 years in a row with over 400 students participating each year.",
            link: "https://github.com/WARAvy/WAMatchmaker"
        }, 
        {
            title: "Ohio Client",
            language: "Java",
            desc: "A DIY Minecraft hacked client I made to learn Java with Minecraft MCP. Unfinished but working with a GUI, several modules/cheats and custom menu and an alt manager.",
            link: "https://github.com/CommanderXander1/ohioclient"
        }]
    projectList = projectList.map((project) => {
        return(
            <div className="project-child" key={projectList.indexOf(project)}>
                <h1 className="project-title">{project.title}</h1>
                <div className='project-body'>
                    <p className='project-language'>Languages: {project.language}</p>
                    <p className="project-desc">{project.desc}</p>
                    <a className="project-link" href={project.link} target='_blank'>Github</a> 
                </div>
            </div>
        )
    })        
    return (
        <>
            <p className='projects-header' id='projects'>Projects</p>
            <div className="project-parent">
                {projectList}
            </div>
        </>
    )
}

export default Projects