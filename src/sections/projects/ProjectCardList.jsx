import ProjectCard from "./ProjectCard";
import { Container, Row, Col, CardDeck } from "reactstrap";
import { PROJECTSLIST } from "../../app/shared/PROJECTSLIST";
import './projects.css'

const ProjectCardList = () => {
    const projects = PROJECTSLIST.map(project => {
        return (
            <ProjectCard project={project} key={project.id}/>
        )
    })
    return ( 
        <Container>
            <Row style={{justifyContent: 'center'}}> 
                {projects}
            </Row>
        </Container>
     );
}
 
export default ProjectCardList;