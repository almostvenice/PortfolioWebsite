import ProjectCard from "./ProjectCard";
import { Container, Row } from "reactstrap";
import { PROJECTSLIST } from "../../app/shared/PROJECTSLIST";

const ProjectCardList = () => {
    const projects = PROJECTSLIST.map(project => {
        return (
            <ProjectCard project={project} key={project.id}/>
        )
    })
    return ( 
        <Container>
            <Row>
                {projects}
            </Row>
        </Container>
     );
}
 
export default ProjectCardList;